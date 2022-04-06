Ajax();

function Ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            var output = "";
            for(var i = 0;i<response.length;i++){
                if (response[i].completed == true) {
                  output += `<li class="list-group-item list list-group-item-primary"><input type="checkbox" checked disabled><span class="ms-3">${response[i].title}<span></li>`;     
              } else {
                  output += `<li class="list-group-item"><input class="form-check-input me-1" type="checkbox" value="" aria-label="..."  onchange="return taskDone();"><span class="ms-2">${response[i].title}<span></li>`;
              }
    
            }
            document.getElementById("content").innerHTML = output;
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}

// --------------Task completion alert-----------//

function taskDone(){
    return new Promise((resolve) => {
            setTimeout(() => {
                    var checkbox = document.getElementsByClassName("form-check-input");
                    var done = 0;
                    for (var i = 0; i < checkbox.length; i++) {
                        if (checkbox[i].checked == true) {
                            done += 1;
                        }
                    }
                    if (done == 5) {
                        resolve(alert("Congrats 5 Tasks have been Successfully Completed."));
                    }
                }, 50);
        })
}
// --------------Task completion alert-----------//

// ---------Reset button--------//
var reset = document.getElementById("toDo");

function resetTask(){
    reset.innerHTML = "Reset Tasks";
}
function unSet(){
    reset.innerHTML = "To-Do App"
}
