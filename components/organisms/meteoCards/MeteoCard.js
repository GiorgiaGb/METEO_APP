import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getWeather } from "../../../store/weatherAction";
import { useNavigation } from "@react-navigation/native";
import moment from "moment-timezone";
import CityDateTimeTemperature from "../../molecules/city-date-time/CityDateTime";
import axios from "axios";
import WeatherColors from "../../../costants/WeatherColors";

// const api = {
//   key: "83a0c1c39c134f0f56778bbf1aefeccb",
//   base: "https://api.openweathermap.org/data/2.5/",
// };

const MeteoCard = (props) => {
  const { APIdata, isLoading, cities } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [currentDateTime, setCurrenteDateTime] = useState(new Date());

  // const getLocalTime = (cityName, currentDateTime) => {
  //   const cityTimezone = moment.tz.guess(true); // Ottieni il fuso orario locale del dispositivo
  //   const cityLocalTime = moment.tz(currentDateTime, cityTimezone).tz(cityName);
  //   return cityLocalTime.format("hh:mm A");
  // };

  const [data, setData] = useState();
  //const [isLoading, setIsLoading] = useState(true);

  const [currentDateATime, setCurrentDateATime] = useState(new Date());

  useEffect(() => {
    dispatch(getWeather({ cities }));
  }, [cities]);

  // useEffect(() => {
  //   const fetchCityData = async () => {
  //     try {
  //       const promises = cities.map((item) =>
  //         axios.get(
  //           `${api.base}weather?q=${item.name}&appid=${api.key}&units=metric`
  //         )
  //       );
  //       const responses = await Promise.all(promises);
  //       const data = responses.map((response) => response.data);

  //       setData(data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.warn("Error fetching data:", error);
  //     }
  //   };
  //   fetchCityData();

  //   const interval = setInterval(() => {
  //     setCurrentDateATime(new Date());
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [cities]);

  // /useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrenteDateTime(new Date());
  //   }, 1000); //per aggiornare ora e data ogni secondo
  // }, []);

  return (
    <View>
      {isLoading || !APIdata ? (
        <View>
          <Text>Caricamento...</Text>
        </View>
      ) : (
        APIdata && (
          <FlatList
            data={APIdata}
            style={{ height: "68%" }}
            renderItem={(currentCity) => {
              const cityName = currentCity.item.name;
              const temperature = Math.floor(currentCity.item.main.temp) + "°";

              const timeZones = moment.tz.zonesForCountry(
                currentCity.item.sys.country
              );
              const timeZoneName = timeZones[0];
              const currentTime = moment.tz(timeZoneName);
              const time = currentTime.format("hh:mm A");
              const cityWeather = currentCity.item.weather[0].main;
              return (
                <CityDateTimeTemperature
                  cityName={cityName}
                  day={currentDateTime.toLocaleDateString(undefined, {
                    weekday: "long",
                  })}
                  date={currentDateTime.getDate()}
                  month={currentDateTime.toLocaleDateString(undefined, {
                    month: "long",
                  })}
                  time={time}
                  temperature={temperature}
                  imageWeather={
                    "http://openweathermap.org/img/wn/" +
                    WeatherColors[cityWeather]?.icon
                  }
                  colors={
                    WeatherColors[cityWeather]?.color || [
                      "#5679e4",
                      "#5d94ee",
                      "#71aef4",
                    ]
                  } //["#132462", "#355492", "#5986c4"]
                  direction={() => {
                    navigation.navigate("DetailScreen", {
                      currentCity: currentCity.item,
                    });
                  }}
                />
              );
            }}
          />
        )
      )}
    </View>
  );
};
export default MeteoCard;
