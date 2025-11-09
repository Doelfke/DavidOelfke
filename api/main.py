import os
from fastapi import FastAPI
from dotenv import load_dotenv
from langchain.agents import create_agent
from langchain_openai import ChatOpenAI

load_dotenv()

app = FastAPI(
    title="Vercel + FastAPI",
    description="Vercel + FastAPI",
    version="1.0.0",
)

openApiKey = os.getenv("OPENAI_API_KEY", "default_value")

def get_weather(city: str) -> str:
    """Get weather for a given city."""
    return f"It's always sunny in {city}!"

@app.get("/")
def read_root():
    return {"message": "hi"}

@app.get("/ask")
def ask():
    model = ChatOpenAI(
        model="gpt-4.1",
        openai_api_key=openApiKey,
    )

    agent = create_agent(model, tools=[get_weather])  

    response = agent.invoke(
        {"messages": [{"role": "user", "content": "what is the weather in sf"}]}
    )
    
    final_message = response["messages"][-1].content if "messages" in response and response["messages"] else str(response)
    
    return {"message": final_message}