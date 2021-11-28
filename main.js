song1 = "";
song2 = "";

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    canvas.position(340, 250);

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
    setInterval(function () { tint(Math.floor(Math.random()*255),0,255,0.5) }, 1000);
}
function preload() {
    song1 = loadSound("Halsey - Castle.mp3");
    song2 = loadSound("music.mp3");
}

