class Bullet{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.speed = -1;
    }
    update(){
        this.y -= speed;
    }
    outOfBounds(){
    }
}