import { SafeAreaView, StatusBar as StatBar } from "react-native";
import { ScrollView, Box, HStack, VStack, Text, Pressable } from "native-base";
import ShopCard from "../components/ShopCard";

export default function Shop({ navigation }: any) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#DAFFED",
        paddingVertical: 15,
      }}
    >
      <HStack
        justifyContent={"space-between"}
        mx={15}
        style={{ marginTop: StatBar.currentHeight }}
        marginY={15}
      >
        <Text fontWeight={"bold"} fontFamily={"heading"} color={"green.500"}>
          Shop
        </Text>
        <Pressable onPress={() => navigation.navigate("Home")}>
          {({ isPressed }) => {
            return (
              <Box
                backgroundColor={isPressed ? "red.400" : "red.500"}
                px={3}
                rounded={10}
                style={{ transform: [{ scale: isPressed ? 0.96 : 1 }] }}
              >
                <Text color={"white"}>Return</Text>
              </Box>
            );
          }}
        </Pressable>
      </HStack>
      <ScrollView marginX={15} flex={1}>
        <VStack space={3}>
          <HStack space={3}>
            <ShopCard
              img="https://cdn.discordapp.com/attachments/913429508789534742/1077193856224866324/R.png"
              title={"Cabbage"}
              points={1000}
            ></ShopCard>
            <ShopCard
              img="https://media.discordapp.net/attachments/913429508789534742/1077199524059164683/Carrot-Orange.png?width=754&height=589"
              title={"Carrot"}
              points={800}
            ></ShopCard>
          </HStack>
          <HStack space={3}>
            <ShopCard
              img="https://cdn.discordapp.com/attachments/913429508789534742/1077200643934138419/OIP.png"
              title={"Chicken Leg"}
              points={3000}
            ></ShopCard>
            <ShopCard
              img="https://media.discordapp.net/attachments/913429508789534742/1077200993458061313/cara-budidaya-buncis-agar-berbuah-lebat.png?width=917&height=588"
              title={"Green Beans"}
              points={500}
            ></ShopCard>
          </HStack>
          <HStack space={3}>
            <ShopCard
              img="https://media.discordapp.net/attachments/913429508789534742/1077201312535547985/Bayam20Hijau20250g.png"
              title={"Spinach"}
              points={800}
            ></ShopCard>
            <ShopCard
              img="https://media.discordapp.net/attachments/913429508789534742/1077201533365665854/OIP.png"
              title={"Kale"}
              points={500}
            ></ShopCard>
          </HStack>
          <HStack space={3}>
            <ShopCard
              img="https://media.discordapp.net/attachments/913429508789534742/1077202026615812146/lato-lato-istock.png"
              title={"Lato Lato"}
              points={1600}
            ></ShopCard>
            <ShopCard
              img="https://media.discordapp.net/attachments/913429508789534742/1077202305256017960/10003974_1.png?width=428&height=588"
              title={"Cooking Oil"}
              points={800}
            ></ShopCard>
          </HStack>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
