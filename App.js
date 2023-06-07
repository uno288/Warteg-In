const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import PilihResto from "./screens/PilihResto";
import PembayaranBerhasil from "./screens/PembayaranBerhasil";
import RincianPesanan from "./screens/RincianPesanan";
import KonfirmasiResto from "./screens/KonfirmasiResto";
import MenuUtama from "./screens/MenuUtama";
import DetailMenu from "./screens/DetailMenu";
import Tagihan from "./screens/Tagihan";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Roboto_regular: require("./assets/fonts/Roboto_regular.ttf"),
    Roboto_bold: require("./assets/fonts/Roboto_bold.ttf"),
    "PT Sans_regular": require("./assets/fonts/PT_Sans_regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="PilihResto"
              component={PilihResto}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PembayaranBerhasil"
              component={PembayaranBerhasil}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RincianPesanan"
              component={RincianPesanan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KonfirmasiResto"
              component={KonfirmasiResto}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MenuUtama"
              component={MenuUtama}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetailMenu"
              component={DetailMenu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Tagihan"
              component={Tagihan}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
