import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../../costants/Colors";

const HomeIcon = () => {
  return (
    <Tab.Screen
      name="Root"
      component={Root}
      options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="home"
            color={Colors.primary}
            size={40}
          />
        ),
      }}
    />
  );
};

export default HomeIcon;
