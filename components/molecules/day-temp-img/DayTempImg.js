import React from "react";
import { View, Text } from "react-native";

import WeekDay from "../../atoms/weekDay/WeekDay";
import TempDay from "../../atoms/tempDay/TempDay";
import DayTempImgStyle from "./DayTempImg.style";
import ImageWeather from "../../atoms/imageWeather/ImageWeather";

const DayTempImg = ({ weekDay, tempDay, imageWeather }) => {
  return (
    <View style={DayTempImgStyle.card}>
      <WeekDay weekDay={weekDay} />
      <TempDay tempDay={tempDay} />
      <ImageWeather imageWeather={imageWeather} />
    </View>
  );
};

export default DayTempImg;
