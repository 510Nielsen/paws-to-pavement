import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN; // we’ll add this key later

export default function Map() {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return;
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-122.3, 37.8], // SF fallback
      zoom: 13
    });
    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainer}
      className="w-full h-[60vh] rounded-xl shadow-lg border-4 border-bark"
    />
  );
}
