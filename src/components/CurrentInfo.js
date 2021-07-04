import { React, useState } from "react";
import Moment from "react-moment";

const CurrentInfo = () => {
  return (
    <div className="container">
      <div className="current-info">
        <div className="data-container">
          <div className="time" id="time">
            <Moment format={"LT"} />
          </div>
          <div className="date" id="date">
            <Moment format={"ll"} />
          </div>
          <div className="others" id="current-weather-items">
            <div className="weather-items">
              <p>Humidity</p>
              <p id="humidity">72%</p>
            </div>
            <div className="weather-items">
              <p>Pressure</p>
              <p id="pressure">1008hPa</p>
            </div>
            <div className="weather-items">
              <p>Wind Speed&nbsp;&nbsp;</p>
              <p id="wind_speed">4.84m/s</p>
            </div>
            <div className="weather-items">
              <p>Sunset</p>
              <p id="sunset">19:01 pm</p>
            </div>
            <div className="weather-items">
              <p>Sunrise</p>
              <p id="sunrise">04:53 am</p>
            </div>
          </div>
        </div>
        <div className="place-container">
          <div className="time-zone" id="time-zone">
            Africa/Egyot
          </div>
          <div className="country" id="country">
            IN
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentInfo;
