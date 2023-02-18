import {
  Box,
  Text,
  VStack,
  HStack,
  Image,
  ScrollView,
  Center,
  Pressable,
  Button,
} from "native-base";
import { SafeAreaView, Dimensions, StatusBar as StatBar } from "react-native";
import moment from "moment";
import Card from "../components/Card";
import { useState } from "react";

export default function Entry({ navigation }: any) {
  const [recycle, setRecycle] = useState(0);
  const [nonRecycle, setNonRecycle] = useState(0);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#DAFFED",
      }}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: "#DAFFED" }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            marginTop: StatBar.currentHeight,
          }}
        >
          <Box marginX={15} marginY={15} flex={1}>
            <VStack space={3}>
              <HStack justifyContent={"space-between"}>
                <Text
                  fontFamily="heading"
                  fontWeight={"bold"}
                  color="green.500"
                >
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
                <Box>
                  <HStack>
                    <Text fontSize={"3xl"}>♻️</Text>
                    <Center>
                      <Text fontWeight={"semibold"}> Recyclable Waste</Text>
                    </Center>
                  </HStack>
                </Box>
                <Box width={150} rounded={20} px={4} py={1}>
                  <HStack justifyContent={"center"}>
                    <Center>
                      <Pressable
                        flex={1}
                        onPress={() => {
                          setRecycle(recycle - 1);
                        }}
                      >
                        <Box p={1}>
                          <Text
                            fontSize={"xl"}
                            color={"green.500"}
                            fontWeight={"bold"}
                          >
                            -
                          </Text>
                        </Box>
                      </Pressable>
                    </Center>
                    <Center flex={2}>
                      <Text>{recycle} gr</Text>
                    </Center>
                    <Center>
                      <Pressable
                        flex={1}
                        h={"100%"}
                        onPress={() => {
                          setRecycle(recycle + 1);
                        }}
                      >
                        <Box rounded={10} p={1}>
                          <Text
                            fontSize={"xl"}
                            color={"green.500"}
                            fontWeight={"bold"}
                          >
                            +
                          </Text>
                        </Box>
                      </Pressable>
                    </Center>
                  </HStack>
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
                <Box>
                  <HStack>
                    <Text fontSize={"3xl"}>🚫</Text>
                    <Center>
                      <Text fontWeight={"semibold"}>
                        {" "}
                        Non Recycleable Waste
                      </Text>
                    </Center>
                  </HStack>
                </Box>
                <Box width={150} rounded={20} px={4} py={1}>
                  <HStack justifyContent={"center"}>
                    <Center>
                      <Pressable
                        flex={1}
                        onPress={() => {
                          setNonRecycle(nonRecycle - 1);
                        }}
                      >
                        <Box p={1}>
                          <Text
                            fontSize={"xl"}
                            color={"green.500"}
                            fontWeight={"bold"}
                          >
                            -
                          </Text>
                        </Box>
                      </Pressable>
                    </Center>
                    <Center flex={2}>
                      <Text>{nonRecycle} gr</Text>
                    </Center>
                    <Center>
                      <Pressable
                        flex={1}
                        h={"100%"}
                        onPress={() => {
                          setNonRecycle(nonRecycle + 1);
                        }}
                      >
                        <Box rounded={10} p={1}>
                          <Text
                            fontSize={"xl"}
                            color={"green.500"}
                            fontWeight={"bold"}
                          >
                            +
                          </Text>
                        </Box>
                      </Pressable>
                    </Center>
                  </HStack>
                </Box>
              </HStack>
            </VStack>
            <Pressable bottom={0} position={"absolute"} width={"100%"}>
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
    </SafeAreaView>
  );
}
