
let wHeight =window.outerHeight;
let wWidth = window.outerWidth;

let canvas = document.querySelector('#game-canvas');
let ctx = canvas.getContext('2d');
canvas.width = wWidth;
canvas.height = wHeight;
//board variables
let user={}
let users=[]

console.log(wHeight +" "+wWidth);
$(window).load(()=>{
    $('#loginModal').modal('show');
    
})

$('.name-form').submit((event)=>{
    event.preventDefault()
    user.name = document.querySelector('#name-input').value;
    $('#loginModal').modal('hide');
    //start board when clicked submit
    $('.hiddenOnStart').removeAttr('hidden');
    //init called from socketUtil
    init();
})

