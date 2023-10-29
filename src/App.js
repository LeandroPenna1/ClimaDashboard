import './App.css';
import { useState, useEffect } from 'react';
import React from 'react';
import Dashboard from './componentesClima/dashboardClima';
import DashboardTransporte from './componentesTransito/dashboardTransporte';
import weatherCode from './componentesClima/weatherCode.json';

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const climaURL = "https://api.open-meteo.com/v1/forecast?latitude=-32.9468&longitude=-60.6393&current=temperature_2m,relativehumidity_2m,precipitation,weathercode,surface_pressure,windspeed_10m&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=America/Rosario"
  const [dataT, setDataT] = useState(null)
  const [loadingT, setLoadingT] = useState(true)
  const transporteURL = "https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6"

  const getData = async () => {
    try {
      const response = await fetch(climaURL);
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
      <DashboardTransporte />
    </div>
  );
}

export default App;
