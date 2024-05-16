import React from "react";
import { View } from "react-native";

import Header from "../../components/molecules/header/Header";
import AddCityButton from "../../components/molecules/AddCityButton/AddCityButton";
import MeteoCard from "../../components/organisms/meteoCards/MeteoCard";

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <AddCityButton />
      <MeteoCard />
    </View>
  );
};

export default HomeScreen;
