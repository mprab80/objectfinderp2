var status1="";

function preload(){

}

function setup(){
    canvas=createCanvas(380, 380);
    canvas.position(450, 245);

    video=createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function start(){
    objectdetect=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("apple").innerHTML="Detecting Objects";
    var cherry1=document.getElementById("cherry");
    
}

function modelLoaded(){
    console.log("Model is Loaded");
    status1=true;
}

function draw(){
    image(video, 0, 0, 380, 380);
}