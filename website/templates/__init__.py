from dotenv import load_dotenv
from flask import Flask
import os

def create_app():
    load_dotenv()
    app = Flask(__name__)
    app.config['SECRET_KEY'] = os.getenv("KEY")
