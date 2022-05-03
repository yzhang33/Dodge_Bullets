class Bullet{
    constructor(x,y){
        this.bulletX = x;
        this.bulletY = y;
        this.speed = 1;
    }
    update(){
        this.bulletY -= this.speed;
    }
}

module.exports = Bullet;