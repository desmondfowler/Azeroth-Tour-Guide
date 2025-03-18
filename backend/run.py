from app import create_app

app = create_app()

if __name__ == "__main__":
    app.logger.debug("Starting Azeroth Tour Guide server")
    app.run(host="0.0.0.0", debug=True)
