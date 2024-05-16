import React from "react";
import { Text } from "react-native";
import TemperatureStyle from "./TemperatureCard.style";

const TemperatureCard = (props) => {
  return (
    <Text style={[TemperatureStyle.temperature, props.style]}>
      {props.temperature}
    </Text>
  );
};

export default TemperatureCard;
