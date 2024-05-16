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
  cityDateTime: {
    flexDirection: "column",
    padding: 10,
  },
  time: {
    marginTop: 10,
  },
});

export default CardStyle;
