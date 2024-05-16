import React from "react";
import { Text, TouchableOpacity } from "react-native";
import ButtonAddStyle from "./ButtonAdd.style";

const ButtonAdd = (props) => {
  return (
    <TouchableOpacity style={[ButtonAddStyle.buttonContainer, props.style]}>
      <Text style={[ButtonAddStyle.button, props.style]}>+</Text>
    </TouchableOpacity>
  );
};
export default ButtonAdd;
