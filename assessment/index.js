

const display = document.getElementById("display");

function appendToDisplay(input){
    // To show display on input tab
    display.value += input;
}


function clearDisplay(){
    // to clear display
    display.value = "";
}

function calculate(){
   // try code to catch errors from happening
   try{
         display.value = eval(display.value);
   }
   catch(error){
    display.value = "ERROR"
   }
}

