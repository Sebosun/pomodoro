let seconds = 0;
let minutes = 0;

let startingTime = 150;
let timeString = '';
let timerEvent;


// let startInter = setInterval(simpleCountdown, 1000);

const timerSelector = document.querySelector('#timer');
const buttonSelector = document.querySelectorAll('.buttons');

//toberemoved
timerSelector.textContent = convertToMinuteSeconds(startingTime);


//takes in raw seconds passed, returns time as a string in MM:SS format
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

function simpleCountdown(){
    startingTime -= 1;
    timerSelector.textContent = convertToMinuteSeconds(startingTime);
    //    let convertedTime = convertToMinuteSeconds(startingTime);
    //if time reaches 0, calls stop function will, well, stop timer
    if (startingTime == 0){
        stopFunction();
    }
}
//making this a function since declaring startInter just starts the timer immediatelly
function startTimer(){
    return setInterval(simpleCountdown, 1000);
    
}

function stopFunction(startedTimer){
    clearInterval(startedTimer);
}

function eventListeners(){
    buttonSelector.forEach((button) =>{
        button.addEventListener('click', (e) =>{
            console.log(event.target.id);
            if (event.target.id === 'start'){
                timerEvent = startTimer();
            }
            if(event.target.id === 'stop'){
                stopFunction(timerEvent);
            }
        });
    });
}

eventListeners();