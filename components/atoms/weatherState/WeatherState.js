import React from "react";
import { View, Text } from "react-native";
import WeatherStateStyle from "./WeatherState.style";

const WeatherState = (props) => {
  return (
    <View>
      <Text style={WeatherStateStyle.screen}>{props.weatherState}</Text>
    </View>
  );
};

export default WeatherState;
