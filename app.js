// START WATCH 

var mints = document.getElementById("mints");
var sec = document.getElementById("sec");
var ms = document.getElementById("ms");
var playbutton = document.getElementById("playbtn");
var stopbutton = document.getElementById("stopbtn");
var resetbutton = document.getElementById("resetbtn");

var miliSec = 100;
var Seconds = 60;
var minutes = 60;
var interval;

function start() {
    interval = setInterval(startTime, 100);
}

function startTime() {
    miliSec--;
    ms.innerHTML = miliSec;
    playbutton.disabled=true;
    if (miliSec == 0) {
        Seconds--;
        sec.innerHTML = Seconds;
        miliSec = 100;
        
    }
    else if (Seconds == 0) {
        minutes--;
        mints.innerHTML = minutes;
        Seconds = 60;
    }
}
function stop() {
    clearInterval(interval);
    playbutton.disabled=false;
}
function resetTime() {
    stop();
    miliSec = 100;
    Seconds = 60;
    minutes = 60;
    mints.innerHTML = minutes;
    sec.innerHTML = Seconds;
    ms.innerHTML = miliSec;
}

