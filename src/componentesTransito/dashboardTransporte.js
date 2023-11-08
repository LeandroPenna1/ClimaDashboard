import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { dataTransporte } from "./dataTransporte";
import Mapa from "./Mapa";
import './transportestyle.css';
import L from 'leaflet';



function DashboardTransporte() {
  const [loading, setLoading] = useState(true);
  const [selectedLine, setSelectedLine] = useState("a José C. Paz");
  const [transporteData, setTransporteData] = useState(null);

  const fetchdata = (idRuta) => {
    const apitransporte = `https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?route_id=${idRuta}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`;
    
    
    setLoading(true);
    fetch(apitransporte)
      .then((resp) => resp.json())
      .then((data) => {
        setTransporteData(data);
        setLoading(false);
        console.log(apitransporte);
      })
      .catch((ex) => {
        console.error(ex);
      });
  } 

  useEffect(() => {
    fetchdata(conversion[selectedLine]);
    const interval = setInterval(() => {
      fetchdata(conversion[selectedLine]);
    }, 31000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetchdata(conversion[selectedLine]);
  }, [selectedLine]);

  const conversion = {
    "a José C. Paz": "39A",
    "a Stefani x Cruce": "39C",
    "a Derqui x Saavedra Lamas": "39C",
  }

  return (
    <>
      <div className="selector-container">
        <select className="selector" value={selectedLine} onChange={(e) => setSelectedLine(e.target.value)}>
          <option value="">Selecciona una opción</option>
            <option key={1} value={"a José C. Paz"}> 1 </option>
            <option key={2} value={"a Stefani x Cruce"}> 2 </option>
            <option key={3} value={"a Derqui x Saavedra Lamas"}> 3 </option>
        </select>
      </div>
      <Mapa transporteData={transporteData} />
    </>
  );
}

export default DashboardTransporte;