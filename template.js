function rand(n = 1) {
    return n > 1 ? Math.floor(Math.random() * n) : Math.random();
}

function setup() {
    const canvasSize = 600;
    createCanvas(canvasSize, canvasSize);
}

function drawGrid() {
    const col = 6;
    const row = 6;
    const x = 100;

    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
            fill(200 + rand(50));
            rect(i * x, j * x, x);
        }
    }
}

function draw() {
    noLoop();
    drawGrid();
}
