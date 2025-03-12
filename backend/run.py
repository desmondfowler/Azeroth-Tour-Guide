import logging
from app import create_app

# Configure logging before app creation
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s [%(levelname)s] %(name)s: %(message)s',
    handlers=[
        logging.StreamHandler(),  # Console output
        logging.FileHandler("flask_app.log")  # File output
    ]
)

app = create_app()

if __name__ == '__main__':
    app.logger.debug("Starting Azeroth Tour Guide server")
    app.run(host='0.0.0.0', debug=True)