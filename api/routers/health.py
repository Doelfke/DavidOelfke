"""
Health check endpoints.
"""
from fastapi import APIRouter
from typing import Dict
from datetime import datetime

router = APIRouter()


@router.get("/health")
async def health_check() -> Dict[str, str]:
    """
    Health check endpoint.
    
    Returns:
        Dict containing status and timestamp
    """
    return {
        "status": "healthy",
        "timestamp": datetime.utcnow().isoformat(),
    }
