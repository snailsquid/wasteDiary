import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import { Octicons, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import colors from "./src/theme/colors.json";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/pages/Home";
import marginAndPadding from "./src/theme/marginAndPadding.json";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

export default function App() {
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins.ttf"),
    "Unbounded-Bold": require("./assets/fonts/Unbounded-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tabs></Tabs>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

function Tabs() {
  return (
    <SafeAreaView style={styles.containerSafe}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#1CB447",
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            height: 70,
            bottom: 20,
            borderRadius: marginAndPadding.mainBorderRadius,
            left: 20,
            right: 20,
            shadowColor: "#6dbe9b",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 3.05,
            elevation: 4,
          },
          tabBarLabel: navigation.isFocused() ? route.name : "",
          tabBarIcon: ({ focused, color }) => {
            let octicons: "star" | "star-fill" | "error" = "error";
            let materialIcons: "lightbulb" | "lightbulb-outline" | "error" =
              "error";
            let ionicons: "home" | "home-outline" | "error" = "error";
            if (route.name === "Home") {
              ionicons = focused ? "home" : "home-outline";
            } else if (route.name === "Target") {
              octicons = focused ? "star-fill" : "star";
            } else if (route.name === "Tips") {
              materialIcons = focused ? "lightbulb" : "lightbulb-outline";
            }
            if (octicons != "error") {
              return <Octicons name={octicons} size={32} color={color} />;
            } else if (materialIcons != "error") {
              return (
                <MaterialCommunityIcons
                  name={materialIcons}
                  size={32}
                  color={color}
                />
              );
            } else if (ionicons != "error") {
              return <Ionicons name={ionicons} size={32} color={color} />;
            }
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
    backgroundColor: colors.greenSub,
  },
});
