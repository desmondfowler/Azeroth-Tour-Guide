import json
import random
from flask import Flask, send_from_directory, jsonify
regions_json = "./data/updated_regions.json"

app = Flask(__name__, static_folder='../frontend/dist', static_url_path='')


with open(regions_json, "r", encoding="utf-8") as f:
    regions_data = json.load(f)["regions"]

@app.route("/api/random-region", methods=["GET"])
def get_random_region():
    """Returns a random region from the list."""
    import json, random
    return jsonify(random.choice(regions_data))

@app.route('/api/region/<name>', methods=["GET"])
def get_region(name):
    """Returns data for a specific region by name."""
    region = next((r for r in regions_data if r["name"] == name), None)
    if region:
        return jsonify(region)
    return jsonify({"error": "Region not found"}), 404

@app.route('/')
@app.route('/azeroth')
@app.route('/contact')
@app.route('/region/<path:subpath>')  # Handle dynamic region pages
def serve_index(subpath=None):
    return send_from_directory(app.static_folder, 'index.html')

# Serve static files (JS, CSS, images, etc)

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory(app.static_folder, path)

if __name__ == '__main__':
    app.run(debug=True)