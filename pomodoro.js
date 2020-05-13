let startInt = setInterval(simpleTimer, 1000);
let seconds = 0;
let minutes = 0;
let startingTime = 2;

let timerSelector = document.querySelector('#timer')

// 100 seconds - > 01 min 40 sec
// 200 seconds - > 03 min 20 sec etc...
function convertToMinuteSeconds(seconds){
    
}

function simpleTimer(){
    startingTime -= 1;
    timerSelector.textContent = startingTime;
    //if time reaches 0, calls stop function will will, well, stop timer
    if (startingTime == 0){
        stopFunction();
    }
}

function stopFunction(){
    clearInterval(startInt)
}

startInt;