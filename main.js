noseX = 0;
noseY = 0;

function preload(){
    clown_nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");

}

function setup(){
    canvas = createCanvas(500,500);
    canvas.position(500,200)
    video = createCapture(VIDEO);
    video.size(300,300)
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
image(video,100,50,300,250);
image(clown_nose , noseX , noseY , 20 , 20);
}

function take_snapshot(){
 save('clown_nose_filter_image.png');
}

function modelLoaded(){
    console.log("posenet initalized");
}

function gotPoses(results){
    if(results.length > 0){
        noseX = results[0].pose.nose.x + 90;
        noseY = results[0].pose.nose.y + 15;
        console.log(results);
        console.log("nose x coords = " + results[0].pose.nose.x);
        console.log("nose y coords = " + results[0].pose.nose.y);

    }
}