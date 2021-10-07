import React from "react";
import './index.css'
import icon1 from '../../../img/firstCartIcon.svg'
import icon2 from '../../../img/secondCartIcon.svg'
import icon3 from '../../../img/thirdCartIcon.svg'
import icon4 from '../../../img/fourthCartIcon.svg'
import Cart from "../../cart/index";
import { useTranslation } from "react-i18next";


const FirstPage=()=>{
    const {t} = useTranslation();

    return(
        <div className="first__page">
            <div className="carts">
                    <Cart id='first' title={t('description.part1')} icon={icon1} path='/administrative'/>
                    <Cart id='second' title={t('description.part2')} icon={icon2}/>
                    <Cart id='third' title={t('description.part3')} icon={icon3}/>
                    <Cart id='fourth' title={t('description.part4')} icon={icon4}/>
                </div>        
        </div>
    )
}

export default FirstPage