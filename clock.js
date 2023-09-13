// function clock() {
//     const now = new Date();
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');

//     const timeString = `${hours}:${minutes}:${seconds}`;
//     document.getElementById('time').textContent = timeString;
// }
// clock();
// setInterval(clock, 1000);

function updateClock() {
    const now = new Date();
    const hour = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourDeg = (360 / 12) * hour + (360 / 12) * (minute / 60);
    const minuteDeg = (360 / 60) * minute + (360 / 60) * (second / 60);
    const secondDeg = (360 / 60) * second;

    document.getElementById('hourHand').style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById('minuteHand').style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById('secondHand').style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();