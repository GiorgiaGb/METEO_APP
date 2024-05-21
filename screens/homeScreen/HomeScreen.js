import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Header from "../../components/molecules/header/Header";
import AddCityButton from "../../components/molecules/AddCityButton/AddCityButton";
import MeteoCard from "../../components/organisms/meteoCards/MeteoCard";
import { setCities } from "../../store/weatherReducer";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const storeData = async (props) => {
    try {
      const jsonCities = JSON.stringify(props);
      await AsyncStorage.setItem("cities", jsonCities);
    } catch (e) {
      console.error(e);
    }
  };

  const getData = async () => {
    try {
      const jsonCities = await AsyncStorage.getItem("cities");
      if (jsonCities && jsonCities.length > 0) {
        dispatch(setCities(JSON.parse(jsonCities)));
      } else {
        setCities([
          { name: "Turin" },
          { name: "Cologne" },
          { name: "Chieti" },
          { name: "London" },
        ]);
        storeData([
          { name: "Turin" },
          { name: "Cologne" },
          { name: "Chieti" },
          { name: "London" },
        ]);
      }
      return jsonCities != null ? jsonCities : null;
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <View>
      <Header />
      <AddCityButton />
      <MeteoCard />
    </View>
  );
};

export default HomeScreen;
