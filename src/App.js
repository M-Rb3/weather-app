import React, { useEffect } from "react";
// Styles
import "./styles/app.scss";
// Components
import FutureForecast from "./components/FutureForecase";
import CurrentInfo from "./components/CurrentInfo";
function App() {
  useEffect(() => {
    fetch("https://extreme-ip-lookup.com/json/")
      .then((res) => res.json())
      .then((response) => {
        console.log("Country is : ", response.country);
        fetch(
          `https://pixabay.com/api/?key=22303070-d8c568de4a867c9b7b22cdf37&q=${
            response.country
          }+tourist&min-height=${1280}&min-width=${1920}&image_type=photo&pretty=true`
        )
          .then((res) => res.json())
          .then((result) => {
            console.log(result.hits[4].largeImageURL);
            document.body.style.background = `url(${result.hits[3].largeImageURL})`;
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundSize = "cover";
          });
      })
      .catch((data, status) => {
        console.log("Request failed:", data);
      });
  }, []);
  return (
    <div className="App">
      <CurrentInfo />
      <FutureForecast />
    </div>
  );
}

export default App;
