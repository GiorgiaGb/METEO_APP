import React from "react";
import { View } from "react-native";
import styles from "./DetailCityHeader.style";
import Colors from "../../../costants/Colors";
import { TouchableOpacity } from "react-native";

import ButtonAdd from "../../atoms/buttonAdd/ButtonAdd";

import CityNameCard from "../../atoms/cityNameCard/CityNameCard";
import DateCard from "../../atoms/dateCard/DateCard";
import WeatherState from "../../atoms/weatherState/WeatherState";
import TemperatureCard from "../../atoms/temperatureCard/TemperatureCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const DetailCityHeader = ({
  cityName,
  weatherState,
  day,
  date,
  month,
  temperature,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <MaterialCommunityIcons
            name="arrow-left"
            color={Colors.accent}
            size={40}
          />
        </TouchableOpacity>
        <CityNameCard cityName={cityName} />
        <ButtonAdd style={styles.button} />
      </View>
      <DateCard style={styles.date} day={day} date={date} month={month} />
      <WeatherState weatherState={weatherState} />
      <View style={styles.tempContainer}>
        <MaterialCommunityIcons
          name="weather-sunny"
          color={Colors.accent}
          size={80}
        />
        <TemperatureCard style={styles.temperature} temperature={temperature} />
      </View>
    </View>
  );
};

export default DetailCityHeader;
