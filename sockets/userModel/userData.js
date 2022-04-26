class UserData{
    constructor(userName,settings){
        this.name = userName;
        this.x = Math.floor(settings.defaultCanvasWidth*Math.random()+10);
        this.y = Math.floor(settings.defaultCanvasWidth*Math.random()+10);
        this.radius = settings.defaultSize;
        //generate random identity
        if(settings.copChosen == false){
            var ret = getRandomIdentity();
            if(ret == 1){
                settings.copChosen = true;
                this.identity = "cop"
            }else{
                this.identity = "people"
            }
        }else{
            this.identity = "people"
        }
        //appearnce for people
        if(this.identity === "people"){
            this.appearance = getRandomAppearance();
        }else{
            this.appearance = null;
        }
    }
}