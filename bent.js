function rand(n = 1) {
    return n > 1 ? Math.floor(Math.random() * n) : Math.random();
}

function setup() {
    const canvasSize = 600;
    createCanvas(canvasSize, canvasSize * 2);
}

function tri(x, y, lr, bend) {
    const w = 120; // triangle width
    const t = 55; // line thickness

    noStroke();

    // bg triangles
    const grey = rand(10) + 200;
    fill(grey);
    beginShape();
    if (true) {
        if (lr) {
            /*     <     */
            vertex(x + w, y);
            vertex(x, y + w / 2);
            vertex(x + w, y + w);
        } else {
            /*     >     */
            vertex(x, y);
            vertex(x + w, y + w / 2);
            vertex(x, y + w);
        }
    }
    endShape();

    // bend
    beginShape();
    if (bend === 0) {
        fill(150);
        if (lr) {
            /*     < \     */
            vertex(x + (w - t) / 2, y + (w + t) / 4);
            vertex(x + (w + t) / 2, y + (w - t) / 4);
            vertex(x + w, y + (w - t) / 2);
            vertex(x + w, y + (w + t) / 2);
        } else {
            /*     \ >     */
            vertex(x, y + (w - t) / 2);
            vertex(x + (w + t) / 2, y + w - (w + t) / 4);
            vertex(x + (w - t) / 2, y + w - (w - t) / 4);
            vertex(x, y + (w + t) / 2);
        }
    } else if (bend === 1) {
        fill(150);
        if (lr) {
            /*     < /     */
            vertex(x + w, y + (w - t) / 2);
            vertex(x + w, y + (w + t) / 2);
            vertex(x + (w + t) / 2, y + w - (w - t) / 4);
            vertex(x + (w - t) / 2, y + w - (w + t) / 4);
        } else {
            /*     / >     */
            vertex(x, y + (w - t) / 2);
            vertex(x + (w - t) / 2, y + (w - t) / 4);
            vertex(x + (w + t) / 2, y + (w + t) / 4);
            vertex(x, y + (w + t) / 2);
        }
    } else {
        fill(90);
        if (lr) {
            /*     < |     */
            vertex(x + (w - t) / 2, y + (w + t) / 4);
            vertex(x + (w + t) / 2, y + (w - t) / 4);
            vertex(x + (w + t) / 2, y + w - (w - t) / 4);
            vertex(x + (w - t) / 2, y + w - (w + t) / 4);
        } else {
            /*     | >     */
            vertex(x + (w - t) / 2, y + (w - t) / 4);
            vertex(x + (w + t) / 2, y + (w + t) / 4);
            vertex(x + (w + t) / 2, y + w - (w + t) / 4);
            vertex(x + (w - t) / 2, y + w - (w - t) / 4);
        }
    }

    // color override
    // fill(rand(255), rand(255), rand(255));

    endShape();
}

function drawTriangles() {
    const width = 120;
    for (let i = 0; i < 6; i++) {
        // columns
        for (let j = 0; j < 24; j++) {
            // rows
            tri(i * width, (j * width) / 2, (i + j) % 2 === 0, rand(6));
        }
    }
}

function draw() {
    noLoop();
    drawTriangles();
}
