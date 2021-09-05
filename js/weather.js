const API_KEY = "a8da5c720b71dea4d536ae3809eda1f1";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather span");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}'C`;
      if (data.weather[0].main === "Clouds") {
        document.getElementById("weather-icon").src =
          "https://image.flaticon.com/icons/png/512/1163/1163624.png";
      } else if (data.weather[0].main === "Rain") {
        document.getElementById("weather-icon").src =
          "https://image.flaticon.com/icons/png/512/1163/1163626.png";
      } else if (data.weather[0].main === "Haze") {
        document.getElementById("weather-icon").src =
          "https://image.flaticon.com/icons/png/512/1163/1163673.png";
      } else if (data.weather[0].main === "Snow") {
        document.getElementById("weather-icon").src =
          "https://image.flaticon.com/icons/png/512/1163/1163635.png";
      } else {
        if (hours > 20 || hours < 05) {
          document.getElementById("weather-icon").src =
            "https://image.flaticon.com/icons/png/512/1163/1163645.png";
        } else {
          document.getElementById("weather-icon").src =
            "https://image.flaticon.com/icons/png/512/1163/1163662.png";
        }
      }
      const weatherCast = document.querySelector(".main-part:first-child span");
      weatherCast.innerText = `In ${data.name},
      it's currently ${data.main.temp}'C.
      The high will be ${data.main.temp_max}'C
      and the low will be ${data.main.temp_min}'C.
      Have a great day!`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

if (hours > 20 || hours < 05) {
  document.getElementById("weather-icon").src =
    "https://image.flaticon.com/icons/png/512/1163/1163645.png";
}
