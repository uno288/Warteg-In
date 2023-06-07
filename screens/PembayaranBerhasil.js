import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const PembayaranBerhasil = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pembayaranberhasil}>
      <Image
        style={[
          styles.pembayaranberhasilChild,
          styles.pembayaranberhasilLayout,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Image
        style={[styles.pembayaranberhasilItem, styles.pembayaranberhasilLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.cetakStruk}>
        <View style={[styles.barNavigasi, styles.btnBayarLayout]} />
        <Text style={[styles.cetakStrukPembayaran, styles.kembaliKeMenuTypo]}>
          Cetak Struk Pembayaran
        </Text>
      </View>
      <Text style={styles.pembayaranBerhasil}>Pembayaran Berhasil</Text>
      <Text style={styles.kode14j2tgr9}>Kode : 14J2TGR9</Text>
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={[styles.feedbackPelayanan, styles.berikanSaranTypo]}>
        FEEDBACK PELAYANAN
      </Text>
      <Text style={[styles.berikanSaran, styles.berikanSaranTypo]}>
        Berikan saran
      </Text>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("MenuUtama")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.btnBayar, styles.btnBayarLayout]}
        onPress={() => navigation.navigate("PilihResto")}
      >
        <Text style={[styles.kembaliKeMenu, styles.kembaliKeMenuTypo]}>
          Kembali ke menu utama
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pembayaranberhasilLayout: {
    height: 62,
    width: 66,
    top: 471,
    position: "absolute",
  },
  btnBayarLayout: {
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  kembaliKeMenuTypo: {
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    height: "35%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  berikanSaranTypo: {
    color: Color.gray_200,
    fontSize: FontSize.size_sm,
    height: "1.97%",
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    position: "absolute",
  },
  vectorIconLayout: {
    width: "5.87%",
    height: "2.46%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  pembayaranberhasilChild: {
    left: 110,
  },
  pembayaranberhasilItem: {
    left: 204,
  },
  vectorIcon: {
    top: 150,
    left: 120,
    width: 150,
    height: 150,
    position: "absolute",
  },
  barNavigasi: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#97db4f",
    height: "100%",
    width: "100%",
  },
  cetakStrukPembayaran: {
    width: "63.41%",
    top: "31.67%",
    left: "19.87%",
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    height: "35%",
  },
  cetakStruk: {
    top: 696,
    left: 30,
    width: 330,
    height: 59,
    display: "none",
    position: "absolute",
  },
  pembayaranBerhasil: {
    top: "41.88%",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_5xl,
    left: "19.23%",
    width: "61.33%",
    height: "3.69%",
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  kode14j2tgr9: {
    top: "47.88%",
    fontSize: FontSize.size_5xl,
    left: "19.23%",
    width: "61.33%",
    height: "3.69%",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  vectorIcon1: {
    height: "47.29%",
    width: "102.4%",
    top: "13.67%",
    right: "-1.33%",
    bottom: "39.04%",
    left: "-1.07%",
    position: "absolute",
  },
  feedbackPelayanan: {
    width: "40.53%",
    top: "54.6%",
    left: "29.6%",
  },
  berikanSaran: {
    width: "22.67%",
    top: "71.67%",
    left: "38.67%",
  },
  vectorIcon2: {
    top: "61.59%",
    right: "35.46%",
    bottom: "35.95%",
    left: "58.67%",
  },
  vectorIcon3: {
    top: "61.6%",
    right: "59.46%",
    bottom: "35.94%",
    left: "34.67%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "7.47%",
    top: "8.37%",
    right: "87.2%",
    bottom: "89.16%",
    width: "5.33%",
    height: "2.46%",
    position: "absolute",
  },
  kembaliKeMenu: {
    width: "61.51%",
    top: "33.33%",
    left: "19.24%",
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    height: "35%",
  },
  btnBayar: {
    height: "7.39%",
    width: "84.53%",
    top: "87%",
    right: "5.47%",
    bottom: "5.61%",
    left: "10%",
    backgroundColor: Color.steelblue,
  },
  pembayaranberhasil: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PembayaranBerhasil;
