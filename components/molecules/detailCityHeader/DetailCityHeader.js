import React, { useState } from "react";
import { View, Text, Modal, Pressable } from "react-native";
import styles from "./DetailCityHeader.style";
import Colors from "../../../costants/Colors";
import { TouchableOpacity } from "react-native";

import ButtonAdd from "../../atoms/buttonAdd/ButtonAdd";

import CityNameCard from "../../atoms/cityNameCard/CityNameCard";
import DateCard from "../../atoms/dateCard/DateCard";
import WeatherState from "../../atoms/weatherState/WeatherState";
import TemperatureCard from "../../atoms/temperatureCard/TemperatureCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { removeCity } from "../../../store/weatherReducer";

const DetailCityHeader = ({
  cityName,
  weatherState,
  day,
  date,
  month,
  temperature,
}) => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  // const [isNewArray, setNewArray] = useState("");
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <MaterialCommunityIcons
            name="arrow-left"
            color={Colors.accent}
            size={40}
          />
        </TouchableOpacity>
        <CityNameCard cityName={cityName} />
        <View style={styles.containerButtonDelete}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.cancelButton}>Delete</Text>
          </TouchableOpacity>
          <Modal
            visible={isModalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={() => {
              setModalVisible(!isModalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.itemsBox}>
                  <Text style={styles.boxTitle}>
                    Eliminare{" "}
                    <Text style={{ fontWeight: "800" }}>{cityName}</Text> da
                    elenco?
                  </Text>
                </View>
                <View style={styles.buttonsBox}>
                  <TouchableOpacity
                    style={[styles.buttonConfirm, styles.buttonClose]}
                    onPress={() => {
                      console.log("Removing city:", cityName);
                      setModalVisible(!isModalVisible);
                      dispatch(removeCity(cityName));
                    }}
                  >
                    <Text style={styles.textStyle}>Conferma</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.buttonCancel, styles.buttonClose]}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.textStyle}>Annulla</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
      <DateCard style={styles.date} day={day} date={date} month={month} />
      <WeatherState weatherState={weatherState} />
      <View style={styles.tempContainer}>
        <MaterialCommunityIcons
          name="weather-sunny"
          color={Colors.accent}
          size={80}
        />
        <TemperatureCard style={styles.temperature} temperature={temperature} />
      </View>
    </View>
  );
};

export default DetailCityHeader;
