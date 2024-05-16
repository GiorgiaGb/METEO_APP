import React from "react";
import { Text } from "react-native";
import GradientBarStyle from "./GradientBar.style";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../../costants/Colors";
const GradientBar = () => {
  return (
    <LinearGradient
      colors={["rgba(255,255,255,0.1)", Colors.accent]}
      style={GradientBarStyle.screen}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0 }}
    />
  );
};

export default GradientBar;
