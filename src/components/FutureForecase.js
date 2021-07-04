import { React } from "react";

const FutureForecast = () => {
  return (
    <div className="future-forecast">
      <div className="today" id="today-temp">
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="weather-icon"
          className="weather-icon"
        />
        <div className="other">
          <div className="day">Monday</div>
          <div className="temp">Night - 25.6&#176; C</div>
          <div className="temp">Day - 35&#176; C</div>
        </div>
      </div>
      <div className="weather-forecast" id="weather-forecast">
        <div className="weather-forecast-item">
          <div className="day">Tue</div>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="weather-icon"
            className="weather-icon"
          />
          <div className="temp">Night - 25.6&#176; C</div>
          <div className="temp">Day - 35&#176; C</div>
        </div>
        <div className="weather-forecast-item">
          <div className="day">Wed</div>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="weather-icon"
            className="weather-icon"
          />
          <div className="temp">Night - 25.6&#176; C</div>
          <div className="temp">Day - 35&#176; C</div>
        </div>
        <div className="weather-forecast-item">
          <div className="day">Thur</div>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="weather-icon"
            className="weather-icon"
          />
          <div className="temp">Night - 25.6&#176; C</div>
          <div className="temp">Day - 35&#176; C</div>
        </div>
        <div className="weather-forecast-item">
          <div className="day">Fri</div>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="weather-icon"
            className="weather-icon"
          />
          <div className="temp">Night - 25.6&#176; C</div>
          <div className="temp">Day - 35&#176; C</div>
        </div>
        <div className="weather-forecast-item">
          <div className="day">Sat</div>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="weather-icon"
            className="weather-icon"
          />
          <div className="temp">Night - 25.6&#176; C</div>
          <div className="temp">Day - 35&#176; C</div>
        </div>
      </div>
    </div>
  );
};

export default FutureForecast;
