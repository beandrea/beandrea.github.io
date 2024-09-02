from flask import Blueprint as blue

views = blue('views', __name__)

@views.route('/')
def home() -> str:
    return "<h1>Test</h1>"
