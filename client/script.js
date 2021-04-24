let socket = io.connect();

let target = document.getElementById("target");
let connectedUsers = document.getElementById("connectedUsers");



document.getElementById("sendToAll").addEventListener("click", function (){
    let message = document.getElementById("message").value;
    let userName = document.getElementById("userName").value;
    socket.emit('sendToAll', (userName) ,(message));

});

document.getElementById("sendToMe").addEventListener("click", function (){
    let message = document.getElementById("message").value;
    socket.emit('sendToMe', (message));
});

socket.on('displayMessage', (userName, message) => {
    target.innerHTML += '<br>'+userName+": "+message;
    connectedUsers.innerHTML += '<br>'+userName;
});


