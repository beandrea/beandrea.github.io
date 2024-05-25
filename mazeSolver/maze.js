class Maze{
    constructor(x1, y1, num_rows, num_cols, cell_size_x, cell_size_y, seed=null){
        var __cells = [];
        var __x1;
        var __y1;
        var __num_rows;
        var __num_cols;
        var __cell_size_x;
        var __cell_size_y;

        this.set_cells = function(){
            for(let i = 0; i < num_rows; i+=1){
                let col_cells = [];
                for(let j = 0; j < num_cols; j+=1){
                    col_cells.push(Cell())
                }
                this.__cells.push(col_cells);
            }
        };

        this.get_cells =  function(){ return __cells }
        this.set_x1 = function(){ __x1 = x1 };
        this.get_x1 = function(){ return __x1 };
        this.set_y1 = function () { __y1 = y1 };
        this.get_y1 = function () { return __y1 };

    }
}
