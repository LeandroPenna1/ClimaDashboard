import React, { useState, useEffect } from 'react';
import Dashboard from './componentesClima/dashboardClima';
import DashboardTransporte from './componentesTransito/dashboardTransporte';

function App() {
  const [ciudad, setCiudad] = useState('Rosario');
  const [ciudadInfo, setCiudadInfo] = useState(null);

  const handleSearch = async () => {
    try {
      const geocodingURL = `https://geocoding-api.open-meteo.com/v1/search?name=${ciudad}&count=4&language=es&format=json`;
      const geocodingResponse = await fetch(geocodingURL);
      const geocodingData = await geocodingResponse.json();

      // Assuming the first result is selected, you might want to implement a selection UI
      const selectedCiudad = geocodingData.results[0];

      const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${selectedCiudad.latitude}&longitude=${selectedCiudad.longitude}&current=temperature_2m,relativehumidity_2m,precipitation,weathercode,surface_pressure,windspeed_10m&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=${selectedCiudad.timezone}`;

      const weatherResponse = await fetch(weatherURL);
      if (weatherResponse.ok) {
        const weatherData = await weatherResponse.json();
        setCiudadInfo(weatherData);
      } else {
        console.error('Error en la respuesta de la API del clima');
      }
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  return (
    <div className="App">
      <div className='selectCity'>
        <input
          type="text"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
          placeholder="Escriba una ciudad"
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      <Dashboard data={ciudadInfo}  ciudad={ciudad} />
      <DashboardTransporte />
    </div>
  );
}

export default App;