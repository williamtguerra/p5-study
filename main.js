const canvasSize = 600;

function rand(n = 1) {
    return n > 1 ? Math.floor(Math.random() * n) : Math.random();
}

function setup() {
    createCanvas(canvasSize, canvasSize);
}

function tri(x, y, lr, bent) {
    const w = 120;
    const h = w/2;
    const p = 0.2;

    fill(rand(255), rand(255), rand(255));
    noStroke();
    beginShape();
    if (bent) {
        if (lr) {
            /*     < ||     */
            vertex(x + w * p, y - h * p);
            vertex(x + (w - w * p), y - (h - h * p));
            vertex(x + (w - w * p), y + (h - h * p));
            vertex(x + w * p, y + h * p);
        } else {
            /*     > ||     */
            vertex(x + w * p, y - (h - h * p));
            vertex(x + (w - w * p), y - h * p);
            vertex(x + (w - w * p), y + h * p);
            vertex(x + w * p, y + (h - h * p));
        }
    } else {
        if (lr) {
            /*     <     */
            vertex(x, y);
            vertex(x + w, y - w / 2);
            vertex(x + w, y + w / 2);
        } else {
            /*     >     */
            vertex(x + w, y);
            vertex(x, y - w / 2);
            vertex(x, y + w / 2);
        }
    }
    endShape();
}

function drawTriangles() {
    const width = 120;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 12; j++) {
            tri(i * width, j * (width/2) + (width/2), (i + j) % 2 === 0, true);
        }
    }
}

function draw() {
    noLoop();
    drawTriangles();
}
