import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import restoran from '../data/listrestoran.js';

const PilihResto = () => {
  const navigation = useNavigation();
  
  return (
    <View style={[styles.pilihresto, styles.iconLayout]}>
        <Pressable
          style={[styles.btnRestoran1, styles.btnFlexBox]}
          onPress={() => {
            const selectedResto = restoran.find((item) => item.id === 1);
            navigation.navigate("KonfirmasiResto", { resto: selectedResto });
          }}
        >
        <Image
          style={[styles.restoranIcon, styles.restoranIconLayout]}
          contentFit="cover"
          source={require("../assets/restoran.png")}
        />
        <Text style={[styles.mamoka, styles.mamokaTypo]}>Warteg Mamoka</Text>
      </Pressable>
        <Pressable
          style={[styles.btnRestoran2, styles.btnFlexBox]}
          onPress={() => {
            const selectedResto = restoran.find((item) => item.id === 2);
            navigation.navigate("KonfirmasiResto", { resto: selectedResto });
          }}
        >
        <Image
          style={[styles.restoranIcon, styles.restoranIconLayout]}
          contentFit="cover"
          source={require("../assets/restoran1.png")}
        />
        <Text style={[styles.mamoka, styles.mamokaTypo]}>Warteg Mekar Jaya</Text>
      </Pressable>
        <Pressable
          style={[styles.btnRestoran3, styles.btnFlexBox]}
          onPress={() => {
            const selectedResto = restoran.find((item) => item.id === 3);
            navigation.navigate("KonfirmasiResto", { resto: selectedResto });
          }}
        >
        <Image
          style={[styles.restoranIcon, styles.restoranIconLayout]}
          contentFit="cover"
          source={require("../assets/restoran2.png")}
        />
        <Text style={[styles.mamoka, styles.mamokaTypo]}> Warteg Kharisma</Text>
      </Pressable>
      <Text style={[styles.restoran, styles.restoranTypo]}>Restoran</Text>
      <Image
        style={styles.navigasiBannerIcon}
        contentFit="cover"
        source={require("../assets/navigasi-banner.png")}
      />
      <Image
        style={styles.bannerPromosiIcon}
        contentFit="cover"
        source={require("../assets/banner-promosi.png")}
      />
      <View style={styles.tabPencaharian}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
        <Text style={[styles.lagiMauMakan, styles.warteginClr]}>
          Lagi mau makan apa nih?
        </Text>
      </View>
      <Pressable
        style={styles.btnInformasimakanan}
        onPress={() => navigation.navigate("RincianPesanan")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/btn-informasimakanan.png")}
        />
      </Pressable>
      <Text style={[styles.wartegin, styles.warteginClr]}>WartegIn</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  btnFlexBox: {
    justifyContent: "flex-end",
    width: 329,
    position: "absolute",
  },
  restoranIconLayout: {
    height: 87,
    borderRadius: Border.br_3xs,
  },
  mamokaTypo: {
    height: 16,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    width: 329,
  },
  mekarJayaFlexBox: {
    alignItems: "center",
    width: 330,
  },
  restoranTypo: {
    color: Color.black,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
  },
  warteginTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  warteginClr: {
    color: Color.dimgray,
    position: "absolute",
  },
  restoranIcon: {
    width: 337,
  },
  mamoka: {
    marginTop: 6,
  },
  btnRestoran1: {
    top: 521,
    height: 102,
    left: 32,
  },
  restoranIcon1: {
    width: 338,
  },
  mekarJaya: {
    display: "flex",
    justifyContent: "center",
    height: 17,
    marginTop: 8,
    textAlign: "center",
    color: Color.black,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
  },
  btnRestoran2: {
    top: 396,
    left: 31,
    height: 104,
    position: "absolute",
  },
  kharismaBahari: {
    marginTop: 7,
  },
  btnRestoran3: {
    top: 645,
    left: 30,
    height: 103,
  },
  restoran: {
    top: 367,
    left: 24,
    textAlign: "center",
    position: "absolute",
  },
  navigasiBannerIcon: {
    top: 339,
    width: 95,
    height: 15,
    left: 32,
    position: "absolute",
  },
  bannerPromosiIcon: {
    top: 181,
    left: 28,
    width: 335,
    height: 158,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  photoByLily: {
    top: 314,
    left: 34,
    fontSize: FontSize.size_3xs,
    color: "#efefef",
    display: "none",
    textAlign: "center",
    position: "absolute",
  },
  vectorIcon: {
    height: "40.39%",
    width: "4.18%",
    top: "25.79%",
    right: "91.28%",
    bottom: "33.83%",
    left: "4.53%",
  },
  vectorIcon1: {
    height: "55.42%",
    width: "5.74%",
    top: "15.78%",
    right: "90.12%",
    bottom: "28.8%",
    left: "4.14%",
  },
  lagiMauMakan: {
    top: 6,
    left: 36,
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    lineHeight: 20,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    color: Color.dimgray,
  },
  tabPencaharian: {
    top: 125,
    left: 25,
    borderRadius: Border.br_21xl,
    width: 325,
    height: 32,
    position: "absolute",
    backgroundColor: Color.white,
  },
  icon: {
    height: "100%",
  },
  btnInformasimakanan: {
    left: 331,
    top: 60,
    width: 30,
    height: 30,
    position: "absolute",
  },
  wartegin: {
    top: 68,
    left: 23,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    width: 96,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  pilihresto: {
    flex: 1,
    height: 800,
    backgroundColor: Color.white,
  },
});

export default PilihResto;
