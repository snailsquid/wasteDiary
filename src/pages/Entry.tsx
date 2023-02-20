import {
  Box,
  Text,
  VStack,
  HStack,
  Image,
  ScrollView,
  Center,
  Pressable,
  Input,
  Switch,
} from "native-base";
import { SafeAreaView, Dimensions, StatusBar as StatBar } from "react-native";
import moment from "moment";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Diary {
  diary: [
    {
      recycle?: number;
      nonRecycle?: number;
      recycled?: boolean;
      score?: number;
      time?: string;
    }
  ];
  score: number;
  lastEntry: string;
  streak: number;
}

export default function Entry({ navigation }: any) {
  const [recycle, setRecycle] = useState(0);
  const [nonRecycle, setNonRecycle] = useState(0);
  const [recycled, setRecycled] = useState(true);

  async function saveToStorage() {
    let diary_: Diary = {
      diary: [{}],
      score: 0,
      lastEntry: moment().format(),
      streak: 0,
    };
    const diary = await AsyncStorage.getItem("diary");
    if (diary) {
      const _diary = JSON.parse(diary);
      diary_ = _diary;
    }
    const initialScore = 100;
    const averageTrash = 800;
    let recycledPoint = 0;
    if (recycled) {
      recycledPoint = 10;
    }
    const score = Math.round(
      initialScore -
        (recycle + nonRecycle - recycle / 5) / ((averageTrash + 100) / 100) +
        recycledPoint
    );
    if (moment(diary_.lastEntry).diff(moment().format(), "days") < 1) {
      diary_.streak += 1;
    } else {
      diary_.streak = 0;
    }
    console.log(diary_.streak);
    console.log(diary_.lastEntry);
    diary_.lastEntry = moment().format();
    diary_.score += score;
    diary_.diary.push({
      recycle: recycle,
      nonRecycle: nonRecycle,
      recycled: recycled,
      score: score,
      time: moment().format(),
    });
    await AsyncStorage.setItem("diary", JSON.stringify(diary_));
  }
  useEffect(() => {
    if (recycle < 0) {
      setRecycle(0);
    }
    if (nonRecycle < 0) {
      setNonRecycle(0);
    }
  }, [recycle, nonRecycle]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#DAFFED",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: StatBar.currentHeight,
        }}
      >
        <Box marginX={15} marginY={15} flex={1}>
          <VStack space={3}>
            <HStack justifyContent={"space-between"}>
              <Text fontFamily="heading" fontWeight={"bold"} color="green.500">
                Add Entry
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
                      <Text color={"white"}>Cancel</Text>
                    </Box>
                  );
                }}
              </Pressable>
            </HStack>
            <Card center>
              <HStack>
                <Text>{moment().format("dddd MMM Do YYYY")}</Text>
              </HStack>
            </Card>
            <HStack
              backgroundColor="white"
              space={3}
              justifyContent={"space-between"}
              rounded={20}
              shadow={1}
              paddingLeft={3}
            >
              <Center>
                <Box>
                  <Text fontWeight={"semibold"}>♻️ Recycleable Waste</Text>
                </Box>
              </Center>
              <Box
                width={150}
                rounded={20}
                px={4}
                py={1}
                flexDir={"row"}
                justifyContent={"flex-end"}
                alignItems={"center"}
              >
                <Input
                  variant="unstlyed"
                  keyboardType="numeric"
                  textAlign={"right"}
                  height={"100%"}
                  width={"full"}
                  onChangeText={(number) => {
                    setRecycle(Number(number));
                  }}
                  placeholder={"0"}
                />
                <Text>gr</Text>
              </Box>
            </HStack>

            <HStack
              backgroundColor="white"
              space={3}
              justifyContent={"space-between"}
              rounded={20}
              shadow={1}
              paddingLeft={3}
            >
              <Center>
                <Box>
                  <Text fontWeight={"semibold"}>🚫 Non Recycleable Waste</Text>
                </Box>
              </Center>
              <Box
                width={150}
                rounded={20}
                px={4}
                py={1}
                flexDir={"row"}
                justifyContent={"flex-end"}
                alignItems={"center"}
              >
                <Input
                  variant="unstlyed"
                  keyboardType="numeric"
                  textAlign={"right"}
                  height={"100%"}
                  width={"full"}
                  onChangeText={(number) => {
                    setNonRecycle(Number(number));
                  }}
                  placeholder={"0"}
                />
                <Text>gr</Text>
              </Box>
            </HStack>
            <HStack
              backgroundColor="white"
              space={3}
              justifyContent={"space-between"}
              rounded={20}
              shadow={1}
              px={3}
              py={1}
              alignItems={"center"}
            >
              <Text fontWeight={"semibold"}>👍 I Recycled My Items</Text>
              <Switch
                onValueChange={(value) => {
                  setRecycled(value);
                }}
                value={recycled}
              />
            </HStack>
          </VStack>
          <Pressable
            bottom={0}
            position={"absolute"}
            width={"100%"}
            onPress={async () => {
              await saveToStorage();
              navigation.navigate("Home");
            }}
          >
            {({ isPressed }) => {
              return (
                <Box
                  backgroundColor={isPressed ? "green.400" : "green.500"}
                  px={5}
                  py={3}
                  rounded={20}
                  style={{ transform: [{ scale: isPressed ? 0.96 : 1 }] }}
                  shadow={1}
                >
                  <Center>
                    <Text fontWeight={"bold"} color="white">
                      SAVE
                    </Text>
                  </Center>
                </Box>
              );
            }}
          </Pressable>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
