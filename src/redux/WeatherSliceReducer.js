import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {convertTime, getdayfWeek} from "../utlis/utlis";

export const getCurrentWeatherData = createAsyncThunk(
    'Weather/GetWeather',
    async () => {
        return await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=688c270b270d0d5019eb5c314ea85d43').then(result => result.data);
    }
)
export const getsevenDayforcast = createAsyncThunk(
    'Weather/GetWeather7day',
    async () => {
        return await axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=43.7001&lon=-79.4163&exclude=current,hourly,minutely,alerts&appid=688c270b270d0d5019eb5c314ea85d43')
            .then(result => result.data.daily)

    }
);

export const WeatherSlice = createSlice({
    name: 'Weather',
    initialState: {
        singleDayData: {},
        weatherData: [],
        status: false,
        error: null
    },
    extraReducers: {
        [getCurrentWeatherData.pending]: (state, action) => {
            state.staus = true
        },
        [getCurrentWeatherData.fulfilled]: (state, action) => {

            state.singleDayData = {
                name: action.payload.name,
                description: action.payload.weather[0].description,
                icon: action.payload.weather[0].icon,
                date: getdayfWeek(convertTime(action.payload.dt).getDay()),
                temp: action.payload.main.temp,

            }
            state.staus = false
        },
        [getCurrentWeatherData.rejected]: (state, action) => {
            state.error = "Error occurred"
        },
        [getsevenDayforcast.pending]: (state, action) => {
            state.staus = true;
        },
        [getsevenDayforcast.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.weatherData = action.payload.slice(1, 7).map(weather=>({
                temp:weather.temp.min,
                date: getdayfWeek(convertTime(weather.dt).getDay()),
                icon: weather.weather[0].icon,
                description: weather.weather[0].description

            }))
            console.log(state.weatherData);


        },
        [getsevenDayforcast.rejected]: (state, action) => {
            state.error = "Error occurred"
        },
    }

});

export default WeatherSlice.reducer;