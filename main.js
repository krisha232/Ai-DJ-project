song1 = "";
song2 = "";
leftx=0;
lefty=0;
rightx=0;
righty=0;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    canvas.position(340, 250);

    video = createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftx=results[0].pose.leftWrist.x;
        lefty=results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftx + "LeftWristY = " + lefty);

        rightx=results[0].pose.rightWrist.x;
        righty=results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightx + "RightWristY = " + righty);
}}

function modelLoaded(){
    console.log('PoseNet is initialized');
}


function draw() {
    image(video, 0, 0, 600, 500);
    setInterval(function () { tint(Math.floor(Math.random()*255),0,255,0.5) }, 1000);
}
function preload() {
    song1 = loadSound("Halsey - Castle.mp3");
    song2 = loadSound("music.mp3");
}

