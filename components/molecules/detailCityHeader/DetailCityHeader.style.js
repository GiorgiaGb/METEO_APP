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
  containerButtonDelete: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(128,128,128,0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "80%",
    height: "20%",
    shadowColor: "#000",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  cancelButton: {
    fontSize: 15,
    color: Colors.accent,
    backgroundColor: "rgba(128,128,128,0.2)",
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  buttonConfirm: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: Colors.primary,
  },
  textStyle: {
    color: "white",
    fontWeight: "400",
    fontSize: 20,
  },
  buttonCancel: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "rgba(128,128,128,0.5)",
  },
  button: {
    borderColor: Colors.accent,
    color: Colors.accent,
  },
  boxTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.primary,
  },
  buttonsBox: {
    width: 300,

    flexDirection: "row",
    justifyContent: "space-evenly",
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
