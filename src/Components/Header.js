import React from "react";
import weather_img from "../img/weather_img.png"
import "../Styles/HeaderStyle/Header.css"

const Header = () => {
  return (
    <div className="header_wrap">
      <img className="photo" src={weather_img} alt="/" sizes={5}/>
      <h1 className="header">Weather Monitor</h1>
      <p className="header_subtitle">
        Explore current weather...
      </p>
    </div>
  );
};

export default Header;