import './App.css';
import { useState, useEffect } from 'react';
import React from 'react';
import Dashboard from './componentesClima/dashboardClima';
import weatherCode from './componentesClima/weatherCode.json';

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const URL = "https://api.open-meteo.com/v1/forecast?latitude=-32.9468&longitude=-60.6393&current=temperature_2m,relativehumidity_2m,precipitation,weathercode,surface_pressure,windspeed_10m&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=America/Rosario"

  const getData = async () => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setData(data); // Actualiza el estado data con los datos recibidos
        setLoading(false); // Cambia el estado de loading a false para indicar que los datos han sido cargados
        console.log(data);
        console.log(data.timezone);
        console.log(data.current.time);
      } else {
        console.error('Error en la respuesta de la API');
        setLoading(false); 
      }
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      setLoading(false); 
    }
  }; 
 
  useEffect(() => {
    getData();
  }, []);

  

  return (
    <div className="App">
      <div> 
      </div>
      <Dashboard data={data}/>
    </div>
  );
}

export default App;
