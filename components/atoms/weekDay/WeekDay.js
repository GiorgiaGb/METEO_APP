import React from "react";
import { View, Text } from "react-native";
import WeekDayStyle from "./WeekDay.style";

const WeekDay = (props) => {
  return <Text style={WeekDayStyle.screen}>{props.weekDay}</Text>;
};

export default WeekDay;
