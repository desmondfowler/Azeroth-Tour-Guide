import json
from pathlib import Path

def load_regions():
    """Loads region data from regions.json"""
    BASE_DIR = Path(__file__).resolve().parent.parent # backend/
    REGIONS_JSON = BASE_DIR / "data" / "regions.json" 
    with open(REGIONS_JSON, "r", encoding="utf-8") as f:
        return json.load(f)["regions"]