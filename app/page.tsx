"use client";
import { useEffect, useState } from "react";

const SenderPage: React.FC = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [speed, setSpeed] = useState<number | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        handlePositionChange,
        handlePositionError
      );

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    } else {
      console.log("Geolocation is not supported");
    }
  }, []);

  const handlePositionChange = (position: GeolocationPosition) => {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });

    setSpeed(position.coords.speed);

  };

  const handlePositionError = (error: GeolocationPositionError) => {
    console.log("Error getting location:", error);
  };

  return (
    <div>
      <h1>Sender App</h1>
      {location && (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <p>Speed: {speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default SenderPage;
