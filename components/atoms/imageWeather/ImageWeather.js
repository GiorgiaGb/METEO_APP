import React from "react";
import { Image, Text, View } from "react-native";

const ImageWeather = (props) => {
  return (
    <View style={props.style}>
      <Image source={{ uri: props.imageWeather }} height={70} width={70} />
    </View>
  );
};

export default ImageWeather;
