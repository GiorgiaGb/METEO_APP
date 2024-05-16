import { StyleSheet } from "react-native";
import Colors from "../../../costants/Colors";

const ButtonAddStyle = StyleSheet.create({
  buttonContainer: {
    width: 23,
    height: 23,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 7,
    justifyContent: "center",
    marginRight: 10,
  },
  button: {
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
    color: Colors.primary,
  },
});
export default ButtonAddStyle;
