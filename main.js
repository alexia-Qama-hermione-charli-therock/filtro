var narizX = 0; 
var narizY = 0;
var bunnyX = 0;
var bunnyY = 0;
function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet carregado, gata!!!');
}

function draw() {
  image(video,0,0,300,300);
  image(nariz, narizX, narizY, 60, 60);
  image(bunny, bunnyX, bunnyY, 160, 160);
}

function takeSnapshot(){
     save('foto.png');

}

function gotPoses(results) {
   if(results.length > 0){
      console.log(results);
      narizX= results[0].pose.nose.x-25;
      narizY= results[0].pose.nose.y-5; 
      bunnyY= results[0].pose.nose.y-225; 
     bunnyX= results[0].pose.nose.x-95;

   }
}
function preload(){
    bunny= loadImage('https://i.postimg.cc/J7bxGWYj/599373.png');
    nariz= loadImage('https://i.postimg.cc/05JGhq1L/c63c62d7af21884d09611f23753b5657.png');
}

