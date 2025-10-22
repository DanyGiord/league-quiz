import { Stack } from "expo-router";
import { View } from "react-native";
import { useFonts } from "expo-font";
import "./globals.css";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    League: require("../assets/fonts/League.otf"),
  });

  if (fontsLoaded) {
    return (
      <View style={{ flex: 1, backgroundColor: "#0A0A0A" }}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    );
  }
}
