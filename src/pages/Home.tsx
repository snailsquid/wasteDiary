import { StyleSheet, View, StatusBar as StatBar } from "react-native";
import colors from "../theme/colors.json";
import { Button, Text } from "@ui-kitten/components/ui";
import { Layout } from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";
import { TopNavigation } from "@ui-kitten/components";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Waste Diary" alignment="start" />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Button>Helo</Button>
        <Text>January</Text>
      </Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
