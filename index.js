const displayinput=document.getElementById("display-input")

function display(value){
    displayinput.value+=value
}

function performoperation(){
    displayinput.value=eval(displayinput.value)
}

function removeall(){
    displayinput.value='';
}

function removeone(){
   displayinput.value= displayinput.value.slice(0,-1);
}