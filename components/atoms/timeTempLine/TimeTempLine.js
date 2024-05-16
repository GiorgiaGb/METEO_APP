import React from "react";
import { View, Text } from "react-native";
import TimeTempLineStyle from "./TimeTempLine.style";
import styles from "../../molecules/detailCityHeader/DetailCityHeader.style";

const TimeTempLine = (props) => {
  return (
    <View>
      <Text style={[TimeTempLineStyle.screen, props.style]}>
        {props.timeLine}
      </Text>
      <Text style={[TimeTempLineStyle.screen, props.style]}>
        {props.tempLine}
      </Text>
    </View>
  );
};

export default TimeTempLine;
