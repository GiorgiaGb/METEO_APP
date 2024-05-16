import { StyleSheet } from "react-native";
import Colors from "../../../costants/Colors";

const DayTempImgStyle = StyleSheet.create({
  card: {
    flexDirection: "column",

    backgroundColor: "rgba(128,128,128,0.2)",

    marginBottom: 110,
    paddingVertical: 13,
    borderRadius: 12,
    width: 130,
    margin: 7,
    alignItems: "center",
    height: 195,
    /*shadowColor: Colors.primary,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.1,*/
  },
  tempCard: {
    marginTop: 50,
    color: "red",
  },
});

export default DayTempImgStyle;
