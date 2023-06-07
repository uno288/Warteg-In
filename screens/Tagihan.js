import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Tagihan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tagihan}>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("RincianPesanan")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </Pressable>
      <Text style={[styles.tagihan1, styles.bayarTypo]}>Tagihan</Text>
      <View style={styles.photoMakanan} />
      <Pressable
        style={styles.btnBayar}
        onPress={() => navigation.navigate("PembayaranBerhasil")}
      >
        <Text style={[styles.bayar, styles.bayarTypo]}>Bayar</Text>
      </Pressable>
      <Text style={[styles.rp0, styles.rp0Typo]}>Rp. 0</Text>
      <Text style={[styles.rp01, styles.rp0Typo]}>Rp. 0</Text>
      <Text style={[styles.rp02, styles.rp0Typo]}>Rp. 0</Text>
      <Text style={[styles.diskon, styles.totalTypo]}>Diskon</Text>
      <Text style={[styles.total, styles.totalTypo]}>Total</Text>
      <Text
        style={[styles.pastikanJumlahPesanan, styles.pastikanJumlahPesananTypo]}
      >
        Pastikan jumlah pesanan dan nominal tagihan anda!
      </Text>
      <Text style={[styles.pesanan, styles.totalTypo]}>Pesanan</Text>
      <View style={styles.tagihanChild} />
      <View style={[styles.voucherDiskon, styles.voucherDiskonPosition]}>
        <Text
          style={[
            styles.menggunakanVoucherDiskon,
            styles.pastikanJumlahPesananTypo,
          ]}
        >
          Menggunakan voucher diskon
        </Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
      </View>
      <View style={[styles.placeholderMetode, styles.voucherDiskonPosition]} />
      <View style={[styles.kartuKredit, styles.danaPosition]}>
        <Text style={[styles.kartuKredit1, styles.dana1Typo]}>
          Kartu Kredit
        </Text>
        <Image
          style={[styles.kartuKreditChild, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <Image
          style={[styles.creditCardIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/credit-card.png")}
        />
      </View>
      <View style={[styles.ovoPayment, styles.danaPosition]}>
        <Text style={[styles.ovoPayment1, styles.dana1Typo]}>OVO Payment</Text>
        <Image
          style={[styles.kartuKreditChild, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
      </View>
      <View style={[styles.dana, styles.danaPosition]}>
        <Text style={[styles.dana1, styles.dana1Typo]}>DANA</Text>
        <Image
          style={[styles.kartuKreditChild, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vector10.png")}
        />
        <Image
          style={[styles.dana1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/dana-1.png")}
        />
      </View>
      <View style={[styles.linkAja, styles.danaPosition]}>
        <Text style={styles.linkAja1}>Link Aja!</Text>
        <Image
          style={[styles.kartuKreditChild, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.logoLinkAja1, styles.logoLinkAja1Position]}
          contentFit="cover"
          source={require("../assets/logo-link-aja-1.png")}
        />
      </View>
      <View style={[styles.bankVirtualAccount, styles.danaPosition]}>
        <Text style={[styles.bankVirtualAccount1, styles.dana1Typo]}>
          Bank Virtual Account
        </Text>
        <Image
          style={[styles.accountBalanceIcon, styles.logoLinkAja1Position]}
          contentFit="cover"
          source={require("../assets/account-balance.png")}
        />
        <Image
          style={[styles.dropDownIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/drop-down.png")}
        />
      </View>
      <View style={styles.divider} />
      <View style={[styles.divider1, styles.dividerLayout]} />
      <View style={[styles.divider2, styles.dividerLayout]} />
      <View style={[styles.divider3, styles.dividerLayout]} />
      <View style={[styles.divider4, styles.dividerLayout]} />
      <View style={[styles.divider5, styles.dividerLayout]} />
      <Text style={[styles.metodePembayaran, styles.bayarTypo]}>
        Metode Pembayaran
      </Text>
      <Image
        style={[styles.voucherIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/voucher1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  bayarTypo: {
    textAlign: "center",
    fontSize: FontSize.size_lg,
  },
  rp0Typo: {
    textAlign: "right",
    left: "54.47%",
    width: "28.42%",
    height: "1.75%",
    fontSize: FontSize.size_xs,
    color: Color.black,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  totalTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xs,
    height: "1.75%",
    color: Color.black,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  pastikanJumlahPesananTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.robotoRegular,
  },
  voucherDiskonPosition: {
    borderRadius: Border.br_3xs,
    left: "13.07%",
    right: "13.07%",
    width: "73.87%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  danaPosition: {
    height: "4.8%",
    left: "13.07%",
    right: "13.07%",
    width: "73.87%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  dana1Typo: {
    left: "26.31%",
    height: "36.44%",
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.black,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    overflow: "hidden",
  },
  iconPosition: {
    width: 25,
    left: 8,
    position: "absolute",
  },
  logoLinkAja1Position: {
    top: 10,
    width: 25,
    left: 8,
    position: "absolute",
  },
  dividerLayout: {
    width: 219,
    backgroundColor: Color.linen,
    height: 1,
    left: 78,
    borderRadius: Border.br_21xl,
    position: "absolute",
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
  tagihan1: {
    height: "2.63%",
    width: "26.11%",
    top: "8.38%",
    left: "15.56%",
    color: Color.black,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  photoMakanan: {
    height: "32.75%",
    top: "67.25%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderTopLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  bayar: {
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.white,
    width: 80,
    height: 21,
    textAlign: "center",
    fontSize: FontSize.size_lg,
  },
  btnBayar: {
    height: "7.39%",
    width: "84.53%",
    top: "86.95%",
    right: "7.73%",
    bottom: "5.67%",
    left: "7.73%",
    backgroundColor: Color.steelblue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  rp0: {
    top: "71.13%",
  },
  rp01: {
    top: "74.38%",
  },
  rp02: {
    top: "79.75%",
  },
  diskon: {
    left: "13.33%",
    width: "27.22%",
    textAlign: "left",
    top: "74.38%",
  },
  total: {
    left: "13.33%",
    width: "27.22%",
    textAlign: "left",
    top: "79.75%",
  },
  pastikanJumlahPesanan: {
    height: "1.72%",
    width: "74.4%",
    top: "83.37%",
    left: "12.8%",
    position: "absolute",
  },
  pesanan: {
    width: "27.5%",
    left: "13.06%",
    top: "71.13%",
  },
  tagihanChild: {
    height: "0.13%",
    width: "74.12%",
    top: "77.77%",
    right: "12.94%",
    bottom: "22.1%",
    left: "12.94%",
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    position: "absolute",
  },
  menggunakanVoucherDiskon: {
    width: 166,
    height: 14,
  },
  vectorIcon: {
    width: 20,
    height: 19,
    marginLeft: 31,
  },
  voucherDiskon: {
    height: "5.3%",
    top: "52.34%",
    bottom: "42.36%",
    flexDirection: "row",
    paddingLeft: 60,
    paddingRight: 10,
    paddingBottom: 13,
    alignItems: "center",
  },
  placeholderMetode: {
    height: "32.27%",
    top: "14.78%",
    bottom: "52.96%",
  },
  kartuKredit1: {
    width: "34.6%",
    top: "33.78%",
  },
  kartuKreditChild: {
    height: "48.72%",
    width: "6.86%",
    top: "25.64%",
    right: "3.61%",
    bottom: "25.64%",
    left: "89.53%",
    position: "absolute",
  },
  creditCardIcon: {
    top: 13,
    width: 25,
    left: 8,
    position: "absolute",
  },
  kartuKredit: {
    top: "41.5%",
    bottom: "53.69%",
  },
  ovoPayment1: {
    width: "36.48%",
    top: "42.5%",
  },
  image1Icon: {
    top: 16,
    width: 45,
    height: 15,
    left: 8,
    position: "absolute",
  },
  ovoPayment: {
    top: "36.08%",
    bottom: "59.11%",
  },
  dana1: {
    width: "19.18%",
    top: "40.81%",
  },
  dana1Icon: {
    top: 11,
    height: 25,
  },
  dana: {
    top: "30.67%",
    bottom: "64.53%",
  },
  linkAja1: {
    width: "22.19%",
    top: "33.91%",
    left: "24.05%",
    height: "36.44%",
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  logoLinkAja1: {
    height: 25,
  },
  linkAja: {
    top: "25.25%",
    bottom: "69.95%",
  },
  bankVirtualAccount1: {
    width: "50.39%",
    top: "34.82%",
  },
  accountBalanceIcon: {
    height: 24,
    overflow: "hidden",
  },
  dropDownIcon: {
    height: "19%",
    width: "4.33%",
    top: "43.59%",
    right: "5.05%",
    bottom: "37.41%",
    left: "90.61%",
    position: "absolute",
  },
  bankVirtualAccount: {
    top: "19.83%",
    bottom: "75.37%",
  },
  divider: {
    top: 155,
    width: 218,
    height: 1,
    left: 78,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  divider1: {
    top: 202,
  },
  divider2: {
    top: 246,
  },
  divider3: {
    top: 290,
  },
  divider4: {
    top: 334,
  },
  divider5: {
    top: 373,
  },
  metodePembayaran: {
    height: "2.59%",
    width: "44.27%",
    top: "15.76%",
    left: "28%",
    color: Color.black,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  voucherIcon: {
    height: "3.08%",
    width: "6.67%",
    top: "53.45%",
    right: "76%",
    bottom: "43.47%",
    left: "17.33%",
    position: "absolute",
  },
  tagihan: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Tagihan;
