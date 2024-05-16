import { StyleSheet } from "react-native";
import DotLine from "../../molecules/dotLine/DotLine";

const TimeTempBarStyle = StyleSheet.create({
  layer: {
    flexDirection: "row",
    left: 20,
    width: "90%",
    justifyContent: "space-between",
    position: "relative",
  },
  firstState: {
    fontSize: 25,
    fontWeight: "900",
    paddingTop: 25,
    paddingBottom: 26,
  },
  dotLine: {
    position: "absolute",
    left: 20,
  },
});

export default TimeTempBarStyle;
