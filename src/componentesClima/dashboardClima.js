import React from 'react';
import { useState } from 'react';
import './style.css';
import weatherCode from './weatherCode.json';

function Dashboard({data}) {
  if (!data) {
    // Si los datos aún no se han cargado, puedes mostrar un mensaje de carga o simplemente no mostrar nada
    return <div>Cargando...</div>;
  }
  const weatherInfo = weatherCode[data?.current?.weathercode];
  const weatherName = weatherInfo?.name;
  const weatherImageSrc = weatherInfo?.img_src;

  //formateo para obtener la fecha y la hora por separado:
  const fecha = data?.current?.time;
  const fechaHoy = new Date(fecha);
  const horaHoy = fechaHoy.getHours();
  const minutosHoy = fechaHoy.getMinutes();
  const horaFormateada = `${horaHoy}:${minutosHoy}`;
  const opcionesDeFecha = { weekday: 'long' };
  const nombreDelDia = fechaHoy.toLocaleString('es-ES', opcionesDeFecha); // Esto usará el formato en español

  //formateo para tener solo la hora de salida del sol
  const fechaSalida = new Date(data?.daily?.sunrise[0]);
  const horaSalida = fechaSalida.getHours();
  const minutosSalida = fechaSalida.getMinutes();
  const salidaFormateada = `${horaSalida}:${minutosSalida}`;
  console.log(salidaFormateada)
  //formateo para tener solo la hora de puesta del sol
  const fechaPuesta = new Date(data?.daily?.sunset[0]);
  const horaPuesta = fechaPuesta.getHours();
  const minutosPuesta = fechaPuesta.getMinutes();
  const puestaFormateada = `${horaPuesta}:${minutosPuesta}`;
  console.log(puestaFormateada)

  return ( 
    <div className="contenedor">
      <div className="ahora">
        <div className="dia">{nombreDelDia} {fechaHoy.getDate()} </div>
        <div className="hora">{horaFormateada}</div>
      </div>
      <div className="temperatura">
        <h3>Temperatura Actual</h3>
        <h2></h2>
        <h2>{Math.floor(data?.current?.temperature_2m)}</h2>
        {weatherImageSrc && (
        <img className='icon' src={weatherImageSrc} alt={weatherName} />
        )}
        <h4>{weatherInfo?.name}</h4>

      </div>
      <div className="hoy">
        <h3 className="titulohoy">Temperaturas de Hoy</h3>
        <div className="hora1"></div>
        <div className="hora1"></div>
        <div className="hora2"></div>
        <div className="hora1"></div>
        <div className="hora1"></div>
        <div className="hora2"></div>
        <div className="hora2"></div>
        <div className="hora1"></div>
        <div className="hora1"></div>
      </div>
      <div className="transporte" id='trans'>
        <h4>MAPA E INFO TRANSPORTE</h4>
      </div>
      <div className="maxmin">
        <h3>Máximas y Mínimas</h3>
        <div className="min">Min
          <h3 className="grados">{Math.floor(data?.daily?.temperature_2m_min[0])}</h3>
        </div>
        <div className="max">Max
          <h3 className="grados">{Math.floor(data?.daily?.temperature_2m_max[0])}</h3>
        </div>
      </div>
      <div className="highlights">
        <h3 className="titulohoy">Highlights</h3>
        <div className="hl">Humedad: {Math.floor(data?.current?.relativehumidity_2m)}%</div>
        <div className="hl">Vientos: {Math.floor(data?.current?.windspeed_10m)}km/h</div>
        <div className="hl">Precipitaciones: {Math.floor(data?.current?.precipitation)}mm</div>
        <div className="hl">Presión: {Math.floor(data?.current?.surface_pressure)} hPa</div>
        <div className="hl">Salida del sol: {salidaFormateada}hs</div>
        <div className="hl">Puesta del sol: {puestaFormateada}hs</div>

      </div>
    </div> 
  );
}

export default Dashboard;