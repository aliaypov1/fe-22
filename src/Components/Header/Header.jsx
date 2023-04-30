import React from 'react';
import style from './Header.module.css'
import MyButton from '../UI/MyButton/FirstButton';
import Logout from '../Logout/Logout';
const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.container}>
            <nav>
                
                <a className={style.header__logo}>UNIPAGE</a>
                <a href="#" className={style.header__link}>О нас</a>
                <a href="#" className={style.header__link}>Услуги</a>
                <a href="#" className={style.header__link}>Контакты</a>
               
                
            </nav>
            <nav>
                <Logout></Logout>
                <MyButton>Оставить заявку</MyButton>
            </nav>
            
            </div>
        </header>
    );
};

export default Header;