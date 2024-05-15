const canvasSize = 600;

function rand(n = 1) {
    return n > 1 ? Math.floor(Math.random() * n) : Math.random();
}

function setup() {
    createCanvas(canvasSize, canvasSize);
}

function tri(x, y, lr, bend) {
    const w = 120;
    const h = w / 2;
    const lw = 60;
    const p = 0.2;

    noStroke();

    // bg
    const grey = rand(10) + 60;
    fill(grey, grey, grey);
    beginShape();
    if (true) {
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

    // bend
    fill(rand(255), rand(255), rand(255));
    beginShape();
    if (bend === 0) {
        if (lr) {
            /*     < \     */
            vertex(x + (w / 2 - lw / 2), y - lw / 4);
            vertex(x + (w / 2 + lw / 2), y - (3 * lw) / 4);
            vertex(x + w, y - lw / 2);
            vertex(x + w, y + lw / 2);
        } else {
            /*     > \     */
            vertex(x, y - lw / 2);
            vertex(x + (w / 2 + lw / 2), y + lw / 4);
            vertex(x + (w / 2 - lw / 2), y + (3 * lw) / 4);
            vertex(x, y + lw / 2);
        }
    } else if (bend === 1) {
        if (lr) {
            /*     < /     */
            vertex(x + (w - lw) / 2, y + lw / 4);
            vertex(x + w, y - lw / 2);
            vertex(x + w, y + lw / 2);
            vertex(x + (w - lw) / 2 + lw, y + (3 * lw) / 4);
        } else {
            /*     > /     */
            vertex(x + (w - lw) / 2, y - (3 * lw) / 4);
            vertex(x + (w - lw) / 2 + lw, y - lw / 4);
            vertex(x, y + lw / 2);
            vertex(x, y - lw / 2);
        }
    } else {
        if (lr) {
            /*     < |     */
            vertex(x + (w - lw) / 2, y - lw / 4);
            vertex(x + (w - lw) / 2 + lw, y - (3 * lw) / 4);
            vertex(x + (w - lw) / 2 + lw, y + (3 * lw) / 4);
            vertex(x + (w - lw) / 2, y + lw / 4);
        } else {
            /*     > |     */
            vertex(x + (w - lw) / 2, y - (3 * lw) / 4);
            vertex(x + (w - lw) / 2 + lw, y - lw / 4);
            vertex(x + (w - lw) / 2 + lw, y + lw / 4);
            vertex(x + (w - lw) / 2, y + (3 * lw) / 4);
        }
    }
    endShape();
}

function drawTriangles() {
    const width = 120;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 12; j++) {
            tri(
                i * width,
                j * (width / 2) + width / 2,
                (i + j) % 2 === 0,
                rand(12)
            );
        }
    }
}

function draw() {
    noLoop();
    drawTriangles();
}
