// Context/UserLocationContext.js
import React, { createContext, useState, useEffect } from "react";
import * as Location from "expo-location";

export const UserLocationContext = createContext();

export const UserLocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.warn("📛 Location permission denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords); // { latitude, longitude }
      console.log("📍 Location fetched:", currentLocation.coords);
    })();
  }, []);

  return (
    <UserLocationContext.Provider value={{ location, setLocation }}>
      {children}
    </UserLocationContext.Provider>
  );
};
