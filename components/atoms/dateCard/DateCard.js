import React from "react";
import { View, Text } from "react-native";

import DateCardStyle from "./DateCard.style";

const DateCard = (props) => {
  return (
    <View style={[DateCardStyle.screen, props.style]}>
      <Text style={DateCardStyle.date}>
        {props.day} {props.date},
      </Text>

      <Text style={DateCardStyle.date}>{props.month}</Text>
    </View>
  );
};

export default DateCard;
