import React, { useState, useEffect } from 'react';
import { TbReload } from "react-icons/tb";

const Ubicacion = () => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const token = "pk.eyJ1IjoiZHV2YW5hIiwiYSI6ImNrbTZtcWV4NTAwa3gydXFmbGs3bG0wd3MifQ.bWbS5TJuMSdntDXb_7l4aQ"; // Reemplaza con tu token de Mapbox

  // Función para obtener la geolocalización
  const calcularMiUbicacion = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      console.error("La geolocalización no es compatible con este navegador.");
    }
  };

  const successCallback = (res) => {
    const latitude = res.coords.latitude;
    const longitude = res.coords.longitude;
    setLat(latitude);
    setLong(longitude);
  };

  const errorCallback = (error) => {
    console.error("Error obteniendo la geolocalización:", error);
  };

  // Llamada a la API de Mapbox cuando se tiene latitud y longitud
  useEffect(() => {
    const fetchLocationData = async () => {
      if (lat && long) {
        try {
          const response = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?access_token=${token}`
          );
          const data = await response.json();
          console.log(data)
          setLocationData(data.features[0]); // Guarda la primera ubicación encontrada
          
          localStorage.setItem('ubicacionUsuario',JSON.stringify(data.features[2]) )
        } catch (error) {
          console.error("Error fetching location data:", error);
        }
      }
    };

    fetchLocationData();
  }, [lat, long, token]); // Se ejecuta cuando lat o long cambian

  // Renderizado del componente
  return (
    <div className='flex'>
      {locationData ? (
        <div>
          <p>{locationData.place_name}</p>
        </div>
      ) : (
        <div className='flex h-full items-center'>

            <button onClick={calcularMiUbicacion}>
                Select para obtener ubicacion
            </button>
        
        </div>
        
      )}
    </div>
  );
};

export default Ubicacion