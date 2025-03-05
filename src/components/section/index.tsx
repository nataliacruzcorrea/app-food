import { View, Text, Image, Pressable } from "react-native";
import { useTheme } from "@/contexts/ThemeProvider";

type Props = {
  title: string;
  subtitle: string;
};

export function Section({ title, subtitle }: Props) {
  const { toggleTheme, theme } = useTheme();

  return (
    <View
      className={`w-full px-4 mt-5 ${
        theme === "light" ? "bg-slate-200 text-gray-500" : "bg-slate-900 text-white"
      }`}
    >
      <View className="flex flex-row justify-between">
        <Text
          className={`font-semibold text-lg ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          {title}
        </Text>
        <Text
          className={`text-sm ${
            theme === "light" ? "text-gray-500" : "text-gray-400"
          }`}
        >
          {subtitle}
        </Text>
      </View>
    </View>
  );
}
