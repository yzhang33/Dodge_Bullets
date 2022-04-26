const io=require("../servers").io;
//classes
const User = require('./userClass/user')
const UserData=require('./userClass/userData')
let settings={
    defaultCanvasWidth:500,
    defaultCanvasHeigh:500,
    defaultSize:6,
    copChosen:false,
    defaultChoice:[0,1,2,3,4,5,6,7,8,9,10]
}

let users = []

//boardcast 
setInterval(()=>{
    if(users.length > 0){
        io.to('board').emit('tok',{
            users
        });
    }
},33);//update users information every 30fps

