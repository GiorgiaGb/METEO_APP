import React from "react";
import { StyleSheet } from "react-native";

const CardStyle = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 22,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    height: 125,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.2,
  },
  directionElement: {
    width: 250,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "stretch",
  },
  cityDateTime: {
    flexDirection: "column",
    width: 150,
    marginVertical: 10,
    left: 15,
  },
  tempStyle: {
    left: 35,
  },
  time: {
    marginTop: 5,
  },
});

export default CardStyle;
