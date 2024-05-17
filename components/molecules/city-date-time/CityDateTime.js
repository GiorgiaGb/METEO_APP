import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import CardStyle from "./CityDateTime.style";

import CityNameCard from "../../atoms/cityNameCard/CityNameCard";
import ImageWeather from "../../atoms/imageWeather/ImageWeather";
import DateCard from "../../atoms/dateCard/DateCard";
import TemperatureCard from "../../atoms/temperatureCard/TemperatureCard";
import TimeOnCard from "../../atoms/cityTime/Time";
import { LinearGradient } from "expo-linear-gradient";

const CityDateTimeTemperature = ({
  cityName,
  day,
  date,
  month,
  time,
  temperature,
  imageWeather,
  colors,
  direction,
}) => {
  return (
    <TouchableOpacity onPress={direction}>
      <LinearGradient
        style={CardStyle.container}
        colors={colors || ["#132462", "#355492", "#5986c4"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={CardStyle.directionElement}>
          <View style={CardStyle.cityDateTime}>
            <CityNameCard cityName={cityName} />
            <DateCard day={day} date={date} month={month} />
            <View style={CardStyle.time}>
              <TimeOnCard time={time} />
            </View>
          </View>
          <ImageWeather imageWeather={imageWeather} />
          <TemperatureCard
            temperature={temperature}
            style={CardStyle.tempStyle}
          />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CityDateTimeTemperature;
