const initialState={
    weatherData:[],
    loadingWeather:false,
    weatherError:false,
    time:''
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case 'FETCH_WEATHER_REQUEST':
            return{
                ...state,
                loadingWeather:true
            }
        case 'FETCH_WEATHER_SUCCESS':
            return{
                ...state,
                loadingWeather:false,
                weatherData:action.payload
            }
        case 'FETCH_WEATHER_FAILED':
            return{
                ...state,
                loadingWeather:false,
                weatherError:true
            }   
        case 'UPDATE_TIME':
            return{
                ...state,
                time:action.payload
            }
            
        default:
            return state;
    }    
}


export default reducer