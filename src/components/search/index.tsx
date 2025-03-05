import { View, TextInput, Text, FlatList, Pressable, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { useFoods } from "@/hooks/useFoods";
import { useTheme } from "@/contexts/ThemeProvider"; 

export function Search() {
  const [find, setFind] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { foods } = useFoods();
  const { theme } = useTheme(); 

  return (
    <View className="">
      <View
        className={`w-full z-10 flex-row flex-grow border rounded-full items-center justify-start h-14 gap-2 max-w-[95%] m-auto px-2 ${
          theme === "light" ? "bg-slate-200 border-slate-400" : "bg-gray-800 border-gray-700"
        }`}
      >
        <Feather name="search" size={20} color={theme === "light" ? "#64748b" : "#ddd"} />
        <TextInput
          onChangeText={setFind}
          value={find}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full h-full flex-1"
          placeholder="Procure sua comida..."
          placeholderTextColor={theme === "light" ? "#121212" : "#ccc"}
        />
      </View>

      {isFocused &&
      foods.some((item) =>
        item.name
          .toLowerCase()
          .split(" ")
          .some((word) => word.includes(find.toLowerCase()))
      ) ? (
        <FlatList
          className={`m-5 -mt-2 h-auto overflow-hidden rounded-b-2xl pt-5 ${
            theme === "light" ? "bg-slate-300" : "bg-gray-900"
          }`}
          data={foods.filter((item) =>
            item.name
              .toLowerCase()
              .split(" ")
              .some((word) => word.includes(find.toLowerCase()))
          )}
          numColumns={2}
          renderItem={({ item }) => (
            <Pressable className="p-2 justify-center m-auto">
              <Image
                source={{ uri: item.image }}
                className="w-44 h-44 rounded-2xl"
              />
              <Text className={`font-bold text-lg ${theme === "light" ? "text-slate-800" : "text-white"}`}>
                {item.name}
              </Text>
              <Text className={`text-green-700 ${theme === "light" ? "text-slate-700" : "text-green-400"}`}>
                R$ {item.price.toFixed(2)}
              </Text>
            </Pressable>
          )}
        />
      ) : null}
    </View>
  );
}
