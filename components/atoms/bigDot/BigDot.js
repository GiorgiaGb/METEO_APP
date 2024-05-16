import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../../costants/Colors";

const BigDot = () => {
  return (
    <MaterialCommunityIcons
      name="circle-medium"
      color={Colors.accent}
      size={80}
    />
  );
};
export default BigDot;
