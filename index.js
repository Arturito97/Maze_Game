const audio = document.getElementById('audio');
const canvas = document.getElementById('maze');
const context = canvas.getContext('2d');
let obstacles = [];
let animationId;
let gameOver = false;
let currentLevel = 1;
const myMusic = new Audio('./music/Among Us Drip Theme Song Original (Among Us Trap Remix - Amogus Meme Music).mp3');
let myPlayer;

 

document.getElementById('start-button').onclick = () => {
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
    obstacles.push(new Obstacle(230, 350, 20, 80)); // -> where myPlayer starts
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
    
    
    obstacles.push(new Obstacle(90, 50, 415, 20)); // -> the finish line

    obstacles.push(new Obstacle(110, 150, 350, 20));
    obstacles.push(new Obstacle(110, 310, 150, 20));
    obstacles.push(new Obstacle(70, 310, 20, 120));
    obstacles.push(new Obstacle(70, 150, 20, 160));
    obstacles.push(new Obstacle(70, 50, 20, 100));
    
    obstacles.push(new Obstacle(20, 450, 210, 20));
    obstacles.push(new Obstacle(20, 310, 30, 20));
    obstacles.push(new Obstacle(20, 170, 20, 300));
    obstacles.push(new Obstacle(20, 10, 490, 20));
    obstacles.push(new Obstacle(20, 20, 20, 130));
    
    
}

function createObstacles2() {
    obstacles.push(new Obstacle(0, 0, 10, 240));
    obstacles.push(new Obstacle(0, 260, 10, 250));
    obstacles.push(new Obstacle(0, 0, 500, 10));
    obstacles.push(new Obstacle(490, 0, 10, 240));
    obstacles.push(new Obstacle(490, 260, 10, 250));
    obstacles.push(new Obstacle(0, 490, 490, 10));

    obstacles.push(new Obstacle(30, 30, 10, 50));
    obstacles.push(new Obstacle(30, 30, 30, 10));
    obstacles.push(new Obstacle(30, 30, 10, 80));
    obstacles.push(new Obstacle(30, 100, 10, 60));
    obstacles.push(new Obstacle(30, 180, 10, 150));
    obstacles.push(new Obstacle(30, 350, 10, 60));
    obstacles.push(new Obstacle(30, 430, 10, 40))

    obstacles.push(new Obstacle(60, 30, 10, 100));

    obstacles.push(new Obstacle(70, 120, 90, 10));
    obstacles.push(new Obstacle(70, 150, 10, 90));
    obstacles.push(new Obstacle(70, 240, 90, 10));
    obstacles.push(new Obstacle(90, 30, 10, 80));
    obstacles.push(new Obstacle(90, 30, 50, 10));
    obstacles.push(new Obstacle(120, 50, 10, 50));
    obstacles.push(new Obstacle(120, 50, 70, 10));
    obstacles.push(new Obstacle(140, 0, 10, 40));
    
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
    (myPlayer.y + myPlayer.height < obstacle.y))  //player está em coma
 }

function endGame(){
    if((myPlayer.x > 495) &&
    (myPlayer.y === 35)) {
    // (myPlayer.width === 10) &&
    // (myPlayer.height === 10)) 

        //cancelAnimationFrame(animationId);
        //gameOver = true;
        currentLevel = 2;
        alert('GG bruh');
        context.clearRect(0, 0, canvas.width, canvas.height);
        obstacles = [];
        myPlayer.x = 0;
        myPlayer.y = 245;
    }

    if((myPlayer.x > 495) &&
     (myPlayer.y === 245)) {
         cancelAnimationFrame(animationId);
         gameOver = true;
         alert('GG bruh')
     }

    
}


