const audio = document.getElementById('audio');
const canvas = document.getElementById('maze');
const context = canvas.getContext('2d');
let obstacles = [];
let animationId;
let gameOver = false;
let currentLevel = 1;
const myMusic = new Audio('./music/Among Us Drip Theme Song Original (Among Us Trap Remix - Amogus Meme Music) - Copy.mp3');
const myMusic2 = new Audio('./music/Celebrate Good Times... Come on!!!.mp3');
let myPlayer;
document.getElementById('p').style.display = 'none';
document.getElementById('p2').style.display = 'none';
document.getElementById('p3').style.display = 'none';

document.getElementById('start-button').onclick = () => {
    document.getElementById('game-intro').style.display = 'none';
    document.getElementById('game-board').style.display = 'block';
    myPlayer = new Player();
    updateCanvas();
    createObstacles();
      //createObstacles2();
    HitWall();
    myMusic.loop = true;
    myMusic.play()
}
/*
class music {
    constructor() {
        this.music = document.createElement('audio');
        this.music.src = './music/Among Us Drip Theme Song Original (Among Us Trap Remix - Amogus Meme Music).mp3';
        this.music.setAttribute('preload', 'auto');
        this.music.setAttribute('controls', 'none');
        this.music.style.display = 'none';
        document.body.appendChild(this.music);
        this.play = function () {
            this.music.play();
        };
        this.stop = function () {
            this.music.pause();
        };
    }
}
*/
function createObstacles() {
    obstacles.push(new Obstacle(470, 250, 20, 200));
    obstacles.push(new Obstacle(420, 185, 20, 150));
    obstacles.push(new Obstacle(480, 50, 20, 400));
    obstacles.push(new Obstacle(410, 390, 20, 100));
    obstacles.push(new Obstacle(390, 200, 20, 20));

    obstacles.push(new Obstacle(300, 250, 190, 20));
    obstacles.push(new Obstacle(300, 300, 20, 110));
    
    obstacles.push(new Obstacle(350, 180, 20, 110));

    obstacles.push(new Obstacle(300, 350, 70, 20));
    obstacles.push(new Obstacle(300, 100, 100, 20));
    obstacles.push(new Obstacle(300, 50, 20, 80)); 
    
    obstacles.push(new Obstacle(270, 430, 200, 20));

    obstacles.push(new Obstacle(250, 310, 140, 20));
    obstacles.push(new Obstacle(230, 350, 20, 80));
    obstacles.push(new Obstacle(230, 450, 20, 50));
    
    obstacles.push(new Obstacle(200, 390, 180, 20)); 
    obstacles.push(new Obstacle(200, 150, 20, 140));
    obstacles.push(new Obstacle(200, 100, 100, 20)); 
      
    obstacles.push(new Obstacle(140, 390, 20, 70)); 
    obstacles.push(new Obstacle(140, 350, 80, 20));
    obstacles.push(new Obstacle(140, 200, 350, 20)); 
     
     
    obstacles.push(new Obstacle(130, 50, 20, 70)); 

    obstacles.push(new Obstacle(90, 350, 50, 20)); 
    obstacles.push(new Obstacle(120, 250, 250, 20)); 
    
    
    obstacles.push(new Obstacle(90, 50, 415, 20));

    obstacles.push(new Obstacle(110, 150, 350, 20));
    obstacles.push(new Obstacle(110, 310, 150, 20));
    obstacles.push(new Obstacle(70, 310, 20, 120));
    obstacles.push(new Obstacle(70, 150, 20, 160));
    obstacles.push(new Obstacle(70, 50, 20, 100));
    
    obstacles.push(new Obstacle(20, 450, 210, 20));
    obstacles.push(new Obstacle(20, 310, 30, 20));
    obstacles.push(new Obstacle(20, 170, 20, 300));
    obstacles.push(new Obstacle(20, 10, 490, 20));
    obstacles.push(new Obstacle(20, 20, 20, 170));
    obstacles.push(new Obstacle(250, 480, 250,20));
    obstacles.push(new Obstacle(480, 450, 20, 50))
    
    
}

function createObstacles2() {
    obstacles.push(new Obstacle(0, 0, 10, 25)); //The grid
    obstacles.push(new Obstacle(0, 55, 10, 455)); //The grid
    obstacles.push(new Obstacle(0, 0, 500, 10)); //The grid
    obstacles.push(new Obstacle(490, 0, 10, 240)); //The grid
    obstacles.push(new Obstacle(490, 260, 10, 250)); //The grid
    obstacles.push(new Obstacle(0, 490, 490, 10)); //The grid

    obstacles.push(new Obstacle(30, 30, 10, 50));
    obstacles.push(new Obstacle(30, 30, 30, 10));
    obstacles.push(new Obstacle(30, 30, 10, 80));
    obstacles.push(new Obstacle(30, 100, 10, 60));
    obstacles.push(new Obstacle(30, 180, 10, 150));
    obstacles.push(new Obstacle(30, 350, 10, 60));
    obstacles.push(new Obstacle(30, 430, 10, 60));

    obstacles.push(new Obstacle(60, 30, 10, 100));
    obstacles.push(new Obstacle(60, 150, 10, 90));
    obstacles.push(new Obstacle(60, 240, 90, 10));
    obstacles.push(new Obstacle(60, 270, 10, 170));
    obstacles.push(new Obstacle(60, 460, 10, 30))
    
    obstacles.push(new Obstacle(70, 120, 90, 10));

    obstacles.push(new Obstacle(90, 30, 10, 80));
    obstacles.push(new Obstacle(90, 30, 50, 10));
    obstacles.push(new Obstacle(90, 130, 10, 90));
    obstacles.push(new Obstacle(90, 240, 10, 90));
    obstacles.push(new Obstacle(90, 350, 70, 10));
    obstacles.push(new Obstacle(90, 380, 10, 90));
    obstacles.push(new Obstacle(90, 380, 70, 10));

    obstacles.push(new Obstacle(170, 30, 10, 30));
    obstacles.push(new Obstacle(170, 80, 10, 10));

    obstacles.push(new Obstacle(120, 50, 10, 50));
    obstacles.push(new Obstacle(120, 50, 70, 10));
    obstacles.push(new Obstacle(120, 90, 70, 10));
    obstacles.push(new Obstacle(120, 130, 10, 30));
    obstacles.push(new Obstacle(120, 180, 10, 40));
    obstacles.push(new Obstacle(120, 180, 40, 10));
    obstacles.push(new Obstacle(120, 270, 10, 70));
    obstacles.push(new Obstacle(120, 410, 10, 90));

    obstacles.push(new Obstacle(140, 0, 10, 40));

    obstacles.push(new Obstacle(150, 150, 10, 70));
    obstacles.push(new Obstacle(150, 380, 10, 60));
    obstacles.push(new Obstacle(150, 450, 10, 40));
    obstacles.push(new Obstacle(150, 380, 80, 10));
    obstacles.push(new Obstacle(150, 240, 10, 90));
    
    
    obstacles.push(new Obstacle(180, 150, 50, 10));
    obstacles.push(new Obstacle(180, 120, 50, 10));
    obstacles.push(new Obstacle(180, 150, 10, 100));
    obstacles.push(new Obstacle(180, 270, 10, 90));
    obstacles.push(new Obstacle(180, 350, 50, 10));
    obstacles.push(new Obstacle(180, 410, 10, 60));
    obstacles.push(new Obstacle(180, 435, 50, 10));
    obstacles.push(new Obstacle(180, 410, 50, 10));
    obstacles.push(new Obstacle(180, 460, 50, 10));
    
    obstacles.push(new Obstacle(210, 30, 10, 70));
    obstacles.push(new Obstacle(210, 180, 10, 90));
    obstacles.push(new Obstacle(210, 270, 60, 10));
    obstacles.push(new Obstacle(210, 300, 10, 30));
    obstacles.push(new Obstacle(210, 320, 60, 10));

    obstacles.push(new Obstacle(230, 220, 20, 10));

    obstacles.push(new Obstacle(240, 20, 10, 30));
    obstacles.push(new Obstacle(240, 70, 60, 10));
    obstacles.push(new Obstacle(240, 70, 10, 40));
    obstacles.push(new Obstacle(240, 180, 10, 10));
    obstacles.push(new Obstacle(240, 270, 10, 30));
    
    obstacles.push(new Obstacle(250, 130, 10, 120));
    obstacles.push(new Obstacle(250, 320, 10, 70));
    obstacles.push(new Obstacle(250, 400, 10, 70));
    obstacles.push(new Obstacle(250, 350, 60, 10));
    obstacles.push(new Obstacle(250, 380, 60, 10));

    obstacles.push(new Obstacle(260, 130, 50, 10));

    obstacles.push(new Obstacle(270, 30, 10, 80));
    obstacles.push(new Obstacle(270, 300, 10, 30));

    obstacles.push(new Obstacle(280, 160, 10, 90));
    obstacles.push(new Obstacle(280, 270, 60, 10));
    obstacles.push(new Obstacle(280, 410, 10, 80));
    obstacles.push(new Obstacle(280, 410, 60, 10));

    obstacles.push(new Obstacle(290, 160, 60, 10));

    obstacles.push(new Obstacle(300, 20, 10, 30));
    obstacles.push(new Obstacle(300, 70, 10, 60))
    obstacles.push(new Obstacle(300, 300, 10, 50));

    obstacles.push(new Obstacle(310, 70, 60, 10));
    obstacles.push(new Obstacle(310, 40, 60, 10));
    obstacles.push(new Obstacle(310, 180, 10, 70));
    obstacles.push(new Obstacle(310, 440, 10, 20));
    obstacles.push(new Obstacle(310, 460, 60, 10))

    obstacles.push(new Obstacle(330, 100, 20, 10));
    obstacles.push(new Obstacle(330, 130, 20, 10));
    obstacles.push(new Obstacle(330, 270, 10, 120));
    
    obstacles.push(new Obstacle(340, 10, 10, 130));
    obstacles.push(new Obstacle(340, 160, 10, 60));
    obstacles.push(new Obstacle(340, 240, 30, 10));

    obstacles.push(new Obstacle(360, 270, 10, 60));
    obstacles.push(new Obstacle(360, 340, 10, 110));

    obstacles.push(new Obstacle(370, 100, 60, 10));
    obstacles.push(new Obstacle(370, 100, 10, 150));
    obstacles.push(new Obstacle(370, 340, 30, 10));
    
    obstacles.push(new Obstacle(390, 270, 50, 10));
    obstacles.push(new Obstacle(390, 10, 10, 80));
    obstacles.push(new Obstacle(390, 240, 40, 10))
    obstacles.push(new Obstacle(390, 300, 10, 60));
    obstacles.push(new Obstacle(390, 340, 10, 60));
    obstacles.push(new Obstacle(390, 410, 10, 70));
    obstacles.push(new Obstacle(390, 390, 40, 10))

    obstacles.push(new Obstacle(400, 130, 10, 90));
    obstacles.push(new Obstacle(400, 130, 60, 10));

    obstacles.push(new Obstacle(420, 420, 10, 70));
    obstacles.push(new Obstacle(420, 30, 10, 70));
    obstacles.push(new Obstacle(420, 30, 40, 10));
    obstacles.push(new Obstacle(420, 300, 10, 70));

    obstacles.push(new Obstacle(430, 130, 10, 90));
    obstacles.push(new Obstacle(430, 420, 30, 10))

    obstacles.push(new Obstacle(450, 150, 10, 110));
    obstacles.push(new Obstacle(450, 30, 10, 100));
    obstacles.push(new Obstacle(450, 270, 10, 130));
    obstacles.push(new Obstacle(450, 450, 10, 40));
}






function updateCanvas() {
    obstacles.forEach((obstacle) => {
        obstacle.draw();
    })

    myPlayer.draw();
    if (!gameOver) {
        animationId = requestAnimationFrame(updateCanvas);
    }

    if (currentLevel === 1) {
        createObstacles();
    } else if (currentLevel === 2) {
        createObstacles2();
    }
     
    endGame();
    
}




document.addEventListener('keydown', (e) => {
    switch(e.keyCode) {
        case 38:
            myPlayer.top();
            if (HitWall()) {
                myPlayer.y += 5;
            }
        break;
        case 40:
            myPlayer.bottom();
            if (HitWall()) {
                myPlayer.y -= 5;
            }
        break;
        case 37:
            myPlayer.left();
            if (HitWall()) {
                myPlayer.x += 5;
            } //se myPlayer bater na parede
        break;
        case 39:
            myPlayer.right();
            if (HitWall()) {
                myPlayer.x -= 5;
            } //se myPlayer bater na parede, volta pa tras
        break;
    }
    context.clearRect(0, 0, canvas.width, canvas.height); //clear the myPlayer previous position
    myPlayer.draw();  
})

function HitWall() {
    let hitObstacle = false;
    hitObstacle = obstacles.some((obstacle) => {
       return detectCollision(obstacle);
    })
    return hitObstacle;
} //se o hitobstacle detetar um obstaculo a sua frente, retorna o obstaculo

function detectCollision(obstacle) {
    return !((myPlayer.x > obstacle.x + obstacle.width) ||  //player está mais a direita
     (myPlayer.x + myPlayer.width < obstacle.x )||  //player está mais a esquerda
     (myPlayer.y > obstacle.y + obstacle.height) || //player está mais a baixo
    (myPlayer.y + myPlayer.height < obstacle.y))  //player está em cima
}

function endGame(){
    if((myPlayer.x > 495) &&
    (myPlayer.y === 35)) {
    // (myPlayer.width === 10) &&
    // (myPlayer.height === 10)) 

        //cancelAnimationFrame(animationId);
        //gameOver = true;
        currentLevel = 2;
        alert('Easy, right? Try this one now 😉');
        context.clearRect(0, 0, canvas.width, canvas.height);
        obstacles = [];
        myPlayer.x = 0;
        myPlayer.y = 35;
    }

    if(myPlayer.x < 0) {
        createObstacles();
        currentLevel = 1;
    }

    if((myPlayer.x > 495) &&
     (myPlayer.y === 245)) {
         cancelAnimationFrame(animationId);
         gameOver = true;
         alert('Well done!');
         document.getElementById('game-board').style.display = 'none';
         myMusic.pause();
         document.getElementById('p').style.display = 'block';
         document.getElementById('p2').style.display = 'block';
         document.getElementById('p3').style.display = 'block';
         myMusic2.play();

          
     }

     
     
}