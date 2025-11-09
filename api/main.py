"""
Main FastAPI application entry point.
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict
import os

# Import routers and config
try:
    from routers import health
    from config import settings
except ImportError:
    # Fallback for Vercel deployment
    from api.routers import health
    from api.config import settings

# Create FastAPI app instance
app = FastAPI(
    title=settings.APP_NAME,
    description="FastAPI backend for DavidOelfke portfolio",
    version=settings.VERSION,
    docs_url="/docs",
    redoc_url="/redoc",
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(health.router, prefix="/api", tags=["health"])


@app.get("/")
async def root() -> Dict[str, str]:
    """Root endpoint."""
    return {
        "message": "Welcome to DavidOelfke API",
        "docs": "/docs",
        "health": "/api/health"
    }


# Vercel serverless function handler
handler = app
