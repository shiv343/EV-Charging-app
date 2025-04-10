import { View, Text, Image } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Header() {
  const { user } = useUser();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Image
        source={{ uri: user?.imageUrl }}
        style={{ width: 45, height: 45, borderRadius: 99, marginTop: 'auto' }}
      />
      <Image
        source={require("./../../../assets/images/logo2.png")}
        style={{
          width: 250,
          height: 50,
          objectFit: "contain",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 5,
        }}
      ></Image>
      <FontAwesome name="filter" size={35} color="black" />
    </View>
  );
}
