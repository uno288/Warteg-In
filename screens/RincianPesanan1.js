import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import RincianPesanan from "../components/RincianPesanan";

const RincianPesanan1 = () => {
  return (
    <View style={styles.rincianpesanan}>
      <RincianPesanan />
    </View>
  );
};

const styles = StyleSheet.create({
  rincianpesanan: {
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default RincianPesanan1;
