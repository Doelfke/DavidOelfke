# DavidOelfke API

FastAPI backend for the DavidOelfke portfolio website.

## Requirements

- Python 3.11+
- pip or uv for package management

## Setup

1. Create a virtual environment:
```bash
cd api
python -m venv venv
source venv/bin/activate  # On macOS/Linux
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Copy environment variables:
```bash
cp .env.example .env
```

4. Run the development server:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at:
- Main API: http://localhost:8000
- Interactive docs: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc


## Development

### Run with hot reload:
```bash
uvicorn main:app --reload
```

### Type checking:
```bash
mypy api/
```

### Lint:
```bash
flake8 .
```

