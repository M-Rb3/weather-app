const api_key = "994462fe818ec2383a1f5e5da2a2455b";
getWeatherdata();
function getWeatherdata() {
  navigator.geolocation.getCurrentPosition((success) => {
    // console.log(success);
    let { latitude, longitude } = success.coords;
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${api_key}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        showData(data);
      });
  });
}
function showData(data) {
  const humidityEl = document.getElementById("humidity");
  const pressureEl = document.getElementById("pressure");
  const windEl = document.getElementById("wind_speed");
  const sunsetEl = document.getElementById("sunset");
  const sunriseEl = document.getElementById("sunrise");
  // console.log(humidityEl);
  const { humidity, pressure, sunrise, sunset, wind_speed } = data.current;
  const timezone = document.getElementById("time-zone");
  const countryEl = document.getElementById("country");
  timezone.innerHTML = data.timezone;
  countryEl.innerHTML = data.lat + "N " + data.lon + "E";

  humidityEl.textContent = humidity + "%";
  pressureEl.textContent = pressure + "hPa";
  windEl.textContent = wind_speed + "m/s";
  sunriseEl.textContent = window.moment(sunrise * 1000).format("HH:mm a");
  sunsetEl.textContent = window.moment(sunset * 1000).format("HH:mm a");

  let otherDayForcast = "";
  data.daily.forEach((day, idx) => {
    if (idx === 0) {
      const currentTempEl = document.getElementById("today-temp");
      currentTempEl.innerHTML = `
            <img src="http://openweathermap.org/img/wn//${
              day.weather[0].icon
            }@4x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${window
                  .moment(day.dt * 1000)
                  .format("dddd")}</div>
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
            
            `;
    } else {
      otherDayForcast += `
            <div class="weather-forecast-item">
                <div class="day">${window
                  .moment(day.dt * 1000)
                  .format("ddd")}</div>
                <img src="http://openweathermap.org/img/wn/${
                  day.weather[0].icon
                }@2x.png" alt="weather icon" class="w-icon">
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
            
            `;
    }
  });
  const weatherForecastEl = document.getElementById("weather-forecast");
  weatherForecastEl.innerHTML = otherDayForcast;
}

function getElementText(response, elementName) {
  return response.getElementsByTagName(elementName)[0].innerHTML;
}
