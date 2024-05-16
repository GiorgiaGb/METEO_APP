import React from "react";

import { View, Text } from "react-native";

import SmallDot from "../../atoms/smallDot/SmallDot";
import BigDot from "../../atoms/bigDot/BigDot";
import DotLineStyle from "./DotLine.style";
import GradientBar from "../../atoms/gradientBar/GradientBar";
import TimeTempLine from "../../atoms/timeTempLine/TimeTempLine";

const DotLine = () => {
  return (
    <View>
      <View style={DotLineStyle.screen}>
        <BigDot></BigDot>
        <SmallDot></SmallDot>
        <SmallDot></SmallDot>
        <SmallDot></SmallDot>
        <SmallDot></SmallDot>
        <SmallDot></SmallDot>
      </View>
      <GradientBar></GradientBar>
    </View>
  );
};
export default DotLine;
