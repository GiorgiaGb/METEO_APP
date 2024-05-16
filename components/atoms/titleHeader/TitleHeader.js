import React from "react";
import { View, Text } from "react-native";

import TitleHeaderStyle from "./TitleHeader.style";

const TitleHeader = () =>{
    return(
        <View style={TitleHeaderStyle.screen}>
     <Text style={TitleHeaderStyle.title}>Good morning!</Text>
     </View>
    );
};

export default TitleHeader;