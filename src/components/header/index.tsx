import { View, Text, Pressable, Alert } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useTheme } from "@/contexts/ThemeProvider";
import * as Location from "expo-location";
import { useEffect, useState } from "react";

export function Header() {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [adress, setAdress] = useState<{
    street?: string;
    city?: string;
    region?: string;
    postalCode?: string;
    country?: string;
  }>({});

  const { toggleTheme, theme } = useTheme();

  const getLocation = async () => {
    setLoading(true);
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Ative a localização para continuar");
      return;
    }

    try {
      const location = await Location.getCurrentPositionAsync({});
      let reverseGeocode = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (reverseGeocode.length > 0) {
        const { street, city, region, postalCode, country } = reverseGeocode[0];
        setAdress({
          street: street ?? undefined,
          city: city ?? undefined,
          region: region ?? undefined,
          postalCode: postalCode ?? undefined,
          country: country ?? undefined,
        });
      }
    } catch (error) {
      Alert.alert("Não foi possível obter a localização");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!adress) {
      getLocation();
    }
  }, []);

  return (
    <View className="w-full flex flex-row items-center justify-between">
      {/* Botão Menu */}
      <Pressable
        className={`${
          theme === "light" ? "bg-white" : "bg-gray-950"
        } rounded-full w-10 h-10 flex justify-center items-center`}
      >
        <Ionicons
          name="menu"
          size={20}
          color={theme === "light" ? "#121212" : "#fff"} // Cor do ícone conforme o tema
        />
      </Pressable>

      {/* Localização */}
      <View className="flex items-center flex-row gap-1">
        <Pressable className="flex flex-row items-baseline gap-1" onPress={getLocation}>
          {Object.keys(adress).length === 0 ? (
            <Text className={`text-sm font-bold ${theme === "light" ? "text-slate-800" : "text-gray-300"}`}>
              Buscar Localização
            </Text>
          ) : null}

          {loading ? (
            <View className="flex flex-row items-center gap-1 flex-wrap max-w-60 justify-center ">
              <Feather name="map-pin" size={16} color={theme === "light" ? "#FF0000" : "#FF6666"} />
              <Text className={`text-lg font-bold ${theme === "light" ? "text-slate-800" : "text-gray-100"}`}>
                {adress?.street}
              </Text>
              {Object.keys(adress).length != 0 ? (
                <Pressable onPress={() => setIsOpen(!isOpen)}>
                  <Text className="gap-3 flex">
                    {isOpen ? (
                      <View className="gap-1 flex flex-row">
                        <Ionicons
                          name="chevron-up-outline"
                          size={12}
                          color={theme === "light" ? "gray" : "#fff"}
                        />
                        <Text className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                          {adress?.city},{adress?.region}
                        </Text>
                      </View>
                    ) : (
                      <Ionicons
                        name="chevron-down-outline"
                        size={12}
                        color={theme === "light" ? "#121212" : "#fff"}
                      />
                    )}
                  </Text>
                </Pressable>
              ) : null}
            </View>
          ) : (
            <Text className={`text-lg font-bold ${theme === "light" ? "text-slate-800" : "text-gray-300"}`}>
              Localização não encontrada
            </Text>
          )}
        </Pressable>
      </View>

      {/* Botão para alternar Tema */}
      <Pressable
        onPress={toggleTheme}
        className={`${
          theme === "light" ? "bg-white" : "bg-gray-950"
        } rounded-full w-10 h-10 flex justify-center items-center`}
      >
        <Feather
          name={theme === "light" ? "moon" : "sun"}
          size={20}
          color={theme === "light" ? "#121212" : "#fff"} // Cor do ícone conforme o tema
        />
      </Pressable>
    </View>
  );
}
