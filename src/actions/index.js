const weatherRequested = () =>{
    return{
        type:'FETCH_WEATHER_REQUEST'
    }
}

const weatherSuccess = (data) =>{
    return{
        type:'FETCH_WEATHER_SUCCESS',
        payload:data
    }
}
const weatherError = () =>{
    return{
        type:'FETCH_WEATHER_FAILED'
    }
}

const updateTime = (str)=>{
    return{
        type:'UPDATE_TIME',
        payload:str
    }
}

const getWeatherThunkCreator = (weather) =>{
    return (dispatch)=>{
        navigator.geolocation.getCurrentPosition(function(position) {
            dispatch(weatherRequested());
            weather.getWeather(position.coords.latitude,position.coords.longitude)
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                dispatch(weatherSuccess(data.current))
            })
            .catch(()=>{
                dispatch(weatherError())
            })
            }); 
    }
}

export{
    getWeatherThunkCreator,
    updateTime
}