class Maze{
    constructor(x1, y1, num_rows, num_cols, cell_size_x, cell_size_y, seed=null){
        this.cells = [];
        this.x1 = x1;
        this.y1 = y1;
        this.num_rows = num_rows;
        this.num_cols = num_cols;
        this.cell_size_x = cell_size_x;
        this.cell_size_y = cell_size_y;

        this.create_cells();
        this.break_enterance_and_exit();

        if(seed === null){

        }
    }

    create_cells(){
        for(let i = 0; i < this.num_rows; i+=1){
            let col_cells = [];
            for(let j = 0; j < this.num_cols; j+=1){
                col_cells.push(Cell());
            }
            this.cells.push(col_cells);
        }
        for (let i = 0; i < this.num_rows; i += 1) {
            for (let j = 0; j < this.num_cols; j += 1) {
                this.draw_cell(i, j);
            }
        }
    }

    draw_cell(i, j){
        let x1 = this.x1 + i * this.cell_size_x;
        let y1 = this.y1 + j * this.cell_size_y;
        let x2 = x1 + this.cell_size_x;
        let y2 = y1 + this.cell_size_y;

        this.cells[i][j].draw(x1, y1, x2, y2);
    }

    break_enterance_and_exit(){
        this.cells[0][0].has_top_wall = false;
        this.draw_cell(0, 0);
        this.cells[this.num_cols - 1][this.num_rows - 1].has_bottom_wall = false;
        this.draw_cell(this.num_cols - 1, this.num_rows - 1);
    }


}
