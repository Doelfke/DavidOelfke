from fastapi import FastAPI

app = FastAPI(
    title="Vercel + FastAPI",
    description="Vercel + FastAPI",
    version="1.0.0",
)

@app.get("/")
def read_root():
    return "hi"