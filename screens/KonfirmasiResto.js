import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const KonfirmasiResto = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { resto } = route.params;

  return (
    <View style={[styles.konfirmasiresto, styles.iconLayout]}>
      <Pressable
        style={styles.batal}
        onPress={() => navigation.navigate("PilihResto")}
      >
        <Text style={styles.batal1}>Batal</Text>
      </Pressable>
      <Pressable
        style={styles.btnKonfirmasi}
        onPress={() => navigation.navigate("MenuUtama")}
      >
        <Text style={[styles.konfirmasi, styles.mamokaTypo]}>Konfirmasi</Text>
      </Pressable>
      <Text style={[styles.mamoka, styles.mamokaTypo]}>{resto.namarestoran}</Text>
      <Text style={[styles.sawahBaruKec, styles.sawahBaruKecTypo]}>
        {resto.alamat}
      </Text>
      <Image
        style={styles.image2Icon}
        contentFit="cover"
        source={resto.gambar}
      />
      <Pressable
        style={styles.btnKembali}
        onPress={() => navigation.navigate("PilihResto")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </Pressable>
      <Text style={[styles.wartegin, styles.mamokaTypo]}>WartegIn</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  mamokaTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  sawahBaruKecTypo: {
    fontFamily: FontFamily.pTSansRegular,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  batal1: {
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    color: Color.black,
    fontSize: FontSize.size_lg,
  },
  batal: {
    left: 174,
    top: 736,
    position: "absolute",
  },
  konfirmasi: {
    color: Color.white,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    textAlign: "center",
  },
  btnKonfirmasi: {
    top: 652,
    left: 36,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.steelblue,
    width: 317,
    height: 60,
    paddingHorizontal: 95,
    paddingVertical: 0,
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
  },
  mamoka: {
    top: 436,
    left: 152,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  sawahBaruKec: {
    top: 499,
    left: 68,
  },
  jalanCendrawasihRaya: {
    top: 480,
    left: 107,
  },
  image2Icon: {
    top: 180,
    left: 94,
    borderRadius: 450,
    width: 200,
    height: 200,
    position: "absolute",
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
  wartegin: {
    top: 67,
    left: 61,
    color: Color.dimgray,
    textAlign: "left",
    width: 96,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  konfirmasiresto: {
    backgroundColor: Color.linen,
    flex: 1,
    height: 800,
  },
});

export default KonfirmasiResto;
