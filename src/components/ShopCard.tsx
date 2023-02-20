import {
  ScrollView,
  Box,
  HStack,
  VStack,
  Text,
  Image,
  Center,
  Pressable,
} from "native-base";

interface shopCard {
  img: string;
  title: string;
  points: number;
}

export default function ShopCard(props: shopCard) {
  return (
    <Pressable flex={1}>
      <Box backgroundColor={"white"} p={3} rounded={20} shadow={2}>
        <Center width={"full"} style={{ aspectRatio: 1 }}>
          <Image
            flex={1}
            resizeMode={"contain"}
            size={"lg"}
            source={{ uri: props.img }}
            alt={"img"}
          ></Image>
        </Center>
        <Text>{props.title}</Text>
        <Text fontWeight={"bold"}>{props.points} 💎</Text>
      </Box>
    </Pressable>
  );
}
