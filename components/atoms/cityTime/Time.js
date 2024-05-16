import React from "react";
import { View, Text } from "react-native";
import TimeStyle from "./Time.style";

const TimeOnCard = (props) => {
  return <Text style={TimeStyle.text}>{props.time}</Text>;
};

export default TimeOnCard;
