import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWeather = createAsyncThunk("getWeather", async ({ cities }) => {
  try {
    // const APIdata = await axios.get(
    //   "https://api.openweathermap.org/data/2.5/weather?q=London$appid=83a0c1c39c134f0f56778bbf1aefeccb&units=metric"
    // );
    const api = {
      key: "83a0c1c39c134f0f56778bbf1aefeccb",
      base: "https://api.openweathermap.org/data/2.5/",
    };
    console.log(cities);
    const promises = cities.map((item) =>
      axios.get(
        `${api.base}weather?q=${item.name}&appid=${api.key}&units=metric`
      )
    );
    const responses = await Promise.all(promises);
    const data = responses.map((response) => response.data);

    //console.log(data);

    return data;
  } catch (err) {
    console.log(err);
  }
});

export const getForecast = createAsyncThunk("getForecast", async (city) => {
  try {
    const promises = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6396264a12f3ff405e9508bd72955890&units=metric`
    );
    //console.log(promises.data);
    return promises.data;
  } catch (err) {
    console.log(err);
  }
});
