import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const DetailMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.detailmenu, styles.iconLayout]}>
      <View style={[styles.background, styles.backgroundPosition]} />
      <Text style={[styles.rp0, styles.rp0FlexBox]}>Rp. 0</Text>
      <Pressable
        style={styles.btnTambah}
        onPress={() => navigation.navigate("RincianPesanan")}
      >
        <Text style={[styles.tambahKePesanan, styles.telurDadarTypo]}>
          Tambah ke pesanan
        </Text>
      </Pressable>
      <Text style={[styles.loremIpsumDolor, styles.text2Typo]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, senectus
        in faucibus fringilla magna quis id cursus est. Nibh amet sed integer
        pretium, imperdiet. Pretium et pharetra quis condimentum sit feugiat.
        Mauris elementum ipsum praesent eget in.
      </Text>
      <Text style={[styles.telurDadar, styles.telurDadarTypo]}>
        Telur Dadar
      </Text>
      <View style={styles.btnTambahkurang}>
        <View style={[styles.tempatButton, styles.tempatLayout]} />
        <View style={[styles.tempatButton1, styles.tempatLayout]} />
        <Text style={[styles.text, styles.textTypo]}>+</Text>
        <Text style={[styles.text1, styles.textTypo]}>-</Text>
        <Text style={[styles.text2, styles.text2Typo]}>0</Text>
      </View>
      <Image
        style={[styles.photoMakananIcon, styles.backgroundPosition]}
        contentFit="cover"
        source={require("../assets/photo-makanan.png")}
      />
      <Pressable
        style={styles.btnKembali}
        onPress={() => navigation.navigate("MenuUtama")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  backgroundPosition: {
    width: 390,
    top: 0,
    left: 0,
    position: "absolute",
  },
  rp0FlexBox: {
    textAlign: "left",
    left: 24,
  },
  telurDadarTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
  },
  text2Typo: {
    fontSize: FontSize.size_xs,
    color: Color.black,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  tempatLayout: {
    width: 30,
    backgroundColor: Color.goldenrod,
    borderRadius: Border.br_3xs,
    height: 24,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    top: 1,
    textAlign: "center",
    fontSize: FontSize.size_lg,
    color: Color.black,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  background: {
    backgroundColor: Color.linen,
    height: 800,
  },
  rp0: {
    top: 648,
    width: 207,
    color: Color.black,
    fontSize: FontSize.size_5xl,
    position: "absolute",
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    left: 24,
  },
  tambahKePesanan: {
    color: Color.white,
    textAlign: "center",
    fontSize: FontSize.size_lg,
    fontWeight: "700",
  },
  btnTambah: {
    top: 694,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.steelblue,
    width: 317,
    height: 60,
    paddingHorizontal: 0,
    paddingVertical: 19,
    alignItems: "center",
    left: 36,
    position: "absolute",
  },
  loremIpsumDolor: {
    top: 541,
    width: 314,
    height: 80,
    textAlign: "left",
    left: 24,
    fontSize: FontSize.size_xs,
  },
  telurDadar: {
    top: 489,
    left: 39,
    textAlign: "center",
    color: Color.black,
    fontSize: FontSize.size_5xl,
    position: "absolute",
    fontWeight: "700",
  },
  tempatButton: {
    left: 0,
    width: 30,
    backgroundColor: Color.goldenrod,
    borderRadius: Border.br_3xs,
  },
  tempatButton1: {
    left: 60,
  },
  text: {
    left: 70,
  },
  text1: {
    left: 12,
  },
  text2: {
    top: 7,
    width: 19,
    textAlign: "center",
    left: 36,
  },
  btnTambahkurang: {
    top: 491,
    left: 265,
    width: 90,
    height: 24,
    position: "absolute",
  },
  photoMakananIcon: {
    height: 457,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  btnKembali: {
    left: "7.47%",
    top: "8.37%",
    right: "87.2%",
    bottom: "89.16%",
    width: "5.33%",
    height: "2.46%",
    position: "absolute",
  },
  detailmenu: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
  },
});

export default DetailMenu;
