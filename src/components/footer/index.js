import React from 'react';
import './index.css';
import Logo from '../logo/index';
import icon from '../../img/tehnoSky2.png'
import { useTranslation } from "react-i18next";


const Footer=()=>{
    const {t} = useTranslation();
  return (
        <footer>
            <div className="descr__logo">
                <div className="descr first">
                    {t('description.part11')}
                </div>
                <Logo width="55" height="80" className="logo"/>
                <div className="descr second">
                    {t('description.part12')}
                </div>
            </div>
            <div className="develop">
                <a href=' ' className="develop__descr">{t('description.part13')}</a>
                <a href=' '><img className="develop__company" src={icon} alt="img"/></a>
                <a href=' ' className="develop__descr">High-tech.by</a>
            </div>

        </footer>
  );
}

export default Footer;
