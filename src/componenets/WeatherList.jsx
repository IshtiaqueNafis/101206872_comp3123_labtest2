import React, {useEffect} from 'react';
import WeatherHeader from "./WeatherHeader";
import WeatherListDay from "./WeatherListDay";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentWeatherData} from "../redux/WeatherSliceReducer";

const WeatherList = () => {

    const {singleDayData, weatherData, status, error} = useSelector(state => state.weather);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentWeatherData())
    }, [dispatch])


    return (
        <div className="col-lg-8 grid-margin stretch-card">

            <div className="card card-weather">

                <WeatherHeader singleweather={singleDayData}/>

                <WeatherListDay/>

            </div>
        </div>
    );
};

export default WeatherList;
