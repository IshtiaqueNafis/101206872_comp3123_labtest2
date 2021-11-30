import {configureStore} from "@reduxjs/toolkit";
import WeatherReducer from "./WeatherSliceReducer";

const store = configureStore({
    reducer: {
        weather: WeatherReducer
    }
})
export default store;