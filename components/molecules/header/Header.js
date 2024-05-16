import React from "react";
import { View } from "react-native";
import TitleHeader from "../../atoms/titleHeader/TitleHeader";
import NameAdmin from "../../atoms/nameAdmin/NameAdmin";

import TitleHeaderStyle from "../../atoms/titleHeader/TitleHeader.style";

const Header = () => {
  return (
    <View style={TitleHeaderStyle.screen}>
      <TitleHeader />
      <NameAdmin />
    </View>
  );
};

export default Header;
