const canvas = document.getElementById('maze');
const context = canvas.getContext('2d');

function paths() {
    // context.beginPath();
    // context.moveTo(230, 500);
    // context.lineTo(230, 450);
    // context.strokeStyle = '#006400';
    // context.stroke();
    // context.closePath();

    context.fillStyle= "blue";
    context.fillRect(470, 250, 20, 200);
    context.fillRect(420, 120, 20, 310);

    context.fillRect(390, 390, 20, 100);
    context.fillRect(390, 200, 20, 200);

    context.fillRect(300, 250, 190, 20);
    context.fillRect(300, 250, 20, 150);
    
    context.fillRect(350, 180, 20, 190);

    context.fillRect(300, 350, 70, 20);
    context.fillRect(300, 100, 100, 20);
    context.fillRect(300, 50, 20, 140); 
    
    context.fillRect(270, 430, 200, 20);

    context.fillRect(230, 300, 160, 20);
    context.fillRect(230, 300, 20, 195); // -> where myPlayer starts 
    
    context.fillRect(200, 390, 180, 20); 
    context.fillRect(200, 150, 20, 140);
    context.fillRect(200, 100, 100, 20); 
      
    context.fillRect(140, 390, 20, 70); 
    context.fillRect(140, 350, 80, 20);
    context.fillRect(140, 200, 350, 20); 
    context.fillRect(140, 200, 20, 150); 
     
    context.fillRect(130, 50, 20, 90); 

    context.fillRect(100, 350, 270, 20); 
    context.fillRect(100, 250, 250, 20); 
    
    
    context.fillRect(90, 50, 415, 20); // -> the finish line

    context.fillRect(70, 150, 400, 20);
    context.fillRect(70, 310, 150, 20);
    context.fillRect(70, 310, 20, 120);
    context.fillRect(70, 150, 20, 160);
    context.fillRect(70, 50, 20, 100);
    
    context.fillRect(50, 150, 100, 20);
    
    context.fillRect(20, 450, 210, 20);
    context.fillRect(20, 310, 40, 20);
    context.fillRect(20, 150, 20, 300);
    context.fillRect(20, 20, 420, 20);
    context.fillRect(20, 20, 20, 130);
    
}

class Player {
    constructor() {
        this.x = 235;
        this.y = 480;
        this.width = 10;
        this.height = 10;
        this.draw();

        // const image = new Image();
        // image.src = './images/1-hd-01-q1sxav.png';
        // image.addEventListener('load', () => {
        //     this.image = image;
        //     this.draw();
        // })
    }

    draw() {
        const image = new Image();
        image.src = './images/e8b37aa3bee66e219a10398244734017.gif';
        image.addEventListener('load', () => {
            context.drawImage(image, this.x, this.y, this.width, this.height);     
        })
        paths();
    }

    left() {
        this.x -= 5;
    }

    right() {
        this.x += 5;
    }

    top() {
        this.y -= 5;
    }

    bottom() {
        this.y += 5;
    }

     
}

const myPlayer = new Player;


document.addEventListener('keydown', (e) => {
    switch(e.keyCode) {
        case 38:
            myPlayer.top();
        break;
        case 40:
            myPlayer.bottom();
        break;
        case 37:
            myPlayer.left();
        break;
        case 39:
            myPlayer.right();
        break;
    }
    context.clearRect(0, 0, canvas.width, canvas.height); //clear the myPlayer previous position
    myPlayer.draw();    

    
    
})