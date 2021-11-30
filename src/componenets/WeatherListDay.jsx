import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCurrentWeatherData, getsevenDayforcast} from "../redux/WeatherSliceReducer";
import Loader from "./Loader";

const WeatherListDay = () => {
    const {weatherData, status, error} = useSelector(state => state.weather);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getsevenDayforcast());
    }, [dispatch]);

    if((status && weatherData?.length > 0)) return  <Loader/>



    return (
        <div className="card-body p-0">

            <div className="d-flex weakly-weather">
                {weatherData.map((
                    weather=> <div className="weakly-weather-item" key={weather.temp}>
                    <p className="mb-0"> {weather.date} </p>
                        <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt=""/>
                        <p>{weather.description}</p>
                    <p className="mb-0"> {weather.temp} </p>
                </div>))}



            </div>
        </div>

    );
};

export default WeatherListDay;
