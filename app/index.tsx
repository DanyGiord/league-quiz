import { Link } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 bg-black items-center justify-center">
      <Text className="text-white text-4xl font-bold mb-6 font-league">
        LoL Emote Quiz
      </Text>

      <Link href="/quiz" asChild>
        <TouchableOpacity className="bg-blue-600 px-8 py-3 rounded-2xl">
          <Text className="text-white text-lg font-semibold">Start Game</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
