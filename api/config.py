"""
Application configuration settings.
"""
from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import List


class Settings(BaseSettings):
    """Application settings with type hints."""
    
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore",
        env_ignore_empty=True,
    )
    
    APP_NAME: str = "DavidOelfke API"
    VERSION: str = "0.1.0"
    DEBUG: bool = True
    
    # CORS settings - will be split by comma if provided as string
    ALLOWED_ORIGINS: str = "http://localhost:3000,http://localhost:3001"
    
    # API settings
    API_PREFIX: str = "/api"
    
    @property
    def allowed_origins_list(self) -> List[str]:
        """Parse ALLOWED_ORIGINS into a list."""
        return [origin.strip() for origin in self.ALLOWED_ORIGINS.split(",")]


settings = Settings()
