const canvasSize = 600;

function rand(n = 1) {
    return Math.floor(Math.random() * n);
}

function setup() {
    createCanvas(canvasSize, canvasSize);
}

function tri(x, y, lr) {
    const h = 100;
    const w = 120;

    fill(rand(255), rand(255), rand(255));
    noStroke();
    beginShape();
    if (lr) {
        vertex(x, y);
        vertex(x + w, y + h / 2);
        vertex(x + w, y - h / 2);
    } else  {
        vertex(x + w, y);
        vertex(x, y + h / 2);
        vertex(x, y - h / 2);
    }
    endShape();
}

function drawTriangles() {
    const width = 120;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 12; j++) {
            tri(i * width, j * 50 + 50, (i + j) % 2 === 0);
        }
    }
}

function draw() {
    noLoop();
    drawTriangles();
}
