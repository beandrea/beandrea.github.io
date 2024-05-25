class Cell {
    constructor(){
        var __has_left_wall = true;
        var __has_right_wall = true;
        var __has_bottom_wall = true;
        var __has_top_wall = true;
        var __visited = false;

        this.set_left_wall = function(exists){ __has_left_wall = exists};
        this.get_left_wall = function(){ return __has_left_wall };
        this.set_right_wall = function (exists) { __has_right_wall = exists };
        this.get_right_wall = function () { return __has_right_wall };
        this.set_bottom_wall = function (exists) { __has_bottom_wall = exists };
        this.get_bottom_wall = function () { return __has_bottom_wall };
        this.set_top_wall = function (exists) { __has_top_wall = exists };
        this.get_top_wall = function () { return __has_top_wall };
        this.set_visited = function(is_visited){ __visited = is_visited };
        this.get_visited = function(){ return __visited };
    }
}
