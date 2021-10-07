import React, {useEffect} from "react";
import './index.css';
import { getFixTime,getFixMonth } from "../../utilites/index";
import { getWeatherThunkCreator, updateTime } from "../../actions/index";
import WithWeatherService from "../hoc/index";
import { connect } from "react-redux";
import Spiner from "../spiner/index";
import ErrorIndicator from "../errorIndicator/index";
import { useTranslation } from "react-i18next";
import EN from '../../img/EN.png';
import RU from '../../img/RU.png';


const Header=({weather,getWeather, weatherData,
    time,newTime,weatherError,loadingWeather,})=>{
        const { t, i18n } = useTranslation();
        const changeLanguage = (language) => {
            i18n.changeLanguage(language);
          };
    useEffect(()=>{
            getWeather(weather)
            newTime(`${getFixTime(new Date().getHours())}:${getFixTime(new Date().getMinutes())}`)
            setInterval(()=>{
                newTime(`${getFixTime(new Date().getHours())}:${getFixTime(new Date().getMinutes())}`)
            },20000)
    },[])

 if(weatherData.length!==0){
    return(
        <nav className="navbar d-flex">
            <div className="time__weather d-flex">
                <div className="time">{time}</div>
                <div className="weather">
                    <div className="weather__temp">
                        {Math.round(weatherData.temp)}°C
                    </div>
                    <img className="weather__img" src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt='img'/>
                </div>
            </div>
            <div className="date nav-link">
            {getFixTime(new Date().getDate())} {getFixMonth(new Date().getMonth(),t)} {new Date().getFullYear()}
            <button className="translate"  onClick={() => changeLanguage("en")}><img alt='EN' src={EN} width="30px" height="20px"/></button>
            <button className="translate" onClick={() => changeLanguage("ru")}><img alt='EN' src={RU} width="30px" height="20px"/></button>
            </div>
        </nav>
    )
 }
 if(loadingWeather) return <Spiner/>

 if(weatherError) return <ErrorIndicator/>

 return <h3 className="text-center">Разрешите доступ к вашей геолокации</h3>
    
}
const mapStateToProps = ({weatherData,weatherError,loadingWeather,time}) =>{
    return{
        weatherData,
        weatherError,
        loadingWeather,
        time
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getWeather:(weather)=>{
            dispatch(getWeatherThunkCreator(weather))
        },
        newTime:(str)=>{
            dispatch(updateTime(str))
        }
    }
} 


export default WithWeatherService()(connect(mapStateToProps,mapDispatchToProps)(React.memo(Header)))