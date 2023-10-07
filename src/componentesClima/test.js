const data = {
    "latitude": 52.52,
    "longitude": 13.419998,
    "generationtime_ms": 0.0629425048828125,
    "utc_offset_seconds": -10800,
    "timezone": "America/Rosario",
    "timezone_abbreviation": "-03",
    "elevation": 38.0,
    "current_weather_units": {
        "time": "iso8601",
        "temperature": "°C",
        "windspeed": "km/h",
        "winddirection": "°",
        "is_day": "",
        "weathercode": "wmo code"
    },
    "current_weather_interval_seconds": 900,
    "current_weather": {
        "time": "2023-10-04T19:15",
        "temperature": 13.0,
        "windspeed": 10.2,
        "winddirection": 219,
        "is_day": 0,
        "weathercode": 2
    },
    "hourly_units": {
        "time": "iso8601",
        "temperature_2m": "°C"
    },
    "hourly": {
        "time": [
            "2023-10-04T00:00",
            "2023-10-04T01:00",
            "2023-10-04T02:00",
            "2023-10-04T03:00",
            "2023-10-04T04:00",
            "2023-10-04T05:00",
            "2023-10-04T06:00",
            "2023-10-04T07:00",
            "2023-10-04T08:00",
            "2023-10-04T09:00",
            "2023-10-04T10:00",
            "2023-10-04T11:00",
            "2023-10-04T12:00",
            "2023-10-04T13:00",
            "2023-10-04T14:00",
            "2023-10-04T15:00",
            "2023-10-04T16:00",
            "2023-10-04T17:00",
            "2023-10-04T18:00",
            "2023-10-04T19:00",
            "2023-10-04T20:00",
            "2023-10-04T21:00",
            "2023-10-04T22:00",
            "2023-10-04T23:00"
        ],
        "temperature_2m": [
            12.5,
            12.3,
            12.4,
            12.5,
            13.0,
            14.1,
            15.2,
            15.8,
            16.6,
            16.9,
            16.7,
            16.9,
            16.5,
            16.0,
            15.1,
            14.7,
            14.0,
            13.6,
            13.9,
            13.2,
            12.5,
            11.9,
            11.5,
            11.5
        ]
    }
}

console.log(data["current_weather_units"]["windspeed"])