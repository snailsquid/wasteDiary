import {
  StyleSheet,
  View,
  StatusBar as StatBar,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { openURL } from "expo-linking";
import {
  Box,
  Text,
  Pressable,
  VStack,
  HStack,
  Image,
  ScrollView,
  Center,
  Popover,
} from "native-base";
import Card from "../components/Card";
import { LineChart } from "react-native-chart-kit";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

export default function Home({ navigation }: any) {
  const [points, setPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [scoreList, setScoreList] = useState<any>([]);
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    const listener = navigation.addListener("focus", () => {
      checkEntry();
    });
  }, [navigation]);

  async function checkEntry() {
    const diaryStorage = AsyncStorage.getItem("diary");
    const diary = await diaryStorage.catch(console.error);
    if (diary) {
      const diary_ = { ...JSON.parse(diary) };
      setPoints(diary_.points);
      setStreak(diary_.streak);
      const msgs: string[] = [
        "😎 Let's Track Your Waste",
        "🕑 Time To Track Your Waste",
        "👀 Track Your Waste Daily",
      ];
      if (moment(diary_.lastEntry).diff(moment().format(), "days") < 1) {
        setMsg("Today's been tracked 👍");
      } else {
        setMsg(msgs[Math.floor(Math.random() * (msgs.length + 1))]);
      }
      let scoreList_: any = [];
      for (let i = 0; i < 7; i++) {
        scoreList_.push(diary_.diary[diary_.diary.length - i - 1].score);
      }
      setScoreList(scoreList_);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#DAFFED" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Box marginX={15} marginY={15}>
          <VStack space={2}>
            <Text fontFamily="heading" fontWeight={"bold"} color="green.500">
              Waste Diary
            </Text>
            <Pressable
              width={"100%"}
              height={"300"}
              onPress={() =>
                openURL(
                  "https://www.nature.org/en-us/about-us/where-we-work/united-states/delaware/stories-in-delaware/delaware-eight-ways-to-reduce-waste/#:~:text=Eight%20Ways%20to%20Reduce%20Waste%201%201.%20Use,your%20use%20of%20paper%3A%20mail%2C%20receipts%2C%20magazines%20"
                )
              }
            >
              {({ isPressed }) => (
                <Box
                  style={{ transform: [{ scale: isPressed ? 0.96 : 1 }] }}
                  width={"100%"}
                  height={"100%"}
                  backgroundColor="green.800"
                  rounded={20}
                >
                  <Image
                    alt="trash"
                    position={"absolute"}
                    size="xl"
                    rounded={20}
                    opacity={isPressed ? "40" : "50"}
                    width={"100%"}
                    height={"100%"}
                    source={{
                      uri: "https://media.discordapp.net/attachments/913429508789534742/1076393077809352734/evgeny-karchevsky-k1tUxfs8JYY-unsplash.jpg?width=439&height=585",
                    }}
                  />
                  <Box flex={1} justifyContent={"flex-end"} p={5}>
                    <Text color={"white"} fontFamily="heading" fontSize={24}>
                      Reducing Waste
                    </Text>
                    <Text color={"white"} fontFamily="heading" fontSize={24}>
                      One Step At A Time
                    </Text>
                    <Text fontFamily={"body"} color={"green.200"} fontSize={12}>
                      www.nature.org
                    </Text>
                  </Box>
                </Box>
              )}
            </Pressable>
            <HStack space={2}>
              <Box flex={1}>
                <Popover
                  trigger={(triggerProps) => {
                    return (
                      <Card center>
                        <Pressable
                          position={"absolute"}
                          left={0}
                          top={0}
                          {...triggerProps}
                        >
                          <Text>ⓘ</Text>
                        </Pressable>
                        <Text
                          fontFamily={"heading"}
                          fontSize={"2xl"}
                          fontWeight={"bold"}
                        >
                          🔥{streak}
                        </Text>
                        <HStack>
                          <Text
                            fontFamily={"body"}
                            fontWeight={"semibold"}
                            fontSize={"xs"}
                          >
                            Days Streak{" "}
                          </Text>
                        </HStack>
                      </Card>
                    );
                  }}
                >
                  <Popover.Content
                    style={{ paddingTop: 2 }}
                    accessibilityLabel="Days Streak"
                  >
                    <Popover.Arrow />
                    <Popover.Body>
                      Days You've made an entry in a row
                    </Popover.Body>
                  </Popover.Content>
                </Popover>
              </Box>

              <Card>
                <Pressable flex={1} onPress={() => navigation.navigate("Shop")}>
                  {({ isPressed }) => (
                    <Center
                      style={{ transform: [{ scale: isPressed ? 0.9 : 1 }] }}
                    >
                      <Text
                        fontFamily={"heading"}
                        fontSize={"2xl"}
                        fontWeight={"bold"}
                      >
                        💎 {points}
                      </Text>
                      <Text
                        alignItems={"center"}
                        fontWeight={"semibold"}
                        fontSize={"xs"}
                      >
                        Waste Points
                      </Text>
                    </Center>
                  )}
                </Pressable>
              </Card>
            </HStack>
            <HStack>
              <Card green center>
                <VStack space={3} alignItems={"center"}>
                  <Text
                    color={"white"}
                    fontFamily={"heading"}
                    fontWeight={"bold"}
                  >
                    {msg}
                  </Text>
                  <Pressable
                    flex={0}
                    onPress={() => navigation.navigate("Entry")}
                    alignItems={"center"}
                  >
                    {({ isPressed }) => {
                      return (
                        <Box
                          backgroundColor={
                            isPressed ? "green.100" : "green.200"
                          }
                          padding={2}
                          rounded={20}
                          shadow={3}
                          style={{
                            transform: [
                              {
                                scale: isPressed ? 0.96 : 1,
                              },
                            ],
                          }}
                        >
                          <Text marginX={3}>Add Entry</Text>
                        </Box>
                      );
                    }}
                  </Pressable>
                </VStack>
              </Card>
            </HStack>
            <HStack>
              <Card center>
                <Text fontFamily={"heading"}>Waste Score</Text>
                <LineChart
                  width={Dimensions.get("window").width - 65}
                  height={100}
                  data={{
                    labels: [
                      "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ],
                    datasets: [
                      {
                        data: scoreList[0]
                          ? [
                              scoreList[6],
                              scoreList[5],
                              scoreList[4],
                              scoreList[3],
                              scoreList[2],
                              scoreList[1],
                              scoreList[0],
                            ]
                          : [100, 100, 100, 100, 100, 100, 100],
                      },
                    ],
                  }}
                  chartConfig={{
                    backgroundGradientFrom: "#fff",
                    backgroundGradientTo: "#fff",
                    color: (opacity = 1) => `rgba(82,197,141, ${opacity})`,
                  }}
                />
              </Card>
            </HStack>
            <Box
              width={"100%"}
              backgroundColor={"white"}
              rounded={20}
              shadow={1}
              flex={1}
              alignItems={"center"}
            >
              <HStack>
                <Center>
                  <Text fontSize={"5xl"} p={5}>
                    🚛
                  </Text>
                </Center>
                <Center pb={2}>
                  <VStack>
                    <Text
                      color="green.500"
                      fontFamily={"heading"}
                      fontWeight={"bold"}
                    >
                      We'll be picking up{" "}
                    </Text>
                    <Text
                      color="green.500"
                      fontFamily={"heading"}
                      fontWeight={"bold"}
                    >
                      in 2 days
                    </Text>
                  </VStack>
                </Center>
              </HStack>
            </Box>
          </VStack>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
