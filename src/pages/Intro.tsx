import { SafeAreaView, TextInput } from "react-native";
import {
  Box,
  Text,
  Center,
  VStack,
  HStack,
  Pressable,
  Input,
} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { useState, useEffect } from "react";

export default function Intro({ navigation }: any) {
  const rotation = useSharedValue(0);
  const pressed = useSharedValue(false);
  const [page, setPage] = useState(0);
  const [buttonText, setButtonText] = useState("OK");
  const [name, setName] = useState("");
  const buttonTexts = ["OK", "Yep"];

  /* useEffect(() => {
    async function getName() {
      const name_ = await AsyncStorage.getItem("name").catch(console.error);
      console.log("listening");
      console.log(name_);

      if (name_) {
        navigation.navigate("Home");
        console.log("navigated");
      }
    }
    getName();
  }, []); */

  useEffect(() => {
    console.log(name);
  }, [name]);

  useEffect(() => {
    const saveName = async () => {
      await AsyncStorage.setItem("name", name);
    };
    saveName().catch(console.error);
  }, [page]);

  useEffect(() => {
    setButtonText(buttonTexts[page]);
  }, [page]);

  function Slider() {
    if (page === 0)
      return (
        <VStack>
          <HStack>
            <Box alignItems={"center"} justifyContent={"center"}>
              <Text fontFamily={"heading"} fontWeight={"bold"}>
                Welcome{" "}
              </Text>
            </Box>
            <Box alignItems={"center"}>
              <Animated.Text style={[wave, { fontSize: 24 }]}>👋</Animated.Text>
            </Box>
          </HStack>
          <Text>Let's set you up</Text>
        </VStack>
      );
    else if (page === 1)
      return (
        <VStack>
          <HStack>
            <Text>🌿 Our Vision Is </Text>
            <Text fontWeight={"bold"}>To Reduce Waste</Text>
          </HStack>
          <HStack>
            <Text>And </Text>
            <Text fontWeight={"bold"}>You </Text>
            <Text>Can Make a </Text>
            <Text fontWeight={"bold"}>Difference 🍃</Text>
          </HStack>
        </VStack>
      );
    else if (page === 3) {
      <Text>All Done 👌</Text>;
    }
    return <Text>Err</Text>;
  }

  rotation.value = withRepeat(withTiming(30), 20, true);

  const wave = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotation.value}deg`,
        },
      ],
    };
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#DAFFED" }}>
      <Box flex={1} alignItems={"center"} justifyContent={"center"}>
        <VStack>
          <Slider></Slider>

          <Pressable
            onPress={async () => {
              if (page === 0) {
                setPage(1);
              } else if (page === 1) {
                if (name.length > 0) {
                  navigation.navigate("Home");
                  await AsyncStorage.setItem("name", name);
                }
              }
            }}
          >
            {({ isPressed }) => {
              return (
                <Box
                  mt={10}
                  backgroundColor={isPressed ? "green.400" : "green.500"}
                  style={{ transform: [{ scale: isPressed ? 0.96 : 1 }] }}
                  rounded={20}
                  py={1}
                >
                  <Center>
                    <Text color={"white"}>{buttonText}</Text>
                  </Center>
                </Box>
              );
            }}
          </Pressable>
        </VStack>
      </Box>
    </SafeAreaView>
  );
}
