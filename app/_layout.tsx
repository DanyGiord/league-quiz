import { Stack } from "expo-router";
import { View } from "react-native";
import "./globals.css";

export default function Layout() {
  return (
    <View style={{ flex: 1, backgroundColor: "#0A0A0A" }}>
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}
