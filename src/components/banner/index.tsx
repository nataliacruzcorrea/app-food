import { View, Pressable, Image, Text } from "react-native";
import PagerView from "react-native-pager-view";

interface imgProps {
  initialImgs: string[];
}

export function Banner({ initialImgs }: imgProps) {
  console.log(initialImgs, "initialImgs");
  
  return (
    <View className="w-full h-52 md:h-60 mt-5 mb-4">
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        {initialImgs.map((image, index) => {
          return (
            <Pressable className="w-full md:h-60" key={index}>
              <Image
                source={image}
                className="w-full h-52 rounded-2xl md:h-60"
              />
            </Pressable>
          );
        })}
      </PagerView>
    </View>
  );
}
