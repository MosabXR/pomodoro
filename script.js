
var displayTime = document.getElementById("timer");
var controlBtn = document.getElementById("controlBtn");
const audio = new Audio('alarm.wav');
var minutes=0;
var seconds=10;
var mycounter;
var flag = 0;

function activateTimer(){
    if(flag===0){
        flag = 1;
        mycounter = setInterval(calcTime,1000);
        calcTime();
        controlBtn.innerHTML = '<i class="fa fa-pause"></i>';
    } else if(flag===3) {
        minutes=25,seconds=0;
        displayTime.innerHTML = minutes + ":0" + seconds;
        controlBtn.innerHTML = 'Start Pomodoro';
        flag = 0;
    } else {
        clearInterval(mycounter);
        controlBtn.innerHTML = '<i class="fa fa-play"></i>';
        flag = 0;
    }
}

function calcTime() {

        timeChecker();
        displayTimer();
    
}

function timeChecker() {
    if(seconds===0){
        
        seconds=60;
        minutes--;

    }

    seconds--;

    if(minutes===0 && seconds===0){

        clearInterval(mycounter);
        audio.play('alarm.wav');
        controlBtn.innerHTML = 'Reset Timer';
        flag = 3;

    }
}

function displayTimer() {

    if(minutes>9 && seconds<10) {

        displayTime.innerHTML = minutes + ":0" + seconds;

    } else if(minutes<10 && seconds>9) {

        displayTime.innerHTML = "0" + minutes + ":" + seconds;

    } else if(minutes>10 && seconds>10) {

        displayTime.innerHTML =  minutes + ":" +seconds;

    } else {

        displayTime.innerHTML = "0" + minutes + ":0" + seconds;

    }

}

