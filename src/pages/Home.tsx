import {
  StyleSheet,
  Text,
  View,
  StatusBar as StatBar,
  Dimensions,
} from "react-native";
import colors from "../theme/colors.json";
import { Octicons } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";
import marginAndPadding from "../theme/marginAndPadding.json";

export default function Home() {
  const barData = [
    { value: 250, label: "M" },
    { value: 500, label: "T", frontColor: "#177AD5" },
    { value: 745, label: "W", frontColor: "#177AD5" },
    { value: 320, label: "T" },
    { value: 600, label: "F", frontColor: "#177AD5" },
    { value: 256, label: "S" },
    { value: 300, label: "S" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.containerMargin}>
        <Text style={styles.title}>Waste Diary</Text>
        <View style={[styles.month, styles.shadow]}>
          <Octicons name="chevron-left" size={16} color={colors.grayMain} />
          <Text style={styles.poppins}>January</Text>
          <Octicons name="chevron-right" size={16} color={colors.grayMain} />
        </View>
        <View style={[styles.monthGraph, styles.shadow]}>
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={
              Dimensions.get("window").width -
              marginAndPadding.marginHorizontal * 2
            } // from react-native
            height={300}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#ffffff",
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(28, 180, 71, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(28, 180, 71, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: colors.greenMain,
              },
            }}
            bezier
            style={{
              borderRadius: marginAndPadding.mainBorderRadius,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greenSub,
    paddingTop: StatBar.currentHeight,
  },

  containerMargin: {
    marginHorizontal: marginAndPadding.marginHorizontal,
  },
  title: {
    fontFamily: "Unbounded-Bold",
    color: colors.greenMain,
    marginVertical: 20,
  },
  poppins: {
    fontFamily: "Poppins",
  },
  monthGraph: {
    backgroundColor: "#fff",
    marginVertical: 15,
    borderRadius: marginAndPadding.mainBorderRadius,
    height: 300,
  },
  month: {
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: marginAndPadding.mainBorderRadius,
    display: "flex",
    flexDirection: "row",
  },
  shadow: {
    shadowColor: "#6dbe9b",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
});
