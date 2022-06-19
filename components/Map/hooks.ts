import { Coords } from "google-map-react";
import { useMemo } from "react";
import { useGeolocated } from "react-geolocated";

interface Geolocation {
  getCurrentLocation: () => void;
  currentLocation?: Coords;
}

export function useCurrentLocation(): Geolocation {
  const { getPosition, coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    watchPosition: true,
    suppressLocationOnMount: true,
  });

  const currentLocation = useMemo<Coords | undefined>(() => {
    if (coords) {
      return {
        lat: coords.latitude,
        lng: coords.longitude,
      };
    }
  }, [coords]);

  return {
    getCurrentLocation: getPosition,
    currentLocation,
  };
}
