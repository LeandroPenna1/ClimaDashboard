import React, { useEffect, useState } from "react";
import './style.css';
import weatherCode from './weatherCode.json';
import App from "../App";

function Dashboard({ data, ciudad }) {
  if (!data) {
    // En caso que los datos no hayan sido cargados,se muestra un mensaje de carga
    return <div id="Cargando">Para comenzar, ingresa una ciudad:</div>;
  }
  const weatherInfo = weatherCode[data?.current?.weathercode];
  const weatherName = weatherInfo?.name;
  const weatherImageSrc = weatherInfo?.img_src;

  //formateo para obtener la fecha y la hora por separado:
  const fecha = data?.current?.time;
  const fechaHoy = new Date(fecha);
  const horaHoy = fechaHoy.getHours();
  const minutosHoy = fechaHoy.getMinutes();
  const opcionesMeses = { month: 'long' };
  const nombreDelMes = fecha.toLocaleString('es-ES', opcionesMeses);
  const horaFormateada = `${horaHoy}:${minutosHoy}`;
  const opcionesDeFecha = { weekday: 'long' };
  const nombreDelDia = fechaHoy.toLocaleString('es-ES', opcionesDeFecha); // Esto usará el formato en español

  //formateo para tener solo la hora de salida del sol
  const fechaSalida = new Date(data?.daily?.sunrise[0]);
  const horaSalida = fechaSalida.getHours();
  const minutosSalida = fechaSalida.getMinutes();
  const salidaFormateada = `${horaSalida}:${minutosSalida}`;
  //formateo para tener solo la hora de puesta del sol
  const fechaPuesta = new Date(data?.daily?.sunset[0]);
  const horaPuesta = fechaPuesta.getHours();
  const minutosPuesta = fechaPuesta.getMinutes();
  const puestaFormateada = `${horaPuesta}:${minutosPuesta}`;
  //Se obtiene las temperaturas del día
  const temperaturasDelDia = (data?.hourly?.temperature_2m.slice(0, 24));
  return (
    <div className="contenedor">
      <div className="ahora">
        <div className="dia">{nombreDelDia} {fechaHoy.getDate()}  </div>
        <div className="hora">{horaFormateada}</div>
      </div>
      <div className="temperatura">
        <h3>Temperatura Actual</h3>
        <h4 className='nombreCiudad'>{ciudad}</h4>
        <h2 className='tempActual'>{Math.floor(data?.current?.temperature_2m)}°</h2>
        {weatherImageSrc && (
          <img className='icon' src={weatherImageSrc} alt={weatherName} />
        )}
        <h4 className='estadoTiempo'>{weatherInfo?.name}</h4>

      </div>
      <div className="hoy">
        <h3 className="titulohoy">Temperaturas de hoy: {nombreDelDia} {fechaHoy.getDate()}</h3>
        <div className="hora1">{temperaturasDelDia[0]}</div>
        <div className="hora1">{temperaturasDelDia[2]}</div>
        <div className="hora1">{temperaturasDelDia[4]}</div>
        <div className="hora1">{temperaturasDelDia[6]}</div>
        <div className="hora1">{temperaturasDelDia[8]}</div>
        <div className="hora2">{temperaturasDelDia[10]}</div>
        <div className="hora1">{temperaturasDelDia[12]}</div>
        <div className="hora1">{temperaturasDelDia[14]}</div>
        <div className="hora2">{temperaturasDelDia[16]}</div>
        <div className="hora2">{temperaturasDelDia[18]}</div>
        <div className="hora1">{temperaturasDelDia[20]}</div>
        <div className="hora1">{temperaturasDelDia[22]}</div>
      </div>
      <div className="transporte" id='trans'>
        <h4>No se encontró información de la línea elegida. <br></br> Por favor, ingresa otra.</h4>
      </div>
      <div className="maxmin">
        <h3>Máximas y Mínimas</h3>
        <div className="min"><img className='iconMM' src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer-colder.svg'></img>
          <h3 className="grados">{Math.floor(data?.daily?.temperature_2m_min[0])}°</h3>
        </div>
        <div className="max"><img className='iconMM' src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer-warmer.svg'></img>
          <h3 className="grados">{Math.floor(data?.daily?.temperature_2m_max[0])}°</h3>
        </div>
      </div>
      <div className="highlights">
        <h3 className="titulohoy">Highlights</h3>
        <div className="hl"><img className='iconEC' src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/humidity.svg'></img><strong>Humedad: {Math.floor(data?.current?.relativehumidity_2m)}%</strong></div>
        <div className="hl"><img className='iconEC' src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/umbrella-wind-alt.svg'></img><strong>Vientos: {Math.floor(data?.current?.windspeed_10m)}km/h</strong></div>
        <div className="hl"><img className='iconEC' src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/lightning-bolt.svg'></img><strong>Precipitaciones: {Math.floor(data?.current?.precipitation)}mm</strong></div>
        <div className="hl"><img className='iconEC' src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/pressure-high.svg'></img><strong>Presión: {Math.floor(data?.current?.surface_pressure)} hPa</strong></div>
        <div className="hl"><img className='iconEC' src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunrise.svg'></img><strong>Salida del sol: {salidaFormateada}hs</strong></div>
        <div className="hl"><img className='iconEC' src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunset.svg'></img><strong>Puesta del sol: {puestaFormateada}hs</strong></div>

      </div>
    </div>
  );
}

export default Dashboard;