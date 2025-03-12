import random
from flask import jsonify

def register_api_routes(app):
    """Registers API routes with the Flask app."""
    @app.route("/api/random-region", methods=["GET"])
    def get_random_region():
        """Returns a random region from the regions file."""
        app.logger.debug("Fetching random region")
        regions_data = app.config['REGIONS']
        region = random.choice(regions_data)
        app.logger.info(f"Selected region: {region['name']}")
        return jsonify(region)    
    
    @app.route('/api/region/<name>', methods=["GET"])
    def get_region(name):
        """Returns data for a specific region by name."""
        regions_data = app.config['REGIONS']
        region = next((r for r in regions_data if r["name"] == name), None)
        app.logger.info(f"Returning region: {region['name']}")

        if region:
            return jsonify(region)
        return jsonify({"error": "Region not found"}), 404