import React, { useEffect } from "react";
import { View, ScrollView, Text } from "react-native";
import { getForecast } from "../../../store/weatherAction";
import { useDispatch, useSelector } from "react-redux";

import DayTempImg from "../../molecules/day-temp-img/DayTempImg";
import WeatherWeekStyle from "./WeatherWeek.style";
import { FlatList } from "react-native";
import WeatherColors from "../../../costants/WeatherColors";

const WeatherWeek = (props) => {
  const city = props.city;
  console.log(city);
  const { isForecastLoading, forecastDaily } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getForecast(city));
  }, []);

  return (
    <View style={WeatherWeekStyle.container}>
      {isForecastLoading || !forecastDaily ? (
        <View>
          <Text>Caricamento...</Text>
        </View>
      ) : (
        forecastDaily && (
          <ScrollView style={WeatherWeekStyle.scroll}>
            <FlatList
              data={forecastDaily}
              style={{ width: "100%" }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={(weather) => {
                // console.log(WeatherColors[weather.item.weather]?.icon);
                return (
                  <DayTempImg
                    weekDay={weather.item.date}
                    tempDay={Math.floor(weather.item.temp) + "°"}
                    imageWeather={
                      "http://openweathermap.org/img/wn/" +
                      WeatherColors[weather.item.weather]?.icon +
                      "@2x.png"
                    }
                  />
                );
              }}
            />
          </ScrollView>
        )
      )}
    </View>
  );
};

export default WeatherWeek;

//<DayTempImg weekDay="Saturday" tempDay="18°" />
//         <DayTempImg weekDay="Sunday" tempDay="21°" />
//         <DayTempImg weekDay="Monday" tempDay="18°" />
//         <DayTempImg weekDay="Tuesday" tempDay="15°" />
