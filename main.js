song1 = "";
song2 = "";

status1 = "";
statis2 = "";

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is Initialised");
}
function draw(){
    image(video,0,0,600,500);

    fill("#FF0000");
    stroke("#FF0000");

    status1 = song1.isPlaying();
    status2 = song2.isPlaying();

    
    if(scoreLeftWrist > 0.2)
     {
    circle(leftWristX,leftWristY,20);
    song2.stop();
        if(status1 = "false") {
            song1.play();
            document.getElementById("song_name").innerHTML="SONG 1";
        }
   }
   if(scoreRightWrist > 0.2)
     {
    circle(rightWristX,rightWristY,20);
    song1.stop();
        if(status2 = "false") {
            song2.play();
            document.getElementById("song_name").innerHTML="SONG 2";
        }
   }
    
}
function gotPoses(){
    if(results.length > 0){
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        ScoreLeftWrist = results.pose.keypoints[9].score;
        console.log("ScoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);

        console.log(results);
        LeftWristX = results[0].pose.leftWrist.x;
        LeftWristY = results[0].pose.leftWrist.y;
        console.log("LeftWrist X = "+LeftWristX+" LeftWrist Y = "+LeftWristY);
    
        RightWristX = results[0].pose.rightWrist.x;
        RightWristY = results[0].pose.rightWrist.y;
        console.log("RightWrist X = "+RightWristX+" RightWrist Y = "+RightWristY);
    }
}