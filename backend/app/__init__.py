from flask import Flask
from pathlib import Path

def create_app():
    """Factory function to create and configure the Flask app."""
    BASE_DIR = Path(__file__).resolve().parent.parent # backend/
    STATIC_DIR = BASE_DIR.parent / "frontend" / "dist" # Project root/frontend/dist

    app = Flask(__name__, static_folder=STATIC_DIR, static_url_path='')

    # Load regions data and attach to app config
    from .utils import load_regions
    app.config['REGIONS'] = load_regions()

    # Register routes
    from .api import register_api_routes
    from .frontend import register_frontend_routes
    register_api_routes(app)
    register_frontend_routes(app)

    return app