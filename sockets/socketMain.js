const io=require("../server").io;
//classes
const User = require('./userModel/user')
const UserData = require('./userModel/userData')

let settings={
    defaultCanvasWidth:500,
    defaultCanvasHeigh:500,
    defaultSize:6,
    copChosen:false,
    defaultChoice:[0,1,2,3,4,5,6,7,8,9,10]
}

let users = []

// let u1 = new UserData("pete",settings);
// let u2 = new UserData("p2",settings);
// let u3 = new UserData("p3",settings);

// console.log(settings);
// console.log(u1);
// console.log(u2);
// console.log(u3);


//boardcast 
setInterval(()=>{
    if(users.length > 0){
        io.to('board').emit('tok',{
            users
        });
    }
},33);//update users information every 30fps

io.sockets.on('connect',(socket)=>{
    let user = {};
    socket.on('init',(data)=>{
        socket.join('board');
        //init new user data obj
        let userData = new UserData(data.userName, settings);
        user = new User(socket.id,userData);
        //send dummy data when connected
        socket.emit('initReturn', {
            userObject:user
        });
        users.push(user);
        console.log("new user connected:"+user.userData.name);
    });
    //receiveing user information
    socket.on('tik',(data)=>{
        if(user.socketId != null){
            user.userData.x = data.xVector;
            user.userData.y = data.yVector;
        }
    })
})

module.exports = io;