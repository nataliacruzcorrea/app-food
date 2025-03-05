import { useEffect, useState } from "react";

export interface FoodProps {
  id: number;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
}
export interface RestaurantsProps {
  id: number;
  name: string;
  image: string;
}

export function useFoods() {
  const [foods, setFoods] = useState<FoodProps[]>([]);
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);

  useEffect(() => {
    async function getFood() {
      const response = await fetch("http://192.168.0.15:3000/foods"); //lembrar de trocar o ipv4
      const data = await response.json();
      setFoods(data);
    }

    getFood();
  }, []);

  useEffect(() => {
    async function getRestaurants() {
      const response = await fetch("http://192.168.0.15:3000/restaurants"); //lembrar de trocar o ipv4
      const data = await response.json();
      setRestaurants(data);
    }

    getRestaurants();
  }, []);

  return { foods, restaurants };
}
