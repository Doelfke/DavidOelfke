"""
Vercel serverless function handler.
"""
from mangum import Mangum
from main import app

# Mangum adapter for AWS Lambda/Vercel compatibility
handler = Mangum(app, lifespan="off")
