let seconds = 0;
let minutes = 0;

let startingTime = 1;
//let startingTime = 1501;
// possible necessary step, add 1 more second to the timer, so that 00:00 can be shown. fools the user a bit tho.

//let workTime = 1501;
//let breakTime = 301;

let workTime = 1;
let breakTime = 1;

let timeString = '';
let timerEvent;
let rounds = 5;
let currentMode = 'work';

let stopAudio = new Audio('tsk.mp3')

let minutesStorage = 0;
let secondsStorage = 0;

// let startInter = setInterval(simpleCountdown, 1000);

const timerSelector = document.querySelector('#timer');
const buttonSelector = document.querySelectorAll('.buttons');
const changeSelector = document.querySelectorAll(".time");

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
    timerSelector.textContent = convertToMinuteSeconds(startingTime-1)

    if (startingTime == 0){
        timerSelector.textContent = convertToMinuteSeconds(startingTime-1);
        if (rounds >= 1){
            if (currentMode === 'work'){
                stopAudio.play();
                timerSelector.textContent = convertToMinuteSeconds(startingTime-1)
                currentMode = 'break';
                timerSelector.style.color = 'green';
                startingTime = breakTime;
                rounds -= 1;
                timerSelector.textContent = convertToMinuteSeconds(startingTime-1);
            }
            else{
                stopAudio.play();
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
    //clearInterval(startedTimer)
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

function changeTime(){
    changeSelector.forEach((field) => {
        field.addEventListener('change', (e) =>{
            console.log(event.target.id);
            if (event.target.id === 'work'){
                workTime = event.target.valueAsNumber * 60 + 1;
            }
            else{
                breakTime = event.target.valueAsNumber * 60 + 1;
            }
            startingTime = workTime;
            timerSelector = convertToMinuteSeconds(startingTime - 1);
        //     if (event.target.id === 'minutes'){
        //         minutesStorage = event.target.valueAsNumber * 60;
        //     }
        //     else{
        //         secondsStorage = event.target.valueAsNumber;
        //     }
        //     startingTime = minutesStorage + secondsStorage +1;
        //     timerSelector.textContent = convertToMinuteSeconds(startingTime - 1);
        // });
    });
});
}




//     changeTime.addEventListener('click', (e) =>{
//         console.log(event.target.valueAsNumber)
//     });

       


eventListeners();
changeTime();