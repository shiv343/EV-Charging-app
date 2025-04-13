import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useContext, useRef } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewStyle from "../Utils/MapViewStyle.json";
import { UserLocationContext } from "../../Context/UserLocationContext";
import carImg from "./../../../assets/images/car-logo.png"

export default function AppMapView() {
  const { location, setLocation } = useContext(UserLocationContext);
  const mapRef = useRef(null); // For controlling map camera

  const handleRecenter = () => {
    if (mapRef.current && location) {
      mapRef.current.animateToRegion({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0421,
      });
    }
  };

  return (
    location?.latitude && (
      <View>
        <MapView
         ref={mapRef}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true} //hide default blue dot if needed
          showsMyLocationButton={false}
          customMapStyle={MapViewStyle}
          region={{
            latitude: location?.latitude,
            longitude: location?.longitude,
            latitudeDelta: 0.0422,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              longitude: location?.longitude,
              latitude: location?.latitude,
            }}
          >
           <Image source={carImg} style={styles.carIcon} />
          </Marker>
        </MapView>
        {/* Custom Location Button on Left */}
        <TouchableOpacity
          style={styles.locationButton}
          onPress={handleRecenter}
        >
          <Text style={styles.buttonText}>📍</Text>
        </TouchableOpacity>
      </View>
    )
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  carIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  locationButton: {
    position: "absolute",
    right:30,
    bottom: 170,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 20,
  },
  carIcon: {
  width: 40,
  height: 40,
  resizeMode: "contain",
},
});
