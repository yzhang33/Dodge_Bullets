
canvas.addEventListener('mousemove',(e)=>{
    if(user.socketId != null){
        user.userData.x=e.pageX;
        user.userData.y=e.pageY;
    }
})


function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if(user.userData != undefined){
        let myImage = document.getElementById(user.socketId);
        myImage.style.width = '50px';
        myImage.style.height = '50px';
        ctx.drawImage(myImage,user.userData.x,user.userData.y,200,200);
        //drawImage(user)
    }
    // if(users.length > 0){
    //     users.forEach((u)=>{
    //         console.log(u.userData.identity);
    //         if(u.userData.identity != -1){
    //             let myImage = document.getElementsByClassName("#"+u.socketId);
    //             myImage.style.width = '50px';
    //             myImage.style.height = '50px';
    //             ctx.drawImage(myImage,user.userData.x,user.userData.y,200,200);
    //         }  
    //     })
    //}
    
    requestAnimationFrame(draw);
}
