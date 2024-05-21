import { createSlice } from "@reduxjs/toolkit";
import { getWeather, getForecast } from "./weatherAction";
import moment from "moment-timezone";
import AsyncStorage from "@react-native-async-storage/async-storage";
import stringSimilarity from "string-similarity";

const normalizeCityName = (cityName) => {
  return cityName.trim().toLowerCase();
};

const initState = {
  APIdata: [],
  isLoading: false,
  isForecastLoading: false,
  forecastHour: [],
  forecastDaily: [],
  cities: [],
};

export const weatherReducer = createSlice({
  name: "weather",
  initialState: initState,
  reducers: {
    addCity(state, action) {
      console.log(action.payload);
      const cityNameToAdd = action.payload.name;
      const normalizedCityName = normalizeCityName(cityNameToAdd);
      state.cities.push({ name: normalizedCityName }); //città con il nome normalizzato
      const jsonCities = JSON.stringify(state.cities);
      AsyncStorage.setItem("cities", jsonCities);
    },
    removeCity(state, action) {
      console.log("Payload:", action.payload.name);
      const cityNameToRemove = action.payload.name;
      const normalizedCityNameToRemove = normalizeCityName(cityNameToRemove);
      const matches = stringSimilarity.findBestMatch(
        normalizedCityNameToRemove,
        state.cities.map((city) => city.name)
      );
      const bestMatch = matches.bestMatch;
      if (bestMatch.rating > 0.3) {
        const updatedCities = state.cities.filter(
          (item) => item.name !== bestMatch.target
        );
        state.cities = updatedCities;
        console.log("Array aggiornato:", state.cities);
        const jsonCities = JSON.stringify(state.cities);
        AsyncStorage.setItem("cities", jsonCities);
      } else {
        console.log("Nessuna corrispondenza trovata per", cityNameToRemove);
      }
    },
    setCities(state, action) {
      state.cities = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWeather.fulfilled, (state, action) => {
      state.APIdata = action.payload;
      state.isLoading = false;
      console.log("Fulfilled");
    });
    builder.addCase(getWeather.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading");
    });
    builder.addCase(getForecast.fulfilled, (state, action) => {
      state.forecastDaily = action.payload;
      state.forecastHour = action.payload.list
        .filter((item, index) => index <= 5)
        .map((item) => {
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
            weather: day.weather[0].main,
          };
        });
      state.isForecastLoading = false;
    });
    builder.addCase(getForecast.pending, (state, action) => {
      state.isForecastLoading = true;
    });
  },
});

export const { addCity, removeCity, setCities } = weatherReducer.actions;
export default weatherReducer.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { getWeather, getForecast } from "./weatherAction";
// import moment from "moment-timezone";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const initState = {
//   APIdata: [],
//   isLoading: false,
//   isForecastLoading: false,
//   forecastHour: [],
//   forecastDaily: [],
//   cities: [
//     //   { name: "Chieti" },
//     //   { name: "Cologne" },
//     //   { name: "Province of Turin" },
//     //   { name: "London" },
//   ],
// };
// export const weatherReducer = createSlice({
//   name: "weather",
//   initialState: initState,
//   reducers: {
//     addCity(state, action) {
//       console.log(action.payload);
//       state.cities.push(action.payload);
//       const jsonCities = JSON.stringify(state.cities);
//       AsyncStorage.setItem("cities", jsonCities);
//     },
//     removeCity(state, action) {
//       console.log("Payload:", action.payload.name);
//       const updatedCities = state.cities.filter(
//         (item) => item.name !== action.payload.name
//       );
//       state.cities = updatedCities;
//       console.log("array aggiornato:", state.cities);
//       const jsonCities = JSON.stringify(state.cities);
//       AsyncStorage.setItem("cities", jsonCities);
//     },
//     setCities(state, action) {
//       state.cities = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getWeather.fulfilled, (state, action) => {
//       state.APIdata = action.payload;
//       state.isLoading = false;
//       console.log("fulfilled");
//     });
//     builder.addCase(getWeather.pending, (state, action) => {
//       state.isLoading = true;
//       console.log("loading");
//     });
//     builder.addCase(getForecast.fulfilled, (state, action) => {
//       state.forecastDaily = action.payload;
//       state.forecastHour = action.payload.list
//         .filter((item, index) => index <= 5) //primi 5 gg
//         .map((item) => {
//           //mappo il mio array di risultati in base al filter
//           return {
//             temp: item.main.temp,
//             time: moment(item.dt_txt).format("h a"),
//           };
//         });
//       state.forecastDaily = action.payload.list
//         .filter((item) => {
//           return item.dt_txt.endsWith("15:00:00");
//         })
//         .map((day) => {
//           return {
//             date: moment(day.dt_txt).format("dddd"),
//             temp: day.main.temp,
//             weather: day.weather[0].main, //per card scrollable
//           };
//         });
//       state.isForecastLoading = false;
//     });
//     builder.addCase(getForecast.pending, (state, action) => {
//       state.isForecastLoading = true;
//     });
//   },
// });

// export const { addCity, removeCity, setCities } = weatherReducer.actions;
// export default weatherReducer.reducer;
