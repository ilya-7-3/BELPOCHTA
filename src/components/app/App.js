import React from 'react';
import './App.css';
import Header from '../header';
import Carousel from '../carousel/index';
import {Route} from 'react-router-dom';
import FirstPage from '../page/first-page/index';
import SecondPage from '../page/second-page/index';
import Footer from '../footer/index';
import ThirdPage from '../page/third-page/index';
import { useSelector } from 'react-redux';

const App=()=>{
  const weather = useSelector(state => state.weatherData)
  
  if(weather.length!==0){
    return (
      <div className="container">
          <Header/>
          <Carousel/>
            <Route path="/" exact component={FirstPage}/>
            <Route path="/administrative" component={SecondPage}/>
            <Route path="/page1" component={ThirdPage}/>
          <Footer/>
      </div>
    );
  }
  return (
    <div className="container">
        <Header/>
    </div>
  );
}

export default App;
