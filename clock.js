'use strict'


const clock = () => {
    const now = new Date();
    const timeElements = [
        now.getHours(),
        now.getMinutes(),
        now.getSeconds()
    ] 
    const timeDisplay = timeElements
        .map(t => `${t}`.padStart(2,'0'))
        .join(':');
    const zoneAffichage = document.querySelector(".clock");
    zoneAffichage.innerHTML = timeDisplay;
    setTimeout(clock, 1000);
}
document.addEventListener("DOMContentLoaded", clock);