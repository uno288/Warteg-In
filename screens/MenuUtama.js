import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const MenuUtama = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menuutama}>
      <Image
        style={[styles.navigasiIcon, styles.navigasiPosition]}
        contentFit="cover"
        source={require("../assets/navigasi1.png")}
      />
      <View style={[styles.barNavigasi, styles.navigasiPosition]} />
      <Text style={[styles.periksaPesanan, styles.rp0Typo]}>
        Periksa Pesanan
      </Text>
      <View style={styles.background} />
      <View style={styles.menu3Parent}>
        <View style={[styles.menu3, styles.menuLayout]}>
          <View style={[styles.menuPromo, styles.menuPosition]} />
          <Image
            style={styles.menuPromoIcon}
            contentFit="cover"
            source={require("../assets/menu-promo.png")}
          />
          <Image
            style={[styles.catatanIcon, styles.catatanIconLayout]}
            contentFit="cover"
            source={require("../assets/catatan.png")}
          />
          <Text style={[styles.ikanTongkol, styles.kikilTypo]}>
            Ikan Tongkol
          </Text>
          <Text style={[styles.rp0, styles.rp0Position]}>Rp30.000</Text>
          <View style={[styles.tambahKurangMenu, styles.tambahLayout]}>
            <View style={[styles.tempatButton, styles.tempatLayout]} />
            <View style={[styles.tempatButton1, styles.tempatLayout]} />
            <Text style={[styles.text, styles.textTypo]}>+</Text>
            <Text style={[styles.text1, styles.textTypo]}>-</Text>
            <Text style={[styles.text2, styles.text2Typo]}>0</Text>
          </View>
        </View>
        <View style={[styles.menu2, styles.menuLayout]}>
          <View style={[styles.menuPromo1, styles.menuPosition]} />
          <Image
            style={styles.menuPromoIcon}
            contentFit="cover"
            source={require("../assets/menu-promo1.png")}
          />
          <Image
            style={[styles.catatanIcon1, styles.catatanIconLayout]}
            contentFit="cover"
            source={require("../assets/catatan.png")}
          />
          <Text style={[styles.kikil, styles.kikilLayout]}>Kikil</Text>
          <Text style={[styles.rp0, styles.rp0Position]}>Rp4000</Text>
          <View style={[styles.tambahKurangMenu, styles.tambahLayout]}>
            <View style={[styles.tempatButton, styles.tempatLayout]} />
            <View style={[styles.tempatButton1, styles.tempatLayout]} />
            <Text style={[styles.text, styles.textTypo]}>+</Text>
            <Text style={[styles.text1, styles.textTypo]}>-</Text>
            <Text style={[styles.text2, styles.text2Typo]}>0</Text>
          </View>
        </View>
        <View style={[styles.menu1, styles.menuLayout]}>
          <View style={[styles.menuPromo1, styles.menuPosition]} />
          <Image
            style={[styles.catatanIcon1, styles.catatanIconLayout]}
            contentFit="cover"
            source={require("../assets/catatan.png")}
          />
          <Image
            style={styles.menuPromoIcon}
            contentFit="cover"
            source={require("../assets/menu-promo2.png")}
          />
          <Text style={[styles.kikil, styles.kikilLayout]}>Soto Ayam</Text>
          <Text style={[styles.rp0, styles.rp0Position]}>Rp10000</Text>
          <View style={[styles.tambahKurangMenu, styles.tambahLayout]}>
            <View style={[styles.tambahKurangMenu2, styles.tambahLayout]}>
              <View style={[styles.tempatButton, styles.tempatLayout]} />
              <View style={[styles.tempatButton1, styles.tempatLayout]} />
              <Text style={[styles.text, styles.textTypo]}>+</Text>
              <Text style={[styles.text1, styles.textTypo]}>-</Text>
              <Text style={[styles.text2, styles.text2Typo]}>0</Text>
            </View>
          </View>
        </View>
        <View style={[styles.menu6, styles.menuLayout]}>
          <View style={[styles.menuPromo, styles.menuPosition]} />
          <Image
            style={styles.menuPromoIcon}
            contentFit="cover"
            source={require("../assets/menu-promo3.png")}
          />
          <Image
            style={[styles.catatanIcon3, styles.catatanIconPosition]}
            contentFit="cover"
            source={require("../assets/catatan.png")}
          />
          <Text style={[styles.ikanTongkol, styles.kikilTypo]}>
            Cheese Cake
          </Text>
          <Text style={[styles.rp0, styles.rp0Position]}>Rp30.000</Text>
          <View style={[styles.tambahKurangMenu, styles.tambahLayout]}>
            <View style={[styles.tempatButton, styles.tempatLayout]} />
            <View style={[styles.tempatButton1, styles.tempatLayout]} />
            <Text style={[styles.text, styles.textTypo]}>+</Text>
            <Text style={[styles.text1, styles.textTypo]}>-</Text>
            <Text style={[styles.text2, styles.text2Typo]}>0</Text>
          </View>
        </View>
        <View style={[styles.menu5, styles.menuLayout]}>
          <View style={[styles.menuPromo1, styles.menuPosition]} />
          <Image
            style={styles.menuPromoIcon}
            contentFit="cover"
            source={require("../assets/menu-promo4.png")}
          />
          <Image
            style={[styles.catatanIcon4, styles.catatanIconPosition]}
            contentFit="cover"
            source={require("../assets/catatan.png")}
          />
          <Text style={[styles.kikil, styles.kikilLayout]}>Chicken Burger</Text>
          <Text style={[styles.rp0, styles.rp0Position]}>Rp40.000</Text>
          <View style={[styles.tambahKurangMenu, styles.tambahLayout]}>
            <View style={[styles.tempatButton, styles.tempatLayout]} />
            <View style={[styles.tempatButton1, styles.tempatLayout]} />
            <Text style={[styles.text, styles.textTypo]}>+</Text>
            <Text style={[styles.text1, styles.textTypo]}>-</Text>
            <Text style={[styles.text2, styles.text2Typo]}>0</Text>
          </View>
        </View>
        <View style={[styles.menu4, styles.menuLayout]}>
          <View style={[styles.menuPromo1, styles.menuPosition]} />
          <Image
            style={[styles.catatanIcon5, styles.catatanIconLayout]}
            contentFit="cover"
            source={require("../assets/catatan.png")}
          />
          <Image
            style={styles.menuPromoIcon}
            contentFit="cover"
            source={require("../assets/menu-promo5.png")}
          />
          <Text style={[styles.kikil, styles.kikilLayout]}>Telur Dadar</Text>
          <Text style={[styles.rp0, styles.rp0Position]}>Rp35.000</Text>
          <View style={[styles.tambahKurangMenu, styles.tambahLayout]}>
            <View style={[styles.tambahKurangMenu2, styles.tambahLayout]}>
              <View style={[styles.tempatButton, styles.tempatLayout]} />
              <View style={[styles.tempatButton1, styles.tempatLayout]} />
              <Text style={[styles.text, styles.textTypo]}>+</Text>
              <Text style={[styles.text1, styles.textTypo]}>-</Text>
              <Text style={[styles.text2, styles.text2Typo]}>0</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.menuutamaChild} />
      <Pressable
        style={[styles.btnPesanan, styles.btnPesananLayout]}
        onPress={() => navigation.navigate("RincianPesanan")}
      >
        <View style={[styles.barNavigasi1, styles.btnPesananLayout]} />
        <Text style={[styles.periksaPesanan1, styles.kerang1Typo]}>
          Periksa Pesanan
        </Text>
        <Text style={styles.barang}>0 barang</Text>
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/shopping-cart.png")}
        />
      </Pressable>
      <Text style={[styles.menuRestoran, styles.textTypo]}>Menu Restoran</Text>
      <View style={styles.tabEvent3Parent}>
        <View style={[styles.tabEvent3, styles.tabLayout1]}>
          <Image
            style={[styles.menuPromoIcon6, styles.tabLayout1]}
            contentFit="cover"
            source={require("../assets/menu-promo6.png")}
          />
          <Image
            style={[styles.btnWishlistIcon, styles.btnIconLayout]}
            contentFit="cover"
            source={require("../assets/btn-wishlist.png")}
          />
          <Text style={[styles.kerang1, styles.kerang1Typo]}>Kerang</Text>
        </View>
        <View style={[styles.tabEvent2, styles.tabLayout1]}>
          <Image
            style={[styles.menuPromoIcon6, styles.tabLayout1]}
            contentFit="cover"
            source={require("../assets/menu-promo7.png")}
          />
          <Image
            style={[styles.btnWishlistIcon1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/btn-wishlist.png")}
          />
          <Text style={styles.ususAyam}>Usus Ayam</Text>
        </View>
        <Pressable
          style={[styles.tabEvent1, styles.tabLayout1]}
          onPress={() => navigation.navigate("DetailMenu")}
        >
          <Image
            style={[styles.menuPromoIcon6, styles.tabLayout1]}
            contentFit="cover"
            source={require("../assets/menu-promo8.png")}
          />
          <Image
            style={[styles.btnWishlistIcon2, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/btn-wishlist.png")}
          />
          <Text style={styles.ususAyam}>Telor Dadar</Text>
        </Pressable>
      </View>
      <Text style={[styles.penawaranTerbaik, styles.textTypo]}>
        Penawaran Terbaik
      </Text>
      <View style={[styles.btnHargadiskon, styles.tabLayout]}>
        <View style={[styles.spesifikMenu2, styles.tabLayout]} />
        <Text
          style={[styles.hargaDiskon, styles.filterPosition]}
        >{`Harga Diskon `}</Text>
        <Image
          style={[styles.voucherIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/voucher.png")}
        />
      </View>
      <View style={[styles.btnFavorit, styles.btnFavoritLayout]}>
        <View style={[styles.spesifikMenu21, styles.btnFavoritLayout]} />
        <View style={[styles.favorit, styles.favoritLayout]}>
          <View style={[styles.favorit1, styles.favoritLayout]}>
            <Text style={[styles.favorit2, styles.filter1Typo]}>Favorit</Text>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector2.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.btnFilter, styles.btnFilterLayout]}>
        <View style={[styles.spesifikMenu1, styles.btnFilterLayout]} />
        <View style={[styles.filter, styles.filterPosition]}>
          <Text style={[styles.filter1, styles.filter1Typo]}>Filter</Text>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
        </View>
      </View>
      <View style={[styles.tabPencaharian, styles.tabLayout]}>
        <View style={[styles.tabPencaharian1, styles.tabLayout]} />
        <Image
          style={[styles.searchIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
        <Text style={[styles.lagiMauMakan, styles.text2Typo]}>
          Lagi mau makan apa nih?
        </Text>
      </View>
      <Text style={[styles.selamatDatang, styles.textTypo]}>
        Selamat Datang!
      </Text>
      <Image
        style={[styles.fastfoodIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/btn-informasimakanan.png")}
      />
      <Pressable
        style={styles.btnKembali}
        onPress={() => navigation.navigate("PilihResto")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/btn-kembali1.png")}
        />
      </Pressable>
      <View style={[styles.logo, styles.logoLayout]}>
        <Text style={[styles.wartegin, styles.logoLayout]}>WartegIn</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigasiPosition: {
    display: "none",
    position: "absolute",
  },
  rp0Typo: {
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  menuLayout: {
    height: 80,
    position: "absolute",
  },
  menuPosition: {
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  catatanIconLayout: {
    width: 15,
    height: 15,
    position: "absolute",
    overflow: "hidden",
  },
  kikilTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  rp0Position: {
    left: 72,
    color: Color.black,
    position: "absolute",
  },
  tambahLayout: {
    height: 20,
    width: 64,
    position: "absolute",
  },
  tempatLayout: {
    height: 17,
    width: 21,
    top: 3,
    backgroundColor: Color.goldenrod,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  text2Typo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    top: 6,
    textAlign: "center",
    position: "absolute",
  },
  kikilLayout: {
    width: 100,
    height: 18,
    fontSize: FontSize.size_sm,
  },
  catatanIconPosition: {
    top: 70,
    height: 15,
    width: 15,
    position: "absolute",
    overflow: "hidden",
  },
  btnPesananLayout: {
    height: 59,
    width: 316,
    position: "absolute",
  },
  kerang1Typo: {
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout1: {
    height: 30,
    width: 30,
    position: "absolute",
    overflow: "hidden",
  },
  tabLayout1: {
    height: 160,
    width: 128,
    position: "absolute",
  },
  btnIconLayout: {
    width: 17,
    height: 15,
  },
  iconPosition: {
    top: 7,
    position: "absolute",
  },
  tabLayout: {
    height: 32,
    position: "absolute",
  },
  filterPosition: {
    height: 13,
    top: 10,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  btnFavoritLayout: {
    width: 90,
    height: 32,
    position: "absolute",
  },
  favoritLayout: {
    width: 57,
    height: 14,
    position: "absolute",
  },
  filter1Typo: {
    left: 20,
    height: 13,
    color: Color.gray_300,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    position: "absolute",
  },
  btnFilterLayout: {
    width: 79,
    height: 32,
    position: "absolute",
  },
  logoLayout: {
    width: 96,
    position: "absolute",
  },
  navigasiIcon: {
    top: 737,
    width: 375,
    height: 75,
    left: 0,
  },
  barNavigasi: {
    top: 715,
    left: 5,
    backgroundColor: "#c4c4c4",
    width: 317,
    height: 60,
    borderRadius: Border.br_21xl,
  },
  periksaPesanan: {
    top: 734,
    left: 96,
    color: Color.black,
    fontSize: FontSize.size_lg,
    display: "none",
    position: "absolute",
  },
  background: {
    backgroundColor: Color.linen,
    width: 380,
    height: 812,
    top: 0,
    left: 0,
    position: "absolute",
  },
  menuPromo: {
    height: 80,
    position: "absolute",
    width: 326,
    backgroundColor: Color.white,
  },
  menuPromoIcon: {
    left: 6,
    width: 60,
    height: 68,
    top: 6,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  catatanIcon: {
    left: 230,
    height: 15,
    top: 55,
  },
  ikanTongkol: {
    width: 99,
    height: 18,
    fontSize: FontSize.size_sm,
    left: 72,
    color: Color.black,
    position: "absolute",
    top: 13,
    textAlign: "left",
  },
  rp0: {
    fontSize: FontSize.size_3xs,
    width: 48,
    height: 8,
    top: 55,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
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
    height: 15,
  },
  text1: {
    left: 9,
    width: 4,
    height: 15,
    top: 0,
    fontSize: FontSize.size_lg,
  },
  text2: {
    width: 5,
    height: 10,
    left: 29,
    color: Color.black,
  },
  tambahKurangMenu: {
    top: 51,
    left: 254,
  },
  menu3: {
    top: 176,
    width: 326,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 1,
    height: 80,
  },
  menuPromo1: {
    height: 80,
    position: "absolute",
    width: 327,
    backgroundColor: Color.white,
  },
  catatanIcon1: {
    left: 231,
    height: 15,
    top: 55,
  },
  kikil: {
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: 72,
    color: Color.black,
    position: "absolute",
    top: 13,
  },
  menu2: {
    top: 88,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 327,
    left: 0,
  },
  tambahKurangMenu2: {
    top: 0,
    left: 0,
  },
  menu1: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 327,
    top: 0,
    left: 0,
  },
  catatanIcon3: {
    left: 245,
  },
  menu6: {
    top: 440,
    width: 326,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 1,
    height: 80,
  },
  catatanIcon4: {
    left: 246,
  },
  menu5: {
    top: 352,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 327,
    left: 0,
  },
  catatanIcon5: {
    top: 843,
    left: 270,
    height: 15,
  },
  menu4: {
    top: 264,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 327,
    left: 0,
  },
  menu3Parent: {
    top: 509,
    height: 520,
    width: 327,
    left: 24,
    position: "absolute",
  },
  menuutamaChild: {
    top: 677,
    backgroundColor: "rgba(245, 245, 245, 0.3)",
    width: 373,
    height: 135,
    left: 0,
    position: "absolute",
  },
  barNavigasi1: {
    backgroundColor: Color.steelblue,
    top: 0,
    borderRadius: Border.br_21xl,
    left: 0,
  },
  periksaPesanan1: {
    top: 28,
    width: 136,
    height: 21,
    left: 28,
    fontSize: FontSize.size_lg,
  },
  barang: {
    top: 14,
    width: 47,
    height: 14,
    color: Color.white,
    left: 28,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    position: "absolute",
  },
  shoppingCartIcon: {
    top: 15,
    left: 265,
  },
  btnPesanan: {
    top: 707,
    left: 29,
  },
  menuRestoran: {
    top: 485,
    fontSize: FontSize.size_sm,
    left: 24,
  },
  menuPromoIcon6: {
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  btnWishlistIcon: {
    top: 315,
    left: 430,
    position: "absolute",
  },
  kerang1: {
    top: 139,
    left: 7,
    width: 100,
    height: 18,
    fontSize: FontSize.size_sm,
  },
  tabEvent3: {
    left: 296,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
  },
  btnWishlistIcon1: {
    left: 106,
    width: 17,
    height: 15,
  },
  ususAyam: {
    top: 142,
    left: 14,
    color: Color.white,
    width: 100,
    height: 18,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  tabEvent2: {
    left: 149,
    top: 1,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  btnWishlistIcon2: {
    left: 107,
    width: 17,
    height: 15,
  },
  tabEvent1: {
    top: 1,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
  },
  tabEvent3Parent: {
    top: 308,
    left: 27,
    width: 424,
    height: 161,
    position: "absolute",
  },
  penawaranTerbaik: {
    top: 284,
    left: 26,
    fontSize: FontSize.size_sm,
  },
  spesifikMenu2: {
    backgroundColor: "#79c99e",
    width: 118,
    height: 32,
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  hargaDiskon: {
    width: 80,
    color: Color.gray_300,
    height: 13,
    top: 10,
    left: 28,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
  },
  voucherIcon: {
    height: "40.02%",
    width: "14.6%",
    top: "20.63%",
    right: "75.86%",
    bottom: "39.35%",
    left: "9.54%",
    position: "absolute",
  },
  btnHargadiskon: {
    left: 236,
    width: 118,
    height: 32,
    top: 220,
  },
  spesifikMenu21: {
    backgroundColor: Color.goldenrod,
    width: 90,
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  favorit2: {
    width: 37,
    top: 1,
  },
  vectorIcon: {
    top: -1,
    left: -1,
    width: 16,
    height: 15,
    position: "absolute",
  },
  favorit1: {
    top: 0,
    left: 0,
  },
  favorit: {
    top: 9,
    left: 17,
  },
  btnFavorit: {
    left: 126,
    top: 220,
  },
  spesifikMenu1: {
    backgroundColor: "#4da1a9",
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  filter1: {
    width: 30,
    left: 20,
    top: 0,
  },
  filter: {
    width: 50,
    height: 13,
    top: 10,
    left: 14,
  },
  btnFilter: {
    left: 25,
    top: 220,
  },
  tabPencaharian1: {
    width: 326,
    top: 0,
    borderRadius: Border.br_21xl,
    left: 0,
    backgroundColor: Color.white,
  },
  searchIcon: {
    left: 12,
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  lagiMauMakan: {
    left: 36,
    letterSpacing: 0,
    lineHeight: 20,
    color: Color.dimgray,
  },
  tabPencaharian: {
    top: 172,
    left: 25,
    width: 326,
  },
  selamatDatang: {
    top: 116,
    fontSize: FontSize.size_5xl,
    left: 28,
  },
  fastfoodIcon: {
    top: 60,
    left: 324,
  },
  icon: {
    height: "100%",
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
  wartegin: {
    color: Color.dimgray,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: 0,
    fontSize: FontSize.size_lg,
    left: 0,
  },
  logo: {
    top: 65,
    left: 59,
    height: 21,
  },
  menuutama: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default MenuUtama;
