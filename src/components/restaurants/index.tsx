import { View, Text, Image, FlatList } from "react-native";
import { useFoods } from "@/hooks/useFoods";

export function Restaurants() {
  const { restaurants } = useFoods();
  console.log(restaurants, "restaurants");

  return (
    <FlatList
      data={restaurants}
      horizontal={true}
      renderItem={({ item }) => (
        <View className="flex items-center p-4 gap-1">
          <Image
            source={{ uri: item.image }}
            className="h-20 w-20 rounded-full"
            ></Image>
            <Text>{item.name}</Text>
        </View>
      )}
    ></FlatList>
  );
}
