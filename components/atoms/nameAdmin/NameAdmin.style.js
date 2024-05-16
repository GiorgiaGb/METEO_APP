import { StyleSheet } from "react-native";

import Colors from "../../../costants/Colors";

const NameAdminStyle = StyleSheet.create({
    screen:{
    
        alignItems: 'center',
        alignContent: 'center'
    },
    title: {
        fontSize: 35,
        fontWeight: '700',
        color: Colors.primary,
    }
});

export default NameAdminStyle;