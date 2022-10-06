import React, { useState } from "react";
import "../Styles/InputStyle/Input.css"

const Input = ({ fetchWeather }) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(e, city, country);
    setCity("");
    setCountry("");
  };
  return (
    <form onSubmit={handleSubmit} className="form" >
      <input
        className="input"
        type="text"
        name="city"
        placeholder="Enter city..."
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        className="input"
        type="text"
        name="country"
        placeholder="Enter country..."
        onChange={(e) => setCountry(e.target.value)}
      /><br/>
      <button className="button">Access Weather</button>
    </form>
  );
};

export default Input;