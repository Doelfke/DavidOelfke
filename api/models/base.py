"""
Base Pydantic models.
"""
from pydantic import BaseModel, ConfigDict
from typing import Optional
from datetime import datetime


class BaseResponse(BaseModel):
    """Base response model with common fields."""
    
    model_config = ConfigDict(
        from_attributes=True,
        json_schema_extra={
            "example": {
                "message": "Success",
                "timestamp": "2025-11-08T12:00:00"
            }
        }
    )
    
    message: str
    timestamp: datetime = datetime.utcnow()


class HealthResponse(BaseModel):
    """Health check response model."""
    
    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "status": "healthy",
                "timestamp": "2025-11-08T12:00:00"
            }
        }
    )
    
    status: str
    timestamp: str
