
var ACC = 4;
var MAX_V = 30;
var MAX_X = TILE_W * (GAME_BOARD_W - 1);
var MAX_Y = TILE_H * (GAME_BOARD_H - 1);

function Tile() {

    this.value = 2;
    this.pos = createVector(1, 1);
    this.v = createVector(0, 0);
    this.a = createVector(0, 0);

    this.slide = function(dir) {
        if (dir == UP) this.a = createVector(0, -ACC);
        else if (dir == DOWN) this.a = createVector(0, ACC);
        else if (dir == LEFT) this.a = createVector(-ACC, 0);
        else if (dir == RIGHT) this.a = createVector(ACC, 0);
    }
    this.merge = function (other_tile) {
        this.value += other_tile.getValue();
    }
    this.update = function() {
        if (this.checkMaxV()) this.v = this.v.add(this.a);
        this.pos = this.pos.add(this.v);
        if (this.pos.x >= MAX_X) {
            this.v = createVector(0, 0);
            this.a = createVector(0, 0);
            this.pos.x = MAX_X - 1;
        }
        else if (this.pos.x < 0) {
            this.v = createVector(0, 0);
            this.a = createVector(0, 0);
            this.pos.x = 1;
        }
        else if (this.pos.y >= MAX_Y) {
            this.v = createVector(0, 0);
            this.a = createVector(0, 0);
            this.pos.y = MAX_Y - 1;
        }
        else if (this.pos.y < 0) {
            this.v = createVector(0, 0);
            this.a = createVector(0, 0);
            this.pos.y = 1;
        }
    }
    // check if v is below MAX_V
    this.checkMaxV = function() {
        if (abs(this.v.x) > MAX_V) return false;
        else if(abs(this.v.y) > MAX_V) return false;
        return true;
    }
    this.draw = function() {
        push();
            noStroke();
            fill(ORANGE_DARK);
            rect(this.pos.x, this.pos.y, TILE_W - 2, TILE_H - 2, 8);

            fill(ORANGE_LIGHT);
            rect(this.pos.x, this.pos.y, TILE_W - 2, TILE_H - 10, 8);

            fill(255);
            textSize(80);
            textAlign(CENTER);
            textFont(MAIN_FONT);
            text(this.value, this.pos.x+(TILE_W/2), this.pos.y+2*(TILE_H/3));
        pop();

    }
    // getters
    this.getValue = function() {return this.value;}
}