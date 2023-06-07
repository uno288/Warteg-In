import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const RincianPesanan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rincianpesanan}>
      <View style={styles.rincianPesanan}>
        <View style={styles.containerRincian} />
        <Pressable
          style={[styles.btnBiaya, styles.btnBg]}
          onPress={() => navigation.navigate("Tagihan")}
        >
          <Text style={styles.rp0}>Rp. 0</Text>
          <Text style={[styles.totalBiaya, styles.barangFlexBox]}>
            Total Biaya
          </Text>
          <Text style={[styles.barang, styles.barangFlexBox]}>0 barang</Text>
        </Pressable>
        <View style={[styles.menu3, styles.menuLayout]}>
          <Image
            style={styles.catatanIcon}
            contentFit="cover"
            source={require("../assets/catatan.png")}
          />
          <Text style={styles.sateKambing}>Sate Kambing</Text>
          <Text style={styles.rp01}>Rp 0</Text>
          <View style={styles.tambahKurangMenu}>
            <View style={[styles.tempatButton, styles.tempatLayout]} />
            <View style={[styles.tempatButton1, styles.tempatLayout]} />
            <Text style={[styles.text, styles.textTypo]}>+</Text>
            <Text style={[styles.text1, styles.textTypo]}>-</Text>
            <Text style={[styles.text2, styles.textTypo]}>0</Text>
          </View>
          <Image
            style={[styles.menuPromoIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-promo.png")}
          />
        </View>
        <View style={[styles.menu2, styles.menuLayout]}>
          <Text style={styles.sateKambing}>Chicken Burger</Text>
          <Text style={[styles.rp02, styles.rp02Typo]}>Rp 0</Text>
          <View style={styles.tambahKurangMenu}>
            <View style={[styles.tempatButton, styles.tempatLayout]} />
            <View style={[styles.tempatButton1, styles.tempatLayout]} />
            <Text style={[styles.text, styles.textTypo]}>+</Text>
            <Text style={[styles.text1, styles.textTypo]}>-</Text>
            <Text style={[styles.text2, styles.textTypo]}>0</Text>
          </View>
          <Image
            style={[styles.menuPromoIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-promo1.png")}
          />
        </View>
        <View style={[styles.menu1, styles.menuLayout]}>
          <Image
            style={[styles.menuPromoIcon2, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-promo2.png")}
          />
          <Text style={styles.sateKambing}>Ice Cream Oreo</Text>
          <Text style={[styles.rp03, styles.rp02Typo]}>Rp 0</Text>
          <View style={styles.tambahKurangMenu}>
            <View style={[styles.tempatButton, styles.tempatLayout]} />
            <View style={[styles.tempatButton1, styles.tempatLayout]} />
            <Text style={[styles.text, styles.textTypo]}>+</Text>
            <Text style={[styles.text1, styles.textTypo]}>-</Text>
            <Text style={[styles.text2, styles.textTypo]}>0</Text>
          </View>
        </View>
        <Pressable
          style={[styles.btnTambah, styles.btnBg]}
          onPress={() => navigation.navigate("MenuUtama")}
        >
          <Text style={[styles.tambahPesanan, styles.barangFlexBox]}>
            Tambah Pesanan
          </Text>
        </Pressable>
        <Text style={[styles.pesananAnda, styles.textTypo]}>Pesanan Anda</Text>
        <Text style={[styles.rincianPesanan1, styles.textTypo]}>
          Rincian Pesanan
        </Text>
        <Pressable
          style={styles.btnKembali}
          onPress={() => navigation.navigate("MenuUtama")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
        </Pressable>
        <View style={[styles.divider, styles.dividerLayout]} />
        <View style={[styles.divider1, styles.dividerLayout]} />
        <View style={[styles.divider2, styles.dividerLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnBg: {
    backgroundColor: Color.steelblue,
    position: "absolute",
  },
  barangFlexBox: {
    textAlign: "center",
    color: Color.white,
  },
  menuLayout: {
    height: 80,
    width: 327,
    left: 17,
    position: "absolute",
    backgroundColor: Color.white,
  },
  tempatLayout: {
    height: 17,
    width: 21,
    backgroundColor: Color.goldenrod,
    top: 3,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  textTypo: {
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  menuIconLayout: {
    height: 68,
    width: 60,
    left: 6,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  rp02Typo: {
    height: 12,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.black,
    left: 72,
    top: 55,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  dividerLayout: {
    height: 1,
    width: 309,
    backgroundColor: Color.linen,
    left: 26,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  containerRincian: {
    top: 105,
    width: 355,
    height: 338,
    borderRadius: Border.br_3xs,
    left: 17,
    position: "absolute",
    backgroundColor: Color.white,
  },
  rp0: {
    height: "40.6%",
    width: "42.65%",
    top: "32.87%",
    left: "48.13%",
    textAlign: "right",
    color: Color.white,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  totalBiaya: {
    height: "35.53%",
    width: "31.55%",
    top: "44.72%",
    left: "6.3%",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  barang: {
    height: "23.68%",
    width: "16.1%",
    top: "21.03%",
    left: "7.94%",
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  btnBiaya: {
    height: "7.39%",
    width: "84.53%",
    top: "86.95%",
    right: "7.73%",
    bottom: "5.67%",
    left: "7.73%",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.steelblue,
  },
  catatanIcon: {
    left: 238,
    width: 15,
    height: 15,
    top: 55,
    position: "absolute",
    overflow: "hidden",
  },
  sateKambing: {
    top: 13,
    height: 18,
    width: 100,
    textAlign: "left",
    left: 72,
    color: Color.black,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  rp01: {
    width: 76,
    height: 11,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.black,
    left: 72,
    top: 55,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  tempatButton: {
    left: 0,
  },
  tempatButton1: {
    left: 43,
  },
  text: {
    top: 4,
    left: 50,
    width: 8,
    fontSize: FontSize.size_sm,
    color: Color.black,
    height: 15,
  },
  text1: {
    top: 0,
    left: 9,
    width: 4,
    height: 15,
    fontSize: FontSize.size_lg,
    color: Color.black,
  },
  text2: {
    left: 29,
    width: 5,
    height: 10,
    top: 6,
    fontSize: FontSize.size_xs,
  },
  tambahKurangMenu: {
    top: 51,
    left: 261,
    width: 64,
    height: 20,
    position: "absolute",
  },
  menuPromoIcon: {
    top: 5,
  },
  menu3: {
    top: 353,
  },
  rp02: {
    width: 81,
  },
  menu2: {
    top: 259,
  },
  menuPromoIcon2: {
    top: 6,
  },
  rp03: {
    width: 100,
  },
  menu1: {
    top: 165,
  },
  tambahPesanan: {
    width: 57,
    height: 18,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
  },
  btnTambah: {
    top: 120,
    left: 253,
    width: 97,
    height: 35,
    paddingHorizontal: 0,
    paddingVertical: 5,
    borderRadius: Border.br_3xs,
    alignItems: "center",
  },
  pesananAnda: {
    top: 128,
    left: 33,
    fontSize: FontSize.size_xs,
  },
  rincianPesanan1: {
    height: "2.63%",
    width: "46.39%",
    top: "8.38%",
    left: "15.56%",
    fontSize: FontSize.size_lg,
    color: Color.black,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: "100%",
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
  divider: {
    top: 249,
  },
  divider1: {
    top: 343,
  },
  divider2: {
    top: 437,
  },
  rincianPesanan: {
    width: 390,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  rincianpesanan: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default RincianPesanan;
