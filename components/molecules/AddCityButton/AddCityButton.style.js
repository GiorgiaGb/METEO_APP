import { Button, StyleSheet } from "react-native";

import Colors from "../../../costants/Colors";

const AddCityButtonStyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(128,128,128,0.5)",
  },
  boxTitle: {
    fontSize: 25,
    fontWeight: "700",
    color: Colors.primary,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "85%",
    height: "30%",
    shadowColor: "#000",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    fontSize: 30,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: Colors.accent,
  },
  inputText: {
    fontSize: 20,
  },
  buttonClose: {
    backgroundColor: Colors.primary,
    padding: 15,
  },
  textStyle: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 15,
  },
  itemsBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  symbol: {
    left: 40,
    bottom: 10,
    fontSize: 30,
    fontWeight: "600",
    color: Colors.primary,
  },
});

export default AddCityButtonStyle;
