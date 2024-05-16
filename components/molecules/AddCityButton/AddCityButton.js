import React, { useState } from "react";
import {
  View,
  Modal,
  TextInput,
  Pressable,
  TouchableOpacity,
  Text,
} from "react-native";
import ButtonAdd from "../../atoms/buttonAdd/ButtonAdd";
import TextAddCity from "../../atoms/textAddCity/TextAddCity";
import AddCityButtonStyle from "./AddCityButton.style";

import { addCity } from "../../../store/weatherReducer";
import { useDispatch } from "react-redux";

const AddCityButton = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = useState("");

  const dispatch = useDispatch();

  return (
    <View style={AddCityButtonStyle.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>
          {" "}
          <ButtonAdd />
          <TextAddCity />
        </Text>
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}
      >
        <View style={AddCityButtonStyle.centeredView}>
          <View style={AddCityButtonStyle.modalView}>
            <Text style={AddCityButtonStyle.boxTitle}>Aggiungi una città!</Text>
            <TextInput
              style={AddCityButtonStyle.inputText}
              placeholder="Inserisci una città"
              onChangeText={onChangeText}
              value={text}
            />
            <Pressable
              style={[
                AddCityButtonStyle.button,
                AddCityButtonStyle.buttonClose,
              ]}
              onPress={() => {
                setModalVisible(!isModalVisible);
                dispatch(addCity(text));
                onChangeText("");
              }}
            >
              <Text style={AddCityButtonStyle.textStyle}>
                Aggiungi ai Preferiti
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddCityButton;
