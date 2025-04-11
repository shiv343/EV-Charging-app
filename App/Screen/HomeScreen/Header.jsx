import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Header() {
  const { user } = useUser();

  return (
    <View style={styles.header}>
      <Image
        source={{ uri: user?.imageUrl }}
        style={styles.avatar}
      />

      <View style={styles.logoWrapper}>
        <Image
          source={require("../../../assets/images/logo2.png")}
          style={styles.logo}
        />
      </View>

      <FontAwesome name="filter" size={26} color="#333" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: "#eee",
  },
  logoWrapper: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 160,
    height: 40,
    resizeMode: "contain",
  },
});

