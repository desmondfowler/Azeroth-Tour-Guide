import random
from flask import jsonify


def register_api_routes(app):
    """Registers API routes with the Flask app."""

    import time
    @app.route("/api/heavy")
    def heavy():
        start = time.time()
        while time.time() - start < 1:  # Burn ~1s CPU
            pass
        return "burned"

    @app.route("/api/random-region", methods=["GET"])
    def get_random_region():
        """Returns a random region from the regions file."""
        app.logger.debug("Fetching random region")
        regions_data = app.config["REGIONS"]
        region = random.choice(regions_data)
        app.logger.info(f"Selected region: {region['name']}")
        return jsonify(region)

    @app.route("/api/region/<name>", methods=["GET"])
    def get_region(name):
        """Returns data for a specific region by name."""
        regions_data = app.config["REGIONS"]
        region = next((r for r in regions_data if r["name"] == name), None)
        app.logger.info(f"Returning region: {region['name']}")

        if region:
            return jsonify(region)
        return jsonify({"error": "Region not found"}), 404

    @app.route("/api/regions", methods=["GET"])
    def get_all_regions():
        """Returns all regions for the purposes of the directory."""
        app.logger.debug("Fetching all regions")
        regions_data = app.config["REGIONS"]
        app.logger.info(f"Returning {len(regions_data)} regions")
        return jsonify({"regions": regions_data})

    @app.route("/api/random-reviews", methods=["GET"])
    def get_random_reviews():
        """Returns random reviews from the reviews file."""
        num_reviews = 4
        app.logger.debug("Fetching random reviews")
        reviews_data = app.config["REVIEWS"]
        random_reviews = random.sample(reviews_data, k=num_reviews)
        app.logger.info(f"Selected {num_reviews} random reviews")
        return jsonify({"reviews": random_reviews})

    @app.route("/api/reviews", methods=["GET"])
    def get_all_reviews():
        """Returns all reviews."""
        app.logger.debug("Fetching all reviews")
        reviews_data = app.config["REVIEWS"]
        app.logger.info(f"Returning {len(reviews_data)} reviews")
        return jsonify({"reviews": reviews_data})

    @app.route("/api/review/<author>", methods=["GET"])
    def get_review_by_author(author):
        """Returns reviews by a specific author."""
        reviews_data = app.config["REVIEWS"]
        authored_reviews = []
        for r in reviews_data:
            if r["author"] == author:
                authored_reviews.append(r)
        if len(authored_reviews) == 0:
            return jsonify({"error": "Reviews not found"}), 404
        else:
            return jsonify({"reviews": authored_reviews})
