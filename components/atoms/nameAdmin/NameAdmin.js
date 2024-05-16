import React from "react";
import { View, Text } from "react-native";

import NameAdminStyle from "./NameAdmin.style";

const NameAdmin = (props) => {
  return (
    <View style={NameAdminStyle.screen}>
      <Text style={[NameAdminStyle.title, props.style]}>Mario</Text>
    </View>
  );
};

export default NameAdmin;
