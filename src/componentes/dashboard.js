import React from 'react';
import './style.css';

function Dashboard() {
  return (
    <div className="contenedor">
      <div className="ahora">
        <div className="dia">Lunes</div>
        <div className="hora">10:43</div>
      </div>
      <div className="temperatura">
        <h3>Temperatura Actual</h3>
        <h2>20°</h2>
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
      <div className="transporte">
        <h4>MAPA TRANSPORTE</h4>
      </div>
      <div className="maxmin">
        <h3>Máximas y Mínimas</h3>
        <div className="min">Min
          <h3 className="grados">12</h3>
        </div>
        <div className="max">Max
          <h3 className="grados">27</h3>
        </div>
      </div>
      <div className="highlights">
        <h3 className="titulohoy">Highlights</h3>
        <div className="hl">Humedad</div>
        <div className="hl">Vientos</div>
        <div className="hl">Visibilidad</div>
        <div className="hl">Precipitaciones</div>
        <div className="hl">Radiación Solar</div>
        <div className="hl">Presión Atmosférica</div>
      </div>
    </div>
  );
}

export default Dashboard;