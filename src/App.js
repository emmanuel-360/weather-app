import './App.scss';
import React from 'react';
import WeatherView from './Components/WeatherView'
import WeatherContextProvider from './Context/WeatherContext';

function App() {
  return (
    <div className="container">
      <WeatherContextProvider>
        <WeatherView/>
      </WeatherContextProvider>
      
    </div>
  );
}

export default App;
