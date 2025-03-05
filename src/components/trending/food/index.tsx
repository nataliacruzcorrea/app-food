import { Image, Text, Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FoodProps } from "@/hooks/useFoods";
import { useTheme } from "@/contexts/ThemeProvider"; // Certifique-se de que está usando o contexto do tema

export function FoodItem({ foods }: { foods: FoodProps }) {
  const { theme } = useTheme(); // Acessando o tema atual

  return (
    <Pressable className="ml-4 relative">
      <View
        className={`absolute top-3 z-10 right-3 rounded-full h-7 px-2 items-center justify-center flex flex-row gap-1 ${
          theme === "light" ? "bg-slate-700" : "bg-gray-500"
        }`}
      >
        <Ionicons name="star" size={14} color="#FFC300" />
        <Text className="text-white">{foods.rating}</Text>
      </View>
      <Image
        source={{ uri: foods.image }}
        className="w-full min-w-52 h-52 rounded-2xl"
      ></Image>
      <Text
        className={`${
          theme === "light" ? "text-green-700" : "text-green-400"
        } font-bold text-xl mt-2 mb-1`}
      >
        R$ {foods.price.toFixed(2).replace(".", ",")}
      </Text>
      <Text
        className={`${
          theme === "light" ? "font-bold text-lg" : "font-bold text-white"
        }`}
      >
        {foods.name}
      </Text>
      <View className="flex-row">
        <Text
          className={`${
            theme === "light"
              ? "font-light text-slate-500 text-sm"
              : "font-light text-gray-400 text-sm"
          }`}
        >
          {foods.time} -{" "}
        </Text>
        <Text
          className={`${
            theme === "light"
              ? "font-light text-slate-500 text-sm"
              : "font-light text-gray-400 text-sm"
          }`}
        >
          {foods.delivery}
        </Text>
      </View>
    </Pressable>
  );
}
