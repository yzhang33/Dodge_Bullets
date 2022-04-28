
canvas.addEventListener('mousemove',(e)=>{
    if(user.socketId != null){
        user.userData.x=e.pageX;
        user.userData.y=e.pageY;
    }
})

//fire event for cop
window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
      return;
    }
    if(user.userData.identity == "people"){
        return;
    }
    if (event.code === "Space" && user.userData.identity == "cop"){
        // Handle fire
        socket.emit("userFired",{
            copVectorX: user.userData.x,
            copVectorY:user.userData.y,
            fired: true
        })
    }
    event.preventDefault();
  }, true);
  
//draw all the image tags
function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    let bkImage = document.getElementById("bkj");
    ctx.drawImage(bkImage,0,0,canvas.width,canvas.height);
    //render user images
    if(user.userData != undefined ){
        generateImage(user);   
    }
    //render connected user image
    if(users.length > 0){
        users.forEach((u)=>{
            //console.log(u.userData.identity);
            if(u.socketId != user.socketId){
                generateImage(u);
            } 
        });
    }
    requestAnimationFrame(draw);
}

//used to generate image associated
function generateImage(u){
    let elementId="";
    if(u.userData.identity == "people"){
        elementId = ""+u.socketId;
    }else{
        elementId = "cop";
    }
    let myImage = document.getElementById(elementId);
    myImage.style.width = '50px';
    myImage.style.height = '50px';
    ctx.drawImage(myImage,u.userData.x,u.userData.y,200,200);
}
