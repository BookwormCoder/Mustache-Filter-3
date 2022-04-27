function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO); 
     video.size(400,400); 
     video.hide(); 
     
     poseNet=ml5.poseNet(video, modelLoaded);  
     poseNet.on('pose', gotPoses); 
}

function draw(){
image(video,0,0,400,400); 
image(Mustache,noseX-20,noseY-20,45,45);
}

function take_snapshot(){
    save('myFilterImage.png'); 
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');  
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function preload(){
    Mustache=loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmutRbk9Le6rBQPEVodb5dE1vdi_-_Ikz8-g&usqp=CAU');
}