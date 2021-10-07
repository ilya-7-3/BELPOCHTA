import React from "react";
import './index.css'
import icon1 from '../../../img/fifthCartIcon.svg'
import Cart from "../../cart/index";
import { Link } from "react-router-dom";
import iconBack from '../../../img/back.svg';
import { useTranslation } from "react-i18next";


const SecondPage=()=>{
    const {t} = useTranslation();

    return(
        <div className="second__page">
            <div className="d-flex">
                <div className="admin__title">{t('description.part9')}</div>
                <Link to='/'><img src={iconBack} alt='img'/></Link>   
            </div>
            
            <div className="carts">
                <Cart id='first' title={t('description.part5')} icon={icon1} path='/page1'/>
                <Cart id='second' title={t('description.part6')} icon={icon1} path='/administrative'/>
                <Cart id='third' title={t('description.part7')} icon={icon1} path='/administrative'/>
                <Cart id='fourth' title={t('description.part8')} icon={icon1} path='/administrative'/>
            </div>
        </div>
    )
}

export default SecondPage