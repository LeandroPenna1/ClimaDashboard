import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import DashboardTransporte from "./dashboardTransporte";
import './transportestyle.css';
import L from 'leaflet';

function Mapa({ data, transporteData }) {
  let selectedLine = "39A";
  if (transporteData === null || transporteData === undefined) {
    console.log("transporteData:", transporteData);
    // Maneja el caso en el que transporteData aún no está disponible
    return <div>Cargando...</div>;
  }
  const position = [transporteData["latitude"], transporteData["longitude"]];
  const { latitude, longitude, route_short_name, trip_headsign, speed, agency_name, agency_id, route_id } = data;
  let indices = [];
  let idx = transporteData.findIndex((item) => item["agency_id"] === agency_id);
  while (idx !== -1) {
    indices.push(idx);
    idx = transporteData.findIndex((item) => item["agency_id"] === agency_id, idx + 1);
  }
  
  const customIcon = L.icon({
    iconUrl: "https://cdn.icon-icons.com/icons2/1863/PNG/512/directions-bus_119216.png",
    iconSize: [20, 25],
  });

  return (
    <div className="map-container">
      <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {transporteData
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
  )
}

export default Mapa;