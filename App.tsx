import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import { Octicons, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import colors from "./src/theme/colors.json";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/pages/Home";
import marginAndPadding from "./src/theme/marginAndPadding.json";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Tips from "./src/pages/Tips";
import Target from "./src/pages/Target";
import { NativeBaseProvider, extendTheme } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Entry from "./src/pages/Entry";
import Shop from "./src/pages/Shop";

const Tab = createNativeStackNavigator();

const useBottomNavigationState = (initialState = 0) => {
  const [selectedIndex, setSelectedIndex] = useState(initialState);
  return { selectedIndex, onSelect: setSelectedIndex };
};

export default function App() {
  const [loaded] = useFonts({
    Unbounded_Bold: require("./assets/fonts/Unbounded/Unbounded-Bold.ttf"),
    Unbounded_Black: require("./assets/fonts/Unbounded/Unbounded-Black.ttf"),
    Unbounded_ExtraBold: require("./assets/fonts/Unbounded/Unbounded-ExtraBold.ttf"),
    Unbounded_Medium: require("./assets/fonts/Unbounded/Unbounded-Medium.ttf"),
    Unbounded_ExtraLight: require("./assets/fonts/Unbounded/Unbounded-ExtraLight.ttf"),
    Unbounded_Light: require("./assets/fonts/Unbounded/Unbounded-Light.ttf"),
    Unbounded_Regular: require("./assets/fonts/Unbounded/Unbounded-Regular.ttf"),
    Unbounded_SemiBold: require("./assets/fonts/Unbounded/Unbounded-SemiBold.ttf"),
    Poppins_Bold: require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
    Poppins_Black: require("./assets/fonts/Poppins/Poppins-Black.ttf"),
    Poppins_ExtraBold: require("./assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
    Poppins_Medium: require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
    Poppins_ExtraLight: require("./assets/fonts/Poppins/Poppins-ExtraLight.ttf"),
    Poppins_Light: require("./assets/fonts/Poppins/Poppins-Light.ttf"),
    Poppins_Regular: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    Poppins_SemiBold: require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    Poppins_Thin: require("./assets/fonts/Poppins/Poppins-Thin.ttf"),
    Poppins_Bold_Italic: require("./assets/fonts/Poppins/Poppins-BoldItalic.ttf"),
    Poppins_Black_Italic: require("./assets/fonts/Poppins/Poppins-BlackItalic.ttf"),
    Poppins_ExtraBold_Italic: require("./assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf"),
    Poppins_Medium_Italic: require("./assets/fonts/Poppins/Poppins-MediumItalic.ttf"),
    Poppins_ExtraLight_Italic: require("./assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf"),
    Poppins_Light_Italic: require("./assets/fonts/Poppins/Poppins-LightItalic.ttf"),
    Poppins_SemiBold_Italic: require("./assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf"),
    Poppins_Thin_Italic: require("./assets/fonts/Poppins/Poppins-ThinItalic.ttf"),
  });

  const navBar = useBottomNavigationState();

  const theme = extendTheme({
    fontConfig: {
      Unbounded: {
        100: {
          normal: "Unbounded_ExtraLight",
        },
        200: {
          normal: "Unbounded_Light",
        },
        300: {
          normal: "Unbounded_Light",
        },
        400: {
          normal: "Unbounded_Regular",
        },
        500: {
          normal: "Unbounded_Medium",
        },
        600: {
          normal: "Unbounded_SemiBold",
        },
        700: {
          normal: "Unbounded_Bold",
        },
        800: {
          normal: "Unbounded_ExtraBold",
        },
        900: {
          normal: "Unbounded_Black",
        },
      },
      Poppins: {
        100: {
          normal: "Poppins_Thin",
          italic: "Poppins_ThinItalic",
        },
        200: {
          normal: "Poppins_ExtraLight",
          italic: "Poppins_ExtraLightItalic",
        },
        300: {
          normal: "Poppins_Light",
          italic: "Poppins_LightItalic",
        },
        400: {
          normal: "Poppins_Regular",
          italic: "Poppins_RegularItalic",
        },
        500: {
          normal: "Poppins_Medium",
          italic: "Poppins_MediumItalic",
        },
        600: {
          normal: "Poppins_SemiBold",
          italic: "Poppins_SemiBoldItalic",
        },
        700: {
          normal: "Poppins_Bold",
          italic: "Poppins_BoldItalic",
        },
        800: {
          normal: "Poppins_ExtraBold",
          italic: "Poppins_ExtraBoldItalic",
        },
        900: {
          normal: "Poppins_Black",
          italic: "Poppins_BlackItalic",
        },
      },
    },
    colors: {
      Green: {
        "50": "#1e5ff16e",
        "100": "#1a2ff14e",
        "200": "#160ff12e",
        "300": "#11eff10e",
        "400": "#daffed",
        "500": "#b8fbdb",
        "600": "#98f4c7",
        "700": "#7de8b4",
        "800": "#65d8a1",
        "900": "#51c58d",
      },
    },
    fonts: {
      heading: "Unbounded",
      body: "Poppins",
      mono: "Poppins",
    },
  });

  if (!loaded) {
    return null;
  } else
    return (
      <SafeAreaProvider>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Home"
              screenOptions={({ route, navigation }: any) => ({
                headerShown: false,
                tabBarActiveTintColor: "#1CB447",
                tabBarShowLabel: false,
              })}
            >
              <Tab.Screen name="Tips" component={Tips} />
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Target" component={Target} />
              <Tab.Screen name="Entry" component={Entry} />
              <Tab.Screen name="Shop" component={Shop} />
            </Tab.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
        <StatusBar style="auto" />
      </SafeAreaProvider>
    );
}

function Tabs() {
  return (
    <SafeAreaView style={styles.containerSafe}>
      <Tab.Navigator>
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
  navBar: {
    marginVertical: 8,
  },
});
