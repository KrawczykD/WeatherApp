import React from 'react'
import './Output.css'

const Output = (props)=>{

    const dataInfo = (
        <>
            <p>Weather city of : <strong>{props.cityName} , {props.countryName}</strong></p>
            <p>Temp : {props.temp} &#176;C</p>
            <p>Pressure : {props.pressure} hPa </p>
            <p>Humidity : {props.humidity} %</p>
            <p>Wind Speed : {props.windSpeed} m/s</p>
            <p>Description : {props.description}</p>
        </>
)

    return(
       <div className="Output">
                {!props.err ? <>{dataInfo}</> : <p>Wrong city or country</p>}

        </div>
      
    )
}

export default Output;

