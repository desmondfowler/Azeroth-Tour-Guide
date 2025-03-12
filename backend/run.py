import logging
import logging.config
import os
from app import create_app

# Load logging configuration from file
logging.config.fileConfig(
    os.path.join(os.path.dirname(__file__), 'logging.conf'),
    disable_existing_loggers=False
)

app = create_app()

if __name__ == '__main__':
    app.logger.debug("Starting Azeroth Tour Guide server")
    app.run(host='0.0.0.0', debug=True)