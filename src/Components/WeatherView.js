import React, { useContext } from "react";
import Header from "./Header";
import Input from "./Input";
import Weather from "./Weather";
import { WeatherContext } from "../Context/WeatherContext";
import "../Styles/WeatherStyle/Weather.css"


const WeatherView = () => {
  const {
    city,
    country,
    temp,
    error,
    humidity,
    desc,
    fetchWeather,
  } = useContext(WeatherContext);
  return (
    <div className="wrapper">
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-xs-5 title-container">
              <Header />
            </div>
            <div className="col-xs-7 form-container">
              {}
              <Input fetchWeather={fetchWeather} />
              {}
            
              <Weather
                temp={temp}
                city={city}
                country={country}
                humidity={humidity}
                desc={desc}
                error={error}
              />
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherView;