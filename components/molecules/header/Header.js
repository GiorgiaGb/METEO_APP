import React from "react";
import { View } from "react-native";
import TitleHeader from "../../atoms/titleHeader/TitleHeader";
import NameAdmin from "../../atoms/nameAdmin/NameAdmin";

import TitleHeaderStyle from "../../atoms/titleHeader/TitleHeader.style";

const Header = (props) => {
  return (
    <View style={TitleHeaderStyle.screen}>
      <TitleHeader />
      <NameAdmin username={props.username} />
    </View>
  );
};

export default Header;
