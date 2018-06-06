var game;

function setup() {
    // inital canvas setup
    createCanvas(window.innerWidth, window.innerHeight);
    // desired frame rate
    frameRate(60);
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
    if (keyCode === UP_ARROW) game.slideUp();
    else if (keyCode === RIGHT_ARROW) game.slideRight();
    else if (keyCode === DOWN_ARROW) game.slideDown();
    else if (keyCode === LEFT_ARROW) game.slideLeft();
}