let seconds = 0;
let minutes = 0;

let startingTime = 61;
// possible necessary step, add 1 more second to the timer, so that 00:00 can be shown. fools the user a bit tho.

const workTime = 2;
const breakTime = 2;

let timeString = '';
let timerEvent;
let rounds = 5;
let currentMode = 'work';

// let startInter = setInterval(simpleCountdown, 1000);

const timerSelector = document.querySelector('#timer');
const buttonSelector = document.querySelectorAll('.buttons');

//toberemoved
timerSelector.textContent = convertToMinuteSeconds(startingTime - 1);


//takes in raw seconds passed, returns time as a string in MM:SS format
function convertToMinuteSeconds(seconds){  
    if (seconds === 0){
        return '00:00'
    }
    else{
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
}

function simpleCountdown(){
    startingTime -= 1;
    timerSelector.textContent = convertToMinuteSeconds(startingTime - 1)

    if (startingTime == 0){
        timerSelector.textContent = convertToMinuteSeconds(startingTime - 1);
        if (rounds >= 1){
            if (currentMode === 'work'){
                timerSelector.textContent = convertToMinuteSeconds(startingTime - 1)
                currentMode = 'break';
                timerSelector.style.color = 'green';
                startingTime = breakTime;
                rounds -= 1;
                timerSelector.textContent = convertToMinuteSeconds(startingTime -1);
            }
            else{
                currentMode = 'work';
                timerSelector.style.color = 'red';
                startingTime = workTime;
                rounds -= 1;
                timerSelector.textContent = convertToMinuteSeconds(startingTime-1);
            }
        }
        else if (rounds === 0){
            stopFunction(timerEvent);
            alert('Times over');
            rounds = 5;
            startingTime = workTime;
            timerSelector.textContent = convertToMinuteSeconds(startingTime);
        }
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