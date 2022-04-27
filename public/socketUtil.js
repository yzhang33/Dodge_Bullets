let roles = ["./assets/basketball.png",
"./assets/cabinte.png",
"./assets/capet.png",
"./assets/clock.png",
"./assets/curtain.png",
"./assets/flowerRing.png",
"./assets/gifts.png",
"./assets/lamp.png",
"./assets/laptop.png",
"./assets/plant.png"]

//connection to server
let socket = io.connect('http://localhost:8080');

function init(){
    draw();
    socket.emit('init',{
        userName:user.name
    })
}

socket.on('initReturn',(data)=>{
    user = data.userObject;
    setInterval(()=>{
        socket.emit('tik',{
            xVector:user.userData.x,
            yVector:user.userData.y
        })
    },33);

    console.log(user.userData);
    console.log(roles[user.userData.appearance]);
    document.querySelector('#images').innerHTML += 
    `<img id=${user.socketId} 
          src=${roles[user.userData.appearance]}
          >`
})

socket.on('tok',(data)=>{
    users = data.users;
    //console.log(users)
    users.forEach( (u) =>{
        //console.log($("."+u.socketId).length);
        if($("." +u.socketId).length && u.socketId != user.socketId){
            document.querySelector('#images').innerHTML += 
            `<img id=${u.socketId} 
                  src=${roles[u.userData.appearance]}
             >`
            console.log("hello")
        }
    })
})