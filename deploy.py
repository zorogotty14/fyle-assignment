from flask import Flask, render_template, request
import os

STATIC_DIR = './static'
app = Flask(__name__, static_url_path='/static')


@app.route('/', methods=['GET'])
def index():
    if(request.method == 'GET'):
        return render_template('index.html'), 200
    else:
        return 400


if __name__ == '__main__':
    app.run('127.0.0.1', port=5000, debug=True)
