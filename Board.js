
function Board() {

    this.tiles = [];
    this.tiles.push(new Tile());

    this.slide = function(dir) {
        let i;
        for (i = 0; i < this.tiles.length; i++) {
            this.tiles[i].slide(dir);
        }
    }
    this.update = function() {
        let i;
        for (i = 0; i < this.tiles.length; i++) {
            this.tiles[i].update();
        }
    }
    this.draw = function() {
        let i;
        for (i = 0; i < GAME_BOARD_H; i++) {
            for (let j = 0; j < GAME_BOARD_W; j ++) {
                push();
                    noFill();
                    strokeWeight(2);
                    stroke(10);
                    rect(i * TILE_W, j * TILE_H, TILE_W, TILE_H);
                pop();
            }
        }
        for (i = 0; i < this.tiles.length; i++) {
            this.tiles[i].draw();
        }
    }
}