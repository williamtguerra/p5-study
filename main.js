const canvasSize = 600;

function rand(n = 1) {
    return Math.floor(Math.random() * n);
}

function setup() {
    createCanvas(canvasSize, canvasSize);
}

function drawSquare(x, y, s) {
    fill(rand(255), rand(255), rand(255));
    rect(x, y, s, s);
}

function draw36() {
    const width = canvasSize / 6;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            drawSquare(i * width, j * width, width);
        }
    }
}

function draw() {
    noLoop();
    draw36();
}
