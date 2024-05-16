import { StyleSheet } from "react-native";
import Colors from "../../../costants/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    padding: 5,
  },
  screen: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 50,
    paddingHorizontal: 10,
  },
  button: {
    borderColor: Colors.accent,
    color: Colors.accent,
  },
  date: {
    flexDirection: "row",
    padding: 10,
  },
  tempContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 25,
    marginLeft: 30,
  },

  temperature: {
    fontSize: 120,
    marginLeft: 20,
  },
});

export default styles;
