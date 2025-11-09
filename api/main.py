from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict

from routers import health
from config import settings

app = FastAPI(
    title=settings.APP_NAME,
    description="FastAPI backend for DavidOelfke portfolio",
    version=settings.VERSION,
    docs_url="/docs",
    redoc_url="/redoc",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router, prefix="/api", tags=["health"])


@app.get("/")
async def root() -> Dict[str, str]:
    """Root endpoint."""
    return {
        "message": "Welcome to DavidOelfke API",
        "docs": "/docs",
        "health": "/api/health"
    }