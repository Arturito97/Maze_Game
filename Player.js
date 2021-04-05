class Player {
    constructor() {
        this.x = 460;
        this.y = 100;
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
        image.src = './images/1-hd-01-q1sxav.png';
        image.addEventListener('load', () => {
            context.drawImage(image, this.x, this.y, this.width, this.height);     
        });
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