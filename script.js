
let hourHand = document.querySelector(".hour-hand");
let minuteHand = document.querySelector(".minute-hand");
let secondHand = document.querySelector(".second-hand");

function clock(){
let now = new Date();

let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();

let hourRotation = (hour % 12) * 30 + minute / 2;
let minuteRotation = minute * 6 + second * 0.1;
let secondRotation = second * 6;

hourHand.style.transform = `rotate(${hourRotation}deg)`;
minuteHand.style.transform=`rotate(${minuteRotation}deg)`;
secondHand.style.transform=`rotate(${secondRotation}deg)`;

}

clock();
setInterval(clock,1000);

