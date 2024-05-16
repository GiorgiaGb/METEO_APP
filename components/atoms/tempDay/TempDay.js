import React from "react";
import { View, Text } from "react-native";
import TempDayStyle from "./TempDay.style";

const TempDay = (props) => {
  return <Text style={TempDayStyle.screen}>{props.tempDay}</Text>;
};

export default TempDay;
