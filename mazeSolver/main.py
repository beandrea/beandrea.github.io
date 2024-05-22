from flask import Flask, render_template_string
from graphics import Window
from cell import Cell

app = Flask(__name__)

@app.route('/')
def index():
    return render_template_string('index.html')

@app.route('/maze')
def maze():
    win = Window(800, 600)

    c = Cell(win)
    c.has_left_wall = False
    c.draw(50, 50, 100, 100)

    c = Cell(win)
    c.has_right_wall = False
    c.draw(125, 125, 200, 200)

    c = Cell(win)
    c.has_bottom_wall = False
    c.draw(225, 225, 250, 250)

    c = Cell(win)
    c.has_top_wall = False
    c.draw(300, 300, 500, 500)

    win.wait_for_close()

if __name__ == '__main__':
    app.run(debug=True)

