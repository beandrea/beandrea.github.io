let maze;

function setup() {
    createCanvas(windowWidth, windowHeight);
    const num_rows = 12;
    const num_cols = 16;
    const margin = 50;
    const cell_size_x = (windowWidth - 2 * margin) / num_cols;
    const cell_size_y = (windowHeight - 2 * margin) / num_rows;
    maze = Maze(margin, margin, num_rows, num_cols, cell_size_x, cell_size_y);
}

function draw(){
    background(255);
    maze.maze_setup();
    maze.solve();
}
