class Cell {
    constructor(){
        this.has_left_wall = true;
        this.has_right_wall = true;
        this.has_bottom_wall = true;
        this.has_top_wall = true;
        this.visited = false;
        this.x1;
        this.y1;
        this.x2;
        this.y2;
    }

    draw(x1, x2, y1, y2){
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;

        if (this.has_left_wall) {
            stroke(0);
            line(x1, y1, x1, y2);
        } else if (!this.has_left_wall) {
            stroke(255);
            line(x1, y1, x1, y2);
        }

        if (this.has_right_wall) {
            stroke(0);
            line(x2, y1, x2, y2);
        } else if(!this.has_right_wall) {
            stroke(255);
            line(x2, y1, x2, y2);
        }

        if (this.has_bottom_wall) {
            stroke(0);
            line(x2, y1, x2, y2);
        } else if (!this.has_bottom_wall) {
            stroke(255);
            line(x2, y1, x2, y2);
        }

        if (this.has_top_wall) {
            stroke(0);
            line(x2, y1, x2, y2);
        } else if (!this.has_top_wall) {
            stroke(255);
            line(x2, y1, x2, y2);
        }
    }

    draw_move(to_cell, undo=false){
        half_length = Math.floor(Math.abs(this.get_x2() - this.get_x1()) / 2)
        x_center = half_length + this.get_x1()
        y_center = half_length + this.get_y1()

        half_length2 = Math.floor(Math.abs(to_cell.get_x2() - to_cell.get_x1()) / 2)
        x_center2 = half_length2 + to_cell.get_x1()
        y_center2 = half_length2 + to_cell.get_y1()

        stroke(255, 0, 0);
        if (undo) {
            stroke(128);
        }

        line(x_center, y_center, x_center2, y_center2);
    }
}
