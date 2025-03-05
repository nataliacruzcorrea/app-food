import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { FoodItem } from "./food";
import { useFoods } from "@/hooks/useFoods";

export function TrendingFoods() {
  const {foods} = useFoods();

  return (
    <FlatList className="mt-4"
      horizontal={true}
      data={foods}
      renderItem={({ item }) => <FoodItem foods={item} />}
    ></FlatList>
  );
}
