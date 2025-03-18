import logging
from app import create_app

logging.getLogger("werkzeug").setLevel(logging.WARNING)

app = create_app()

if __name__ == "__main__":
    app.logger.debug("Starting Azeroth Tour Guide server")
    app.run(host="0.0.0.0")
