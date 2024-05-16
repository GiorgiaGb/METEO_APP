import React, { useEffect } from "react";
import { View, Text } from "react-native";
import TimeTempLine from "../../atoms/timeTempLine/TimeTempLine";
import DotLine from "../../molecules/dotLine/DotLine";
import TimeTempBarStyle from "./TimeTempBar.style";

import { getForecast } from "../../../store/weatherAction";
import { useDispatch, useSelector } from "react-redux";

//import moment from "moment-timezone";

const TimeTempBar = (props) => {
  const city = props.city;
  console.log(city);
  const { isForecastLoading, forecastHour, forecastDaily } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getForecast(city));
  }, []);

  return (
    /*<View style={TimeTempBarStyle.container}>

      <View style={TimeTempBarStyle.layer}>
        <TimeTempLine
          timeLine="Now"
          tempLine="22°"
          style={TimeTempBarStyle.firstState}
        ></TimeTempLine>

        <TimeTempLine
          timeLine="4 p.m"
          style={TimeTempBarStyle.primo}
          tempLine="20°"
        ></TimeTempLine>
        <TimeTempLine timeLine="5 p.m" tempLine="20°"></TimeTempLine>
        <TimeTempLine timeLine="6 p.m" tempLine="19°"></TimeTempLine>
        <TimeTempLine timeLine="7 p.m" tempLine="17°"></TimeTempLine>
        <TimeTempLine timeLine="8 p.m" tempLine="15°"></TimeTempLine>
      </View>
      <View style={TimeTempBarStyle.dotLine}>
        <DotLine></DotLine>
      </View>
    </View>*/
    <View style={TimeTempBarStyle.container}>
      {isForecastLoading || !forecastHour ? (
        <View>
          <Text>Caricamento...</Text>
        </View>
      ) : (
        <View style={TimeTempBarStyle.layer}>
          {forecastHour.map((item, index) => (
            <TimeTempLine
              key={index}
              timeLine={index === 0 ? "Now" : `${item.time}`}
              tempLine={`${Math.floor(item.temp)}°`}
              style={
                index === 0
                  ? TimeTempBarStyle.firstState
                  : TimeTempBarStyle.primo
              }
            />
          ))}
        </View>
      )}
      <View style={TimeTempBarStyle.dotLine}>
        <DotLine />
      </View>
    </View>
  );
};

export default TimeTempBar;
