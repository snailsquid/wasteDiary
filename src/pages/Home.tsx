import { StyleSheet, View, StatusBar as StatBar } from "react-native";
import colors from "../theme/colors.json";
import { Button, Text } from "@ui-kitten/components/ui";
import { Layout } from "@ui-kitten/components";

export default function Home() {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button>Helo</Button>
      <Text>January</Text>
      <Text category="h1">Waste Diary</Text>
    </Layout>
  );
}

const styles = StyleSheet.create({});
