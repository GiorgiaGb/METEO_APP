import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { store } from "./store/store";
import { Provider } from "react-redux";

import HomeScreen from "./screens/homeScreen/HomeScreen";
import DetailScreen from "./screens/detailScreen/DetailScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";

import Colors from "./costants/Colors";

//import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          //r stile={AppStyle.menu}
          screenOptions={{
            tabBarStyle: {
              height: 70,
              margin: 20,
              borderRadius: 20,
              shadowColor: Colors.primary,
              shadowOffset: { width: 1, height: 3 },
              shadowOpacity: 0.3,
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 0,
            },
          }}
        >
          <Tab.Screen
            name="Root"
            component={Root}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="home-outline"
                  color={Colors.primary}
                  size={40}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={DetailScreen}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="magnify"
                  color={Colors.primary}
                  size={40}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Location"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="map-marker-outline"
                  color={Colors.primary}
                  size={40}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
