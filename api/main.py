import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from dotenv import load_dotenv
from langchain.agents import create_agent
from langchain_openai import ChatOpenAI
from technologies import TECHNOLOGIES
from work_history import WORK_HISTORY

load_dotenv()

app = FastAPI(
    title="Vercel + FastAPI",
    description="Vercel + FastAPI",
    version="1.0.0",
)

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "default_value")
ALLOWED_DOMAIN = os.getenv("ALLOWED_DOMAIN")



def get_david_oelfke_info() -> dict:
    """Get information about David Oelfke."""
    return {
        "name": "David Oelfke",
        "city": "San Diego",
        "programming languages and technologies": TECHNOLOGIES,
        "work experience": WORK_HISTORY
    }

@app.get("/")
def read_root():
    """Root endpoint."""
    return {"message": "hi"}


@app.get("/ask/{question}")
def ask(question: str):
    """Ask a question about David Oelfke with streaming response."""
    
    async def generate():
        try:
            model = ChatOpenAI(
                model="gpt-4.1-mini",
                api_key=OPENAI_API_KEY,
                streaming=True,
            )

            system_prompt = (
                "Answer the user's questions using the provided tools. "
                "Do not use the word 'listed' in your answers. "
                "Only answer things about David Oelfke and his work experience. "
                "If the user asks about anything else, respond with "
                "'I can only answer questions about David Oelfke and his work experience.'"
            )

            agent = create_agent(
                model,
                tools=[get_david_oelfke_info],
                system_prompt=system_prompt,
            )

            async for event in agent.astream_events(
                {"messages": [{"role": "user", "content": question}]},
                version="v2"
            ):
                kind = event["event"]
                if kind == "on_chat_model_stream":
                    content = event["data"]["chunk"].content
                    if content:
                        yield content
            
            # Send a final event to signal completion
            yield ""
        except Exception as e:
            yield f"data: Error: {str(e)}\n\n"

    return StreamingResponse(generate(), media_type="text/event-stream")


app.add_middleware(
    CORSMiddleware,
    allow_origins=[ALLOWED_DOMAIN],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)