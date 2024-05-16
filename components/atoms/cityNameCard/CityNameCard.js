import React from "react";
import { View,Text } from "react-native";
import CityNameCardStyle from "./CityNameCard.style";

const CityNameCard = (props) => {
    return(
        <Text style={CityNameCardStyle.city}>{props.cityName}</Text>
    );
};

export default CityNameCard;