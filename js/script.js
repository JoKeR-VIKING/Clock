function setTime()
{
    let currentTime = new Date();

    let seconds = currentTime.getSeconds();
    let secondDeg = ((seconds / 60) * 360);
    document.getElementsByClassName("second")[0].style.transform = `rotate(${secondDeg}deg)`;

    let minutes = currentTime.getMinutes();
    let minuteDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6);
    document.getElementsByClassName("minute")[0].style.transform = `rotate(${minuteDeg}deg)`;

    let hours = currentTime.getHours();
    let hourDeg = ((hours / 12) * 360) + ((minutes / 60) * 30);
    document.getElementsByClassName("hour")[0].style.transform = `rotate(${hourDeg}deg)`;

    document.getElementsByClassName("period")[0].textContent = currentTime.toLocaleTimeString().split(" ")[1];
}

setInterval(setTime, 1000);