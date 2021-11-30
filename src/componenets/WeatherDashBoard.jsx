import React from 'react';
import WeatherList from "./WeatherList";
import {useSelector} from "react-redux";
import Loader from "./Loader";

const WeatherDashBoard = () => {



    return (
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <WeatherList/>
                </div>
            </div>
        </div>
    );
};


export default WeatherDashBoard;
