
function Tile() {

    this.value = 2;
    this.pos = {y: 0, x: 0};

    this.merge = function (other_tile) {
        this.value += other_tile.getValue();
    }

    this.update = function() {

    }

    this.draw = function() {
        push();
            noStroke();
            fill(ORANGE_DARK);
            rect(this.pos.x + 1, this.pos.y + 1, TILE_W - 2, TILE_H - 2, 8);

            fill(ORANGE_LIGHT);
            rect(this.pos.x + 1, this.pos.y + 1, TILE_W - 2, TILE_H - 10, 8);

            fill(255);
            textSize(80);
            textAlign(CENTER);
            textFont(MAIN_FONT);
            text(this.value, this.pos.x+1+(TILE_W/2), this.pos.y+2*(TILE_H/3));
        pop();

    }
    // getters
    this.getValue = function() {return this.value;}
}