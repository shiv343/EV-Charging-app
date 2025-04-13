import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import GlobalApi from "../Utils/GlobalApi";

export default function PlaceItem({ place }) {
  const PLACE_PHOTO_BASE_URL = "https://places.googleapis.com/v1/";
  const photoUrl = place?.photos?.length
    ? `${PLACE_PHOTO_BASE_URL}${place.photos[0].name}/media?key=${GlobalApi.API_KEY}&maxHeightPx=800&maxWidthPx=1200`
    : null;

  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        width: Dimensions.get("screen").width * 0.9,
        borderRadius: 20,
        margin: 5,
      }}
    >
      <Image
        source={
          photoUrl
            ? { uri: photoUrl }
            : require("./../../../assets/images/login2.png")
        }
        style={{
          width: "100%",
          borderRadius: 10,
          height: 130,
        }}
      />
      <View style={{ padding: 15 }}>
        <Text
          style={{
            fontSize: 22,
            fontFamily: "Outfit-Bold",
          }}
        >
          {place.displayName?.text}
        </Text>
        <Text
          style={{
            color: Colors.GRAY,
            fontFamily: "Outfit-Medium",
            marginTop: 5,
          }}
        >
          {place?.shortFormattedAddress}
        </Text>
        <View style={{ marginTop: 5 }}>
          <Text style={{ fontFamily: "Outfit-Medium" }}>Connectors</Text>
          <Text
            style={{
              fontFamily: "Outfit-Medium",
              fontSize: 15,
              margin: 2,
              color: Colors.GREY,
            }}
          >
            {place?.evChargeOptions?.connectorCount ?? "No connector info"}
          </Text>
        </View>
      </View>
    </View>
  );
}
