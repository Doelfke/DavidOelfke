"""
Vercel serverless function handler.
"""
from main import app

# Export the app for Vercel
handler = app
