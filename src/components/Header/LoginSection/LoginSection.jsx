import { SvgSelector } from '../../../SvgSelector';
import s from './LoginSection.module.scss'
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useState } from 'react';
import OpenBurger from '../BurgerMenu/OpenBurger';

const LoginSection = () => {

    const [burger, setBurger] = useState('closed')

    function openBurger() {
        burger === 'closed' ? (setBurger('open')) : (setBurger('closed'))
        console.log(burger)

    }

    return (
        <div className={s.loginsection}>
            <div className={s.enter}>
                <SvgSelector id='user' />
                <div className={s.entertext}>Вход</div>
            </div>
            <div className={s.followbtn}>
                <button className={s.follow}>Связаться с нами</button>
            </div>
            <div onClick={(e) => { openBurger() }} className={s.burgermenu}> <BurgerMenu /></div>
            <div className={s.openburger}> <OpenBurger open={burger} /> </div>
        </div>
    );
}

export default LoginSection;