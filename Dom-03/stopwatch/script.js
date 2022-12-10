let time = document.querySelector('.time');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');

let seconds = 0;
let interval  = null;

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);


function timer() {
    seconds++;

    let hrs = Math.floor(seconds / 3600)
    let mins =Math.floor((seconds - (hrs * 3600)) / 60);
    let secnds =seconds % 60;

    secnds < 10 ? secnds = '0' + secnds : secnds = secnds;
    mins < 10 ? mins = '0' + mins : mins = mins;
    hrs < 10 ? hrs = '0' + hrs : hrs = hrs;

    time.innerText = `${hrs}:${mins}:${secnds}`;
}
// timer();

function start() {
    if (interval) {
        return
    }
    interval = setInterval(timer, 1000);
};

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    seconds= 0;
    time.innerText = '00:00:00';

}
