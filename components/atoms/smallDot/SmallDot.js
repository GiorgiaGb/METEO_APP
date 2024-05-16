import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../../costants/Colors";

const SmallDot = () => {
  return (
    <MaterialCommunityIcons
      name="circle-small"
      color={Colors.accent}
      size={80}
    />
  );
};
export default SmallDot;
