let seconds = 0;
let minutes = 0;

let startingTime = 5;
let timeString = '';

let startInt = setInterval(simpleTimer, 1000);

let timerSelector = document.querySelector('#timer')

// 100 seconds - > 01 min 40 sec
// 200 seconds - > 03 min 20 sec etc...
function convertToMinuteSeconds(seconds){  
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds - minutes * 60;
    if (minutes.toString().length === 1){
        let minutesArray = minutes.toString().split('');
        minutesArray.unshift('0')
        minutes = minutesArray.join('')
    }
    if (remainingSeconds.toString().length === 1){
        let secondsArray = remainingSeconds.toString().split('');
        secondsArray.unshift('0')
        remainingSeconds = secondsArray.join('')
        console.log(remainingSeconds)
    }

    timeString = `${minutes}:${remainingSeconds}`
    
    return timeString;
}

function simpleTimer(){
    startingTime -= 1;
    timerSelector.textContent = convertToMinuteSeconds(startingTime);
    //    let convertedTime = convertToMinuteSeconds(startingTime);
    //if time reaches 0, calls stop function will, well, stop timer
    if (startingTime == 0){
        stopFunction();
    }
}

function stopFunction(){
    clearInterval(startInt)
}

startInt;