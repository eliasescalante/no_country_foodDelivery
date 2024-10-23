import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { IoLocationSharp } from "react-icons/io5";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";








const MapRestaurants = () => {
  const token =
    "pk.eyJ1IjoiZHV2YW5hIiwiYSI6ImNrbTZtcWV4NTAwa3gydXFmbGs3bG0wd3MifQ.bWbS5TJuMSdntDXb_7l4aQ";

  const restauranteGuardado = JSON.parse(
    localStorage.getItem("ubicacionUsuario")
  );
  //console.log(restauranteGuardado);

  const restaurantes = [{ ubicacion: restauranteGuardado.center }];

  useEffect(() => {
    mapboxgl.accessToken = token;

    // Inicializar el mapa
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: restauranteGuardado.center,
      zoom: 14,
    });

    // Agregar un marcador para la ubicación central
    const userMarker = new mapboxgl.Marker({ color: "blue" })
      .setLngLat(restauranteGuardado.center)
      .setPopup(new mapboxgl.Popup({ offset: 25 }).setText("Tu ubicación"))
      .addTo(map);

    // Añadir marcadores para los restaurantes
    restaurantes.forEach((restaurante) => {
      new mapboxgl.Marker()
        .setLngLat(restaurante.ubicacion)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setText(restaurante.nombre)
        )
        .addTo(map);
    });

    // Inicializar el Geocoder
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: "Buscar lugares", // Texto del buscador
      zoom: 14, // Nivel de zoom al buscar
      marker: false, // No añadir un marcador automáticamente
    });

    // Añadir el Geocoder al mapa
    map.addControl(geocoder);

    // Manejar el evento de selección de un resultado del geocoder
    geocoder.on("result", (ev) => {
      // Obtener las coordenadas del resultado
      const coords = ev.result.geometry.coordinates;

      // Centrar el mapa en las coordenadas seleccionadas
      map.flyTo({ center: coords });

      // Opcional: Añadir un marcador para la ubicación seleccionada
      new mapboxgl.Marker()
        .setLngLat(coords)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setText(ev.result.place_name)
        ) // Popup con el nombre del lugar
        .addTo(map);
    });

    // Limpiar el mapa al desmontar el componente
    return () => map.remove();
  }, []); // Ejecutar solo una vez al montar

  return (
    <div className="w-full h-full flex flex-col gap-2 ">
      <div className="flex text-xl font-boldLigth  items-center flex">
        <div className="flex text-textTerceary text-4xl justify-items-start -ml-2">
          <IoLocationSharp />
        </div>
        <div>{restauranteGuardado.place_name}</div>
      </div>
      <div className="w-full">
        <div
          id="map"
          className="w-full h-full rounded flex flex-col-reverse"
        ></div>
      </div>
    </div>
  );
};

export default MapRestaurants;
