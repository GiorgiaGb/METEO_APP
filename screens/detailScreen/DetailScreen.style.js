import React from "react";
import { StyleSheet } from "react-native";
import TempDay from "../../components/atoms/tempDay/TempDay";

const DetailScreenStyle = StyleSheet.create({
  screen: {
    flexDirection: "column",
  },
  prova: {
    fontSize: 30,
  },

  tempDay: {
    marginTop: 0,
  },
  card: {
    marginTop: 35,
    marginVertical: 60,
  },
});

export default DetailScreenStyle;
