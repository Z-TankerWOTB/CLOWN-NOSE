var Nose_x = 0;
var Nose_y = 1;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/2yx2891j/clown-nose-removebg-preview.png')
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    consele.log('Pose Net is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("Nose x = " + results[0].pose.nose.x);
        console.log("Nose y = " + results[0].pose.nose.y);
        Nose_x = results[0].pose.nose.x;
        Nose_y = results[0].pose.nose.y;
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_nose, Nose_x - 15, Nose_y - 15, 30, 30)
}

function take_snapshot(){
    save('IAmClown.png');
}

//:�BV��r�/�؀