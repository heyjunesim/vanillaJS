const clock = document.querySelector("h2#clock");
const day = document.querySelector("h2#day");

const date = new Date();

const week = new Array(
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
);
const month = new Array(
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
);

const y = String(date.getFullYear());
const m = String(month[date.getMonth() + 1]);
const d = String(date.getDate());
const dy = String(week[date.getDay()]);

const hours = String(date.getHours()).padStart(2, "0");
const minutes = String(date.getMinutes()).padStart(2, "0");

function getDay(date) {
  day.innerText = `${dy} ${d} ${m}, ${y}`;
}

function getClock() {
  clock.innerText = `${hours}:${minutes}`;
}

getDay();
getClock();
setInterval(getClock, 1000);
