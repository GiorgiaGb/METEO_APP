import { createSlice } from "@reduxjs/toolkit";
import { getWeather, getForecast } from "./weatherAction";
import moment from "moment-timezone";

const initState = {
  APIdata: [],
  isLoading: false,
  isForecastLoading: false,
  forecastHour: [],
  forecastDaily: [],
  cities: [
    { name: "London" },
    { name: "Rome,IT" },
    { name: "Turin" },
    { name: "Chieti" },
  ],
};
export const weatherReducer = createSlice({
  name: "weather",
  initialState: initState,
  reducers: {
    addCity(state, action) {
      console.log(action.payload);
      state.cities.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWeather.fulfilled, (state, action) => {
      state.APIdata = action.payload;
      state.isLoading = false;
      console.log("fulfilled");
    });
    builder.addCase(getWeather.pending, (state, action) => {
      state.isLoading = true;
      console.log("loading");
    });
    builder.addCase(getForecast.fulfilled, (state, action) => {
      state.forecastDaily = action.payload;
      state.forecastHour = action.payload.list
        .filter((item, index) => index <= 5) //primi 5 gg
        .map((item) => {
          //mappo il mio array di risultati in base al filter
          return {
            temp: item.main.temp,
            time: moment(item.dt_txt).format("h a"),
          };
        });
      state.forecastDaily = action.payload.list
        .filter((item) => {
          return item.dt_txt.endsWith("15:00:00");
        })
        .map((day) => {
          return {
            date: moment(day.dt_txt).format("dddd"),
            temp: day.main.temp,
            weather: day.weather[0].main, //per card scrollable
          };
        });
      state.isForecastLoading = false;
    });
    builder.addCase(getForecast.pending, (state, action) => {
      state.isForecastLoading = true;
    });
  },
});

export const { addCity } = weatherReducer.actions;
export default weatherReducer.reducer;
