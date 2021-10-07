import React from 'react'
import { WeatherConsumer } from '../context/index'

const WithWeatherService = () =>(Wrapped)=>{
    return (props)=>{
        return(
            <WeatherConsumer>
            {
                (weather)=>{
                    return (<Wrapped {...props}
                    weather={weather}/>)
                }
            }
            </WeatherConsumer>
        )
    }
}
export default WithWeatherService