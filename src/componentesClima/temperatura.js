import React from "react";
import weatherAPI from ""
function Temperatura() {
    const { current_weather, hourly } = weatherAPI;
    const { temperature } = current_weather;
        return (
            <div className="temperatura"> 
            <h2>{temperatura} C°</h2>
            </div>

        );    
}

export default Temperatura;