import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import LoginScreenStyle from "./LoginScreen.style";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");

  return (
    <View style={LoginScreenStyle.screen}>
      <Text style={LoginScreenStyle.boxTitle}>Esegui l'accesso</Text>
      <View style={LoginScreenStyle.container}>
        <View style={LoginScreenStyle.nameBox}>
          <TextInput
            style={LoginScreenStyle.inputText}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={LoginScreenStyle.nameBox}>
          <TextInput
            style={LoginScreenStyle.inputText}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          style={LoginScreenStyle.button}
          onPress={() => {
            navigation.navigate("HomeScreen", { username: username });
          }}
        >
          <Text style={LoginScreenStyle.textStyle}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
