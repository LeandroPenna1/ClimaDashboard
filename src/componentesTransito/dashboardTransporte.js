import React, { useEffect, useState } from "react";
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import { dataTransporte } from "./dataTransporte";
import './transportestyle.css';
import L from 'leaflet';

function DashboardTransporte() {
  const [selectedLine, setSelectedLine] = useState("39A");
  const customIcon = L.icon({
    iconUrl: "https://cdn.icon-icons.com/icons2/1863/PNG/512/directions-bus_119216.png",
    iconSize: [20, 25], // Tamaño del icono personalizado
  });
  return (
    <>
      <div className="selector-container">
        <select className="selector" value={selectedLine} onChange={(e) => setSelectedLine(e.target.value)}>
          <option value="39A">39A</option>
          <option value="39B">39B</option>
          <option value="39C">39C</option>
        </select>
      </div>
      <div className="map-container">
        <MapContainer center={[-34.6102, -58.3692856]} zoom={12} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {dataTransporte
          .filter((bondi) => bondi["route_short_name"] === selectedLine)
          .map((bondi, index) => (
              <Marker position={[bondi["latitude"], bondi["longitude"]]} key={index} icon={customIcon}>
                <Popup>
                  Línea {bondi["route_short_name"]}
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>
    </>
  );
}

export default DashboardTransporte;

/* 
https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?route_id=${routeID}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6 */