import React, { useEffect, useState } from "react";
import Mapa from "./Mapa";
import './transportestyle.css';
import L from 'leaflet';

function DashboardTransporte() {
  const [loading, setLoading] = useState(true);
  const [selectedLine, setSelectedLine] = useState("a José C. Paz");
  const [transporteData, setTransporteData] = useState([]);
  const fetchdata = (idRuta) => {
    const apitransporte = `https://datosabiertos-transporte-apis.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?route_id=${idRuta}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`;
    if (loading) {
      console.log("Cargando...");
    }
   /*  if (transporteData.length === 0) {
      console.log("No hay datos disponibles");
    } */

    setLoading(true);
    fetch(apitransporte)
      .then((resp) => resp.json())
      .then((data) => {
        setTransporteData(data);
        console.log("Datos de la API:", data);
      },)
      .catch((ex) => {
        console.error(ex);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchdata(conversion[selectedLine]);
    const interval = setInterval(() => {
      fetchdata(conversion[selectedLine]);
    }, 31000);
    return () => clearInterval(interval);
  }, [selectedLine]);

  useEffect(() => {
    fetchdata(conversion[selectedLine]);
  }, [selectedLine]);
  const conversion = {
    "a José C. Paz": "1357",
    "a Stefani x Cruce": "1358",
    "a Derqui x Saavedra Lamas": "1354",
    "a Est. Claypole": "1812",
    "a Rincon de Milberg": "1816",
  }

  return (
    <>
      <div className="selector-container">
        <select className="selector" value={selectedLine} onChange={(e) => setSelectedLine(e.target.value)}>
          <option value="">Selecciona una opción</option>
          <option key={1} value={"a José C. Paz"}> 39A </option>
          <option key={2} value={"a Stefani x Cruce"}> 39B </option>
          <option key={3} value={"a Derqui x Saavedra Lamas"}> 39C </option>
          <option key={3} value={"a Est. Claypole"}> 60C </option>
          <option key={3} value={"a Rincon de Milberg"}> 60E </option>
        </select>
      </div>
      <Mapa data={transporteData} selectedLine={selectedLine} />
    </>
  );
}

export default DashboardTransporte;