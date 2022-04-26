//connection to server
let socket = io.connect('http://localhost:8080')

function init(){
    socket.emit('init',{
        userName:user.name
    })
}

socket.on('initReturn',(data)=>{
    user = data.userObj;
    posts = data.posts;
    setInterval(()=>{
        socket.emit('tik',{
            xVector:user.userData.x,
            yVector:user.userData.y
        })
    })
})

socket.on('tok',(data)=>{
    //console.log(data)
    users = data.users;
})