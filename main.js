function preload(){
}


function setup(){
    video = createCapture(VIDEO);
    video.size(560,560);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw(){
    background("#ADD8E6");
}

function modelLoaded(){
    console.log("Posenet Is Initialized!")
}

function gotPoses(results){
    if(results.lenght >0){
        console.log(results);
    }
}