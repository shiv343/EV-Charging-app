import { View, Text, StyleSheet, Image } from "react-native";
import React, { useContext } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewStyle from "../Utils/MapViewStyle.json";
import { UserLocationContext } from "../../Context/UserLocationContext";
import carImg from "../../../assets/images/car-logo.png";

export default function AppMapView() {
  const { location, setLocation } = useContext(UserLocationContext);

  return (
    location?.latitude && (
      <View>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
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
            <Image source={carImg} style={{ width: 60, height: 80 }} />
          </Marker>
        </MapView>
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
});
