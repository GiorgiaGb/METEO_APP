import { StyleSheet } from "react-native";
import Colors from "../../costants/Colors";
const LoginScreenStyle = StyleSheet.create({
  screen: {
    backgroundColor: Colors.accent,
    flex: 1,
    alignItems: "center",
  },
  container: {
    //backgroundColor: "rgba(128,128,128,0.2)",
    width: 300,
    height: 400,

    justifyContent: "space-around",

    marginVertical: 200,
  },
  boxTitle: {
    top: 90,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "700",
    color: Colors.primary,
  },
  inputText: {
    fontSize: 20,
  },
  nameBox: {
    borderWidth: 2,
    borderBlockColor: Colors.primary,
    borderRadius: 8,
    padding: 10,
  },
  button: {
    marginHorizontal: 50,
    width: 200,
    borderRadius: 20,
    padding: 12,
    elevation: 2,
    backgroundColor: Colors.primary,
  },
  textStyle: {
    color: Colors.accent,
    fontWeight: "500",
    textAlign: "center",
    fontSize: 20,
  },
});
export default LoginScreenStyle;
