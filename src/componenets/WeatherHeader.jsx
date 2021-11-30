import React from 'react';

const WeatherHeader = ({singleweather}) => {

    return (
        <>
            <div className="card-body">
                <div className="weather-date-location">
                    <h3>{singleweather.date}</h3>
                    <p className="text-gray"> {singleweather.name}<span
                        className="weather-location"></span>{}</p>
                </div>
                <div className="weather-data d-flex">
                    <div className="mr-auto">
                        <h4 className="display-3">{singleweather.temp} <span className="symbol">°</span>C</h4>
                        <p> {singleweather.description} </p>
                        <img src={`http://openweathermap.org/img/wn/${singleweather.icon}@2x.png`} alt=""/>

                    </div>
                </div>
            </div>
        </>
    );
};

export default WeatherHeader;
