import os
from pathlib import Path
from flask import send_from_directory

def register_frontend_routes(app):
    BASE_DIR = Path(__file__).resolve().parent.parent
    FRONTEND_DIR = BASE_DIR / ".." / "frontend" / "dist"
    app.logger.debug(f"FRONTEND_DIR set to: {FRONTEND_DIR}")

    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def serve_frontend(path):
        app.logger.debug(f"Serving frontend for path: '{path}'")
        full_path = os.path.join(FRONTEND_DIR, path)
        app.logger.debug(f"Checking if path exists: {full_path}")
        if path != "" and os.path.exists(full_path):
            app.logger.debug(f"Serving static file: {path}")
            return send_from_directory(FRONTEND_DIR, path)
        app.logger.debug("Serving index.html")
        index_path = os.path.join(FRONTEND_DIR, 'index.html')
        app.logger.debug(f"Index.html path: {index_path}")
        return send_from_directory(FRONTEND_DIR, 'index.html')