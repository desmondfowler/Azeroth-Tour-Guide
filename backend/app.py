from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='../frontend/dist', static_url_path='')

@app.route('/')
def serve_index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/azeroth')
def serve_azeroth():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/contact')
def serve_contact():
    return send_from_directory(app.static_folder, 'index.html')

# Serve static files (JS, CSS, images, etc)

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory(app.static_folder, path)

if __name__ == '__main__':
    app.run()