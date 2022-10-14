//game over position and color of score count
//music
//ability to play again
//pipe colors
//interface (nintendo console)
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gamespeed = 2;
let gamespeed2 = 2.3;
let gamespeed3 = 2.6;
let gamespeed4 = 3;
let gamespeed5 = 0;

const gradient = ctx.createLinearGradient (0, 0, 0, 70);
gradient.addColorStop ('0.4', '#fff');
gradient.addColorStop ('0.5', '#000');
gradient.addColorStop ('0.55', '#4040ff');
gradient.addColorStop ('0.6', '#000');
gradient.addColorStop ('0.9', '#fff');




//-------------Parallax Background-------------//
//Functional
const background = new Image();
background.src = 'BG1.png';
const BG1 = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height
}


//background layer 2
const background2 = new Image();
background2.src = 'BG2.png';
const BG2 = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height
}
//background layer 3
const background3 = new Image();
background3.src = 'BG3.png';
const BG3 = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height
}

//background layer 4
const background4 = new Image();
background4.src = 'BG4.png';
const BG4 = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height
}
// //-GROUND - background layer 5
// const background5 = new Image();
// background5.src = 'BG5.png';
// const BG5 = {
//     x1: 0,
//     x2: canvas.width,
//     y: 0,
//     width: canvas.width,
//     height: canvas.height
// }


function handleBackground(){
//background layer 1 
if (BG1.x1 <= -BG1.width + gamespeed) BG1.x1 = BG1.width;
else BG1.x1 -= gamespeed;
if (BG1.x2 <= -BG1.width + gamespeed) BG1.x2 = BG1.width;
else (BG1.x2 -= gamespeed);
ctx.drawImage(background, BG1.x1, BG1.y, BG1.width, BG1.height);
ctx.drawImage(background, BG1.x2, BG1.y, BG1.width, BG1.height);

//background layer 2
if (BG2.x1 <= -BG2.width + gamespeed2) BG2.x1 = BG2.width;
else BG2.x1 -= gamespeed2;
if (BG2.x2 <= -BG2.width + gamespeed2) BG2.x2 = BG2.width;
else (BG2.x2 -= gamespeed2);
ctx.drawImage(background2, BG2.x1, BG2.y, BG2.width, BG2.height);
ctx.drawImage(background2, BG2.x2, BG2.y, BG2.width, BG2.height);

//background layer 3
if (BG3.x1 <= -BG3.width + gamespeed3) BG3.x1 = BG3.width;
else BG3.x1 -= gamespeed3;
if (BG3.x2 <= -BG3.width + gamespeed3) BG3.x2 = BG3.width;
else (BG3.x2 -= gamespeed3);
ctx.drawImage(background3, BG3.x1, BG3.y, BG3.width, BG3.height);
ctx.drawImage(background3, BG3.x2, BG3.y, BG3.width, BG3.height);

//background layer 4
if (BG4.x1 <= -BG4.width + gamespeed4) BG4.x1 = BG4.width;
else BG4.x1 -= gamespeed4;
if (BG4.x2 <= -BG4.width + gamespeed4) BG4.x2 = BG4.width;
else (BG4.x2 -= gamespeed4);
ctx.drawImage(background4, BG4.x1, BG4.y, BG4.width, BG4.height);
ctx.drawImage(background4, BG4.x2, BG4.y, BG4.width, BG4.height);

// //GROUND - background layer 5
// if (BG5.x1 <= -BG5.width + gamespeed5) BG5.x1 = BG5.width;
// else BG4.x1 -= gamespeed5;
// if (BG5.x2 <= -BG5.width + gamespeed5) BG5.x2 = BG5.width;
// else (BG5.x2 -= gamespeed5);
// ctx.drawImage(background5, BG5.x1, BG5.y, BG5.width, BG5.height);
// ctx.drawImage(background5, BG5.x2, BG5.y, BG5.width, BG5.height);

}


function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleBackground();
    handleObstacles();
    handleParticles();
    avatar.update();
    avatar.draw();
    ctx.fillStyle = 'red'
    ctx.font = '30px Georgia';
    ctx.strokeText(score, 450, 70);
    ctx.fillText(score, 450, 70);
    handleCollisions();
    if (handleCollisions()) return;
    //ctx.fillRect(10, canvas.height - 90, 50, 50);
    requestAnimationFrame(animate);
    angle+=0.12;
    hue++;
    frame++;
}
animate();



window.addEventListener('keydown', function(e){
    if (e.code === 'Space') spacePressed = true;
});

window.addEventListener('keyup', function(e){
    if (e.code === 'Space') spacePressed = false;
    //avatar.frameX = 0;
});

const bang = new Image();
bang.src = 'bang.png';
function handleCollisions(){
for(let i = 0; i < obstaclesArray.length; i++){
    if (avatar.x < obstaclesArray[i].x + obstaclesArray[i].width && avatar.x + avatar.width > obstaclesArray[i].x && 
        ((avatar.y < 0 + obstaclesArray[i].top && avatar.y + avatar.height > 0) ||
        (avatar.y > canvas.height - obstaclesArray[i].bottom && avatar.y + avatar.height < canvas.height))){
                //detects collisions with obstacles
                ctx.drawImage(bang, avatar.x, avatar.y, 50, 50);
                ctx.font = "25px, Georgia";
                ctx.fillStyle = 'white';
                ctx.fillText ('Game Over! Your Score Is ' + score, 160, canvas.height/2 - 10); //PART 1 MINUTE 33 

                return true;
            }
}
}