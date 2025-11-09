import os
from fastapi import FastAPI
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
    """Ask a question about David Oelfke."""
    model = ChatOpenAI(
        model="gpt-5-mini",
        api_key=OPENAI_API_KEY,
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

    response = agent.invoke({"messages": [{"role": "user", "content": question}]})

    final_message = (
        response["messages"][-1].content
        if "messages" in response and response["messages"]
        else str(response)
    )

    return {"message": final_message}