import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import { Octicons, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import colors from "./src/theme/colors.json";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/pages/Home";
import marginAndPadding from "./src/theme/marginAndPadding.json";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Tips from "./src/pages/Tips";
import Target from "./src/pages/Target";
import * as eva from "@eva-design/eva";
import { default as theme } from "./src/theme/custom-theme.json";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
import { default as mapping } from "./mapping.json";

const Tab = createBottomTabNavigator();

export default function App() {
  const [loaded] = useFonts({
    Poppins: require("./assets/Poppins.ttf"),
    Unbounded: require("./assets/Unbounded_Bold.ttf"),
  });

  if (!loaded) {
    return null;
  } else
    return (
      <SafeAreaProvider>
        <ApplicationProvider
          {...eva}
          theme={{ ...eva.light, ...theme }}
          customMapping={mapping}
        >
          <Home></Home>
        </ApplicationProvider>
        <StatusBar style="auto" />
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
            paddingHorizontal: 7,
            left: 100,
            right: 100,
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
            let ionicons:
              | "home"
              | "home-outline"
              | "star-outline"
              | "star"
              | "error" = "error";
            if (route.name === "Home") {
              ionicons = focused ? "home" : "home-outline";
            } else if (route.name === "Target") {
              ionicons = focused ? "star" : "star-outline";
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
        <Tab.Screen name="Tips" component={Tips} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Target" component={Target} />
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
