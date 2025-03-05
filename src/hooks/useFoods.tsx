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

export function useFoods() {
  const [foods, setFoods] = useState<FoodProps[]>([]);

  useEffect(() => {
    async function getFood() {
      const response = await fetch("http://192.168.0.15:3000/foods"); //lembrar de trocar o ipv4
      const data = await response.json();
      setFoods(data);
    }

    getFood();
  }, []);

  return { foods };
}
