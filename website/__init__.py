from flask import Flask
from dotenv import load_dotenv
import os

def configure():
    load_dotenv()

def create_app():
    configure()
    app = Flask(__name__)
    app.config['SECRET_KEY'] = os.getenv("KEY")
    return app
