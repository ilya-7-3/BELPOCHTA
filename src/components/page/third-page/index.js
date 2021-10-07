import React from "react";
import './index.css'
import home from '../../../img/Home.png';
import iconBack from '../../../img/back.svg';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const ThirdPage=()=>{
    const {t} = useTranslation();
    return(
        <div className="third__page">
            <div className="d-flex">
                <Link to='/'><img src={home} alt='img'/></Link>   
                <div className="admin__title">{t('description.part5')}</div>
                <Link to='/administrative'><img src={iconBack} alt='img'/></Link>   
            </div>
            <div className="text mt-1">
            {t('description.part10')}
            </div>

        </div>
    )
}

export default ThirdPage