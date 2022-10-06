import React from "react";
import "../Styles/WeatherStyle/Weather.css"

const Weather = ({temp, city, country, humidity, desc, error}) => {
  return (
    <div className="weather_data">
      {city &&
        (
          <p className="weather_label">
            Location:
        
            <span className="weather_value">
              {" "}
              {city}, {country}
            </span>
          </p>
        )}

      {temp && (
        <p className="weather_label">
          Temperature:
          <span className="weather_value"> {(temp * 9) / 5 + 32} F</span>
        </p>
      )}

      {humidity && (
        <p className="weather_label">
          Humidity:
          <span className="weather_value"> {humidity}</span>
        </p>
      )}

      {desc && (
        <p className="weather_label">
          Description:
          <span className="weather_value"> {desc}</span>
        </p>
      )}

      {error && <p className="weather_error"> {error} </p>}
    </div>
  );
};

export default Weather;