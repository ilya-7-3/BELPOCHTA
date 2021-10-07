import React from "react";
import './index.css'
import { useRef } from "react";
import arrowRight from '../../img/arrowRight.png'
import arrowLeft from '../../img/arrowLeft.png'
import Logo from "../logo/index";

const Carousel = () =>{
    const firstItem = useRef(null);
    const secondItem = useRef(null);

const itemActive = () =>{
    firstItem.current.classList.toggle('active')
    secondItem.current.classList.toggle('active')
}


    return(
        <div id="carouselExampleControls" className="carousel" data-ride="carousel">
  <div className="carousel-inner">
    <div ref={firstItem} className="carousel-item active first__slider">
      <Logo width="169" height="194"/>
    </div>     
    <div ref={secondItem} className="carousel-item second__slider">
      <Logo width="169" height="194"/>
    </div>
  </div>
  <a onClick={itemActive} className="carousel-control-prev" href='# ' role="button" data-slide="prev">
    <span className="arrow__img" ><img src={arrowLeft} alt='arrow'/></span>
  </a>
  <a onClick={itemActive} className="carousel-control-next" href='# ' role="button" data-slide="next">
    <span className="arrow__img" ><img src={arrowRight} alt='arrow'/></span>
  </a>
</div>
    )
}

export default Carousel