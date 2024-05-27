class Maze{
    constructor(x1, y1, num_rows, num_cols, cell_size_x, cell_size_y, seed=null){
        this.cells = [];
        this.x1 = x1;
        this.y1 = y1;
        this.num_rows = num_rows;
        this.num_cols = num_cols;
        this.cell_size_x = cell_size_x;
        this.cell_size_y = cell_size_y;
        this.seed = seed;
        this.pseudo = null;
    }

    maze_setup(){
        this.create_cells();

        this.break_enterance_and_exit();

        if (this.seed === null) {
            this.pseudo = Pseudo('apples');
        } else {
            this.pseudo = Pseudo(this.seed);
        }

        setTimeout(this.break_walls_r(0, 0), 5000);
        this.reset_cells_visited();
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
        console.log(this.cells);
        this.cells[0][0].has_top_wall = false;
        this.draw_cell(0, 0);
        this.cells[this.num_cols - 1][this.num_rows - 1].has_bottom_wall = false;
        this.draw_cell(this.num_cols - 1, this.num_rows - 1);
    }

    break_walls_r(i, j){
        this.cells[i][j].visited = true;
        while (true) {
            let next_index_list = [];

            if(i > 0 && !self.cells[i - 1][j].visited){
                next_index_list.push((i - 1, j));
            }
            if(i < this.num_cols - 1 && !this.cells[i + 1][j].visited){
                next_index_list.push((i + 1, j));
            }
            if(j > 0 && !this.cells[i][j - 1].visited){
                next_index_list.push((i, j - 1));
            }
            if(j < this.num_rows - 1 && !this.cells[i][j + 1].visited){
                next_index_list.push((i, j + 1));
            }

            if(next_index_list.length == 0){
                this.draw_cell(i, j);
                return
            }

            let direction_index = Math.floor(this.pseudo.rand() * this.cells.length);
            let next_index = next_index_list[direction_index];

            if(next_index[0] == i + 1){
                this.cells[i][j].has_right_wall =  false;
                this.cells[i + 1][j].has_left_wall = false;
            }
            if (next_index[0] == i - 1) {
                this.cells[i][j].has_left_wall = false;
                this.cells[i - 1][j].has_right_wall = false;
            }
            if (next_index[1] == j + 1) {
                this.cells[i][j].has_bottom_wall = false;
                this.cells[i][j + 1].has_top_wall = false;
            }
            if (next_index[1] == j - 1) {
                this.cells[i][j].has_top_wall = false;
                this.cells[i][j - 1].has_bottom_wall = false;
            }

            this.break_walls_r(next_index[0], next_index[1]);
        }
    }

    reset_cells_visited(){
        this.cells.forEach(cell_list => {
            cell_list.forEach(cell => {
                cell.visited = false;
            });
        });
    }

    solve_r(i, j){
        this.cells[i][j].visited = true;

        if(i == this.num_cols -  1 && j == this.num_rows - 1){
            return true;
        }

        if (i > 0 && !this.cells[i][j].has_left_wall && this.cells[i - 1][j].visited){
            this.cells[i][j].draw_move(this.cells[i - 1][j]);

            if(this.solve_r(i - 1, j)){
                return true;
            } else {
                this.cells[i][j].draw_move(this.cells[i - 1][j], true);
            }
        }

        if (i < this.num_cols - 1 && !this.cells[i][j].has_right_wall && !this.cells[i + 1][j].visited){
            this.cells[i][j].draw_move(this.cells[i + 1][j]);

            if(this.solve_r(i + 1, j)){
                return true;
            } else {
                this.cells[i][j].draw_move(this.cells[i + 1][j], true);
            }
        }

        if (j > 0 && !this.cells[i][j].has_top_wall && !this.cells[i][j - 1].visited){
            this.cells[i][j].draw_move(this.cells[i][j - 1]);

            if(this.solve_r(i, j - 1)){
                return true;
            } else {
                this.cells[i][j].draw_move(this.cells[i][j - 1], true);
            }
        }

        if (j < this.num_rows - 1 && !this.cells[i][j].has_bottom_wall && !this.cells[i][j + 1].visited){
            this.cells[i][j].draw_move(this.cells[i][j + 1]);

            if(this.solve_r(i, j + 1)){
                return true;
            } else {
                this.cells[i][j].draw_move(this.cells[i][j + 1], true);
            }
        }

        return false;
    }

    solve(){
        setTimeout(function(){return this.solve_r(0, 0)}, 5000);
    }
}
