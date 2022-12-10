let time = document.querySelector('.time');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const setTime = document.querySelector('#set-time');
const inputTime = document.querySelector('.input-value');
const inputMins = document.querySelector('#input-min');
const cssT = document.querySelector('.time-controls');


let seconds = 0;
let interval  = null;

startBtn.addEventListener('click', ()=> {
    seconds = inputMins.value *60
    if (seconds == 0) {
        alert('Please set the timer')
    }else {
        start()
    }
});
stopBtn.addEventListener('click', stop);
setTime.addEventListener('click', swap)

function swap() {
    setTime.style.cssText = 'display:none;'
    inputTime.style.cssText = 'display:block;'
    
}

function timer() {
    if (seconds === 0) {
        stop()
        startBtn.style.cssText = 'display:block;'
        stopBtn.style.cssText = 'display:none;'
        alert('Timer complete');
        seconds = 0;
    }else{
        let hrs = Math.floor(seconds / 3600)
        let mins =Math.floor((seconds - (hrs * 3600)) / 60);
        let secnds =seconds % 60;
        
        secnds < 10 ? secnds = '0' + secnds : secnds = secnds;
        mins < 10 ? mins = '0' + mins : mins = mins;
        time.innerText = `${mins}:${secnds}`;
        seconds--;
    }
    
    
}

function start() {
    interval = setInterval(timer, 1000);
    setTime.style.cssText = 'display:block;'
    inputTime.style.cssText = 'display:none;'
    startBtn.style.cssText = 'display:none;'
    stopBtn.style.cssText = 'display:block;'
};

function stop() {
    clearInterval(interval);
    interval = null;
     time.innerText = '00:00';
     setTime.style.cssText = 'display:block;'
     startBtn.style.cssText = 'display:block;'
     stopBtn.style.cssText = 'display:none;'
     seconds = 0;
}

