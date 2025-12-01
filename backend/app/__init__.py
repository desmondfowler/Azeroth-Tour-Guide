from flask import Flask
from pathlib import Path


def create_app():
    """Factory function to create and configure the Flask app."""
    BASE_DIR = Path(__file__).resolve().parent.parent  # backend/
    STATIC_DIR = BASE_DIR.parent / "frontend" / "dist"  # Project root/frontend/dist

    app = Flask(__name__, static_folder=None)

    # Load regions data and attach to app config
    from .utils import load_regions

    app.config["REGIONS"] = load_regions(app)
    # Load reviews data and attach to app config
    from .utils import load_reviews

    app.config["REVIEWS"] = load_reviews(app)

    # Register routes
    from .api import register_api_routes

    register_api_routes(app)
    app.logger.debug(f"Registered routes: {list(app.url_map.iter_rules())}")

    return app
