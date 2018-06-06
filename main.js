var game;

function setup() {
    // inital canvas setup
    createCanvas(window.innerWidth, window.innerHeight);
    // desired frame rate
    frameRate(60);
    textFont(MAIN_FONT);
    background(20,20,22);
    
    game = new Game();
}


function draw() {
    staticRender();
    game.update();
    game.draw();
}

function staticRender() {
    background(20,20,22);
}

function keyPressed() {
    console.log(keyCode);
    if (keyCode === UP_ARROW) game.slide(UP);
    else if (keyCode === RIGHT_ARROW) game.slide(RIGHT);
    else if (keyCode === DOWN_ARROW) game.slide(DOWN);
    else if (keyCode === LEFT_ARROW) game.slide(LEFT);
}