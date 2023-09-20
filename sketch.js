function setup() {
    createCanvas(800,800);
    background(248,231,205);
}

function draw() {
    stroke("black");
    line(0,800,366,250);
    line(800,0,433,550);
    fill("black");
    triangle(0,0,0,250,366,250);
    triangle(800,800,800,550,433,550);
    quad(250,426,366,250,550,376,433,550);
}
