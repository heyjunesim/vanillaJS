const greetingColors = [
  "#fffafa",
  "#ffe4e1",
  "#fff8dc",
  "#f0fff0",
  "#dda0dd",
  "#d3d3d3",
  "#fffacd",
];
const chosenColor =
  greetingColors[Math.floor(Math.random() * greetingColors.length)];

document.getElementById("greeting").style.color = chosenColor;

if (hours > 20 || hours < 05) {
  document.body.style.backgroundColor = "#1d5093";
  document.body.style.color = "white";
}
