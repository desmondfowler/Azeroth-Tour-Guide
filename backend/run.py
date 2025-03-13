import atexit
import logging
import logging.config
import logging.handlers
from multiprocessing import Queue
import os
from app import create_app

# Set up a queue for logging since gunicorn's multiple worker threads
# may conflict when writing logs and rotating them.
log_queue = Queue()

# Load logging configuration from file
logging.config.fileConfig(
    os.path.join(os.path.dirname(__file__), "logging.conf"),
    defaults={
        "log_queue": log_queue,
        "LOG_FILE": os.getenv("LOG_FILE", "flask_app.log"),
        "MAX_BYTES": int(os.getenv("LOG_MAX_BYTES", "10485760")),
        "BACKUP_COUNT": int(os.getenv("LOG_BACKUP_COUNT", "7")),
    },
    disable_existing_loggers=False,
)

# Extract the queue handler and start the listener with its handlers
queue_handler = next(
    h
    for h in logging.getLogger().handlers
    if isinstance(h, logging.handlers.QueueHandler)
)
listener_handlers = queue_handler.listener.handlers  # Handlers attached by fileConfig
listener = logging.handlers.QueueListener(log_queue, *listener_handlers)
listener.start()

app = create_app()

atexit.register(listener.stop)

if __name__ == "__main__":
    app.logger.debug("Starting Azeroth Tour Guide server")
    app.run(host="0.0.0.0", debug=True)
