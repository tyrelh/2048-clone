var GAME_BOARD_W = 4;
var GAME_BOARD_H = 4;
var TILE_W = 100;
var TILE_H = 140;


function Game() {

    this.board = new Board();

    this.slideUp = function() {
        console.log("up");
    }
    this.slideDown = function() {
        console.log("down");

    }
    this.slideLeft = function() {
        console.log("left");

    }
    this.slideRight = function() {
        console.log("right");

    }
    this.addTile = function() {
        //this.board.push(new Tile());
    }

    this.draw = function() {
        this.board.draw();
    }
    this.update = function() {
    }
}