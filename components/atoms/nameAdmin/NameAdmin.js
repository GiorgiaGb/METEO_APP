import React from "react";
import { View, Text } from "react-native";

import LoginScreen from "../../../screens/loginScreen/LoginScreen";

import NameAdminStyle from "./NameAdmin.style";

const NameAdmin = (props) => {
  return (
    <View style={NameAdminStyle.screen}>
      <Text style={[NameAdminStyle.title, props.style]}>{props.username}</Text>
    </View>
  );
};

export default NameAdmin;
