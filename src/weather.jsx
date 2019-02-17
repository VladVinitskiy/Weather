import React from 'react';

const Weather = ({currentTemp,minTemp,maxTemp,city,sunrise,sunset,main,description,error})=>(
    <div className='infoWeath'>
        {city ?
            <div>
                <h3>{city}</h3>
                <div className="wrap">
                    <div className="left col-sm-6">
                        <p>currentTemp: {currentTemp}</p>
                        <p>minTemp: {minTemp}</p>
                        <p>maxTemp: {maxTemp}</p>
                    </div>
                    <div className="right col-sm-6">
                        <p>Sunrise: {sunrise}</p>
                        <p>Sunset: {sunset}</p>
                        <p>State: {main}</p>
                    </div>
                </div>
                <h6>{description}</h6>
            </div>:
            <p className='error'>{error}</p>
        }
    </div>
);

 export default Weather;