import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import DashboardTransporte from "./dashboardTransporte";
import './transportestyle.css';
import L from 'leaflet';

function Mapa({ data, selectedLine }) {
  console.log("Datos transporteData:", data);
  const { latitude, longitude, route_short_name, trip_headsign, speed, agency_name, agency_id, route_id } = data;
  

  if (!data || data.length === 0) {
    // Maneja el caso en el que transporteData aún no está disponible o es vacío
    return <div>Cargando...</div>;
  }
  const firstData = data[0];
  if (!firstData || !firstData.latitude || !firstData.longitude) {
    // Maneja el caso en el que la primera entrada de datos no tiene coordenadas definidas
    return <div>Coordenadas no disponibles</div>;
  }

  const customIcon = L.icon({
    iconUrl: "https://cdn.icon-icons.com/icons2/1863/PNG/512/directions-bus_119216.png",
    iconSize: [20, 25],
  });

  const position = [firstData.latitude, firstData.longitude];
  return (
    <div className="map-container">
      <MapContainer className="" center={position} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data && data.map((bondi) => {
  console.log("Filtrando por línea:", bondi["route_short_name"], "Seleccionada:", selectedLine);
  return (
    <Marker position={[bondi.latitude, bondi.longitude]} key={bondi.id} icon={customIcon}>
      <Popup>
        Línea {bondi["route_short_name"]}
      </Popup>
    </Marker>
  );
})}
      </MapContainer>
    </div>
  )
}

export default Mapa;