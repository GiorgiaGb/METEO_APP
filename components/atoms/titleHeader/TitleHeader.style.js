import { StyleSheet } from "react-native";

import Colors from "../../../costants/Colors";

const TitleHeaderStyle = StyleSheet.create({
    screen:{
        padding: 25,
        paddingBottom: 5,
        alignItems: 'center',
       
    },
    title: {
        fontSize: 35,
        fontWeight: '700',
        color: Colors.primary,
    }
});

export default TitleHeaderStyle;