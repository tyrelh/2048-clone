var GAME_BOARD_W = 4;
var GAME_BOARD_H = 4;
var TILE_W = 100;
var TILE_H = 140;


function Game() {

    this.board = new Board();

    // movement control
    this.slide = function(dir) {
        console.log(dir);
        this.board.slide(dir);
    }
    
    this.addTile = function() {
        //this.board.push(new Tile());
    }


    this.draw = function() {
        this.board.draw();
    }
    this.update = function() {
        this.board.update();
    }
}