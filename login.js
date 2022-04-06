var user = document.getElementById("typeUser");
var pass = document.getElementById("typePassword");
var errorMsg = document.getElementById("error")

function validate(callback){
    if(user.value==""){
        errorMsg.innerHTML = "Username cannot be empty";
        user.style.border = "2px solid red";
    }
    else if(pass.value==""){
        errorMsg.innerHTML = "Password cannot be empty";
        pass.style.border = "2px solid red";
    }
    else if(user.value=="admin" && pass.value=="12345"){
        callback();
    }
    else{
        errorMsg.innerHTML = "Invalid login details";
    }
}

function loginfn(){
    window.location.href = "./home.html";
}

// --------error message reset----------//

function display(){
    if(user.value!=" "){
        user.style.border = "2px solid white";
        errorMsg.innerHTML = "Enter username and password";
    }
    if(pass.value!=" "){
        pass.style.border = "2px solid white";
        errorMsg.innerHTML = "Enter username and password";
    }
    
}
