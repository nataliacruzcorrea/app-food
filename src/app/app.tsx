import React from "react";
import { useTheme } from "@/contexts/ThemeProvider";
import { View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
const statusBarHeight = Constants.statusBarHeight;

import { Header } from "@/components/header";
import { Banner } from "@/components/banner";
import { Search } from "@/components/search";
import { Section } from "@/components/section";
import { TrendingFoods } from "@/components/trending";

export default function Index() {
  const { theme } = useTheme();

  const initialImgs = [
    require("@/assets/images/banner.png"),
    require("@/assets/images/banner_2.png"),
    require("@/assets/images/banner_3.png")
  ];

  const promocionalImgs = [
    require("@/assets/images/banner_2.png"),
    require("@/assets/images/banner_3.png")
  ];
  
  return (
    <>
      <StatusBar style={theme === "light" ? "dark" : "light"} translucent />
      <ScrollView
        className={`${
          theme === "light" ? "bg-slate-200 text-gray-500" : "bg-gray-900 text-white"
        } flex-1`}
        showsVerticalScrollIndicator={false}
      >
        <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
          <Header />
        </View>
        <Banner initialImgs={initialImgs} />
        <Search />
        <Section title="Famosos no DevFood" subtitle="ver todos" />
        <TrendingFoods />
        <Banner initialImgs={promocionalImgs} />
        <Section title="Comida em alta" subtitle="veja mais" />
        <TrendingFoods />
      </ScrollView>
    </>
  );
}
