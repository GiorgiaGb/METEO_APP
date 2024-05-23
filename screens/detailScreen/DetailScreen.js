import React from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import DetailScreenStyle from "./DetailScreen.style";

import DetailCityHeader from "../../components/molecules/detailCityHeader/DetailCityHeader";
import WeatherWeek from "../../components/organisms/weatherWeek/WeatherWeek";

import TimeTempBar from "../../components/organisms/timeTempBar/TimeTempBar";
import WeatherColors from "../../costants/WeatherColors";

const DetailScreen = (props) => {
  const { currentCity, username } = props.route.params;
  const { name, main, weather } = currentCity;

  return (
    <LinearGradient
      colors={
        WeatherColors[currentCity.weather[0].main]?.color || [
          "#5679e4",
          "#5d94ee",
          "#71aef4",
        ]
      }
    >
      <View style={DetailScreenStyle.screen}>
        <DetailCityHeader
          style={DetailScreenStyle.prova}
          cityName={name}
          day={new Date().toLocaleDateString(undefined, { weekday: "long" })}
          date={new Date().getDate()}
          month={new Date().toLocaleDateString(undefined, { month: "long" })}
          weatherState={WeatherColors[currentCity.weather[0].main].title}
          weather-partly-lightning
          temperature={Math.floor(currentCity.main.temp) + "°"}
          username={username}
        />
      </View>
      <View style={DetailScreenStyle.tempDay}>
        <TimeTempBar city={currentCity.name} />
      </View>
      <View style={DetailScreenStyle.card}>
        <WeatherWeek city={currentCity.name} />
      </View>
    </LinearGradient>
  );
};

export default DetailScreen;
