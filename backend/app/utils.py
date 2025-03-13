import json
from pathlib import Path


def load_regions(app):
    """Loads region data from regions.json"""
    BASE_DIR = Path(__file__).resolve().parent.parent  # backend/
    REGIONS_JSON = BASE_DIR / "data" / "regions.json"
    app.logger.debug(f"Loading regions from {REGIONS_JSON}")

    with open(REGIONS_JSON, "r", encoding="utf-8") as f:
        return json.load(f)["regions"]


def load_reviews(app):
    """Loads review data from review.json"""
    BASE_DIR = Path(__file__).resolve().parent.parent  # backend/
    REVIEW_JSON = BASE_DIR / "data" / "reviews.json"
    app.logger.debug(f"Loading reviews from {REVIEW_JSON}")

    with open(REVIEW_JSON, "r", encoding="utf-8") as f:
        return json.load(f)["reviews"]
