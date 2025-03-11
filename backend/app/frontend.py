from flask import send_from_directory

def register_frontend_routes(app):
    """Registers frontend-serving routes with the Flask app."""
    @app.route('/')
    @app.route('/azeroth')
    @app.route('/contact')
    @app.route('/region/<path:subpath>')
    def serve_index(subpath=None):
        return send_from_directory(app.static_folder, 'index.html')
    
    @app.route('/<path:path>')
    def static_files(path):
        return send_from_directory(app.static_folder, path)