import { SvgSelector } from '../../../SvgSelector';
import s from './LoginSection.module.scss'
import { NavLink } from 'react-router-dom'
import Menu from '../Burger/Menu/Menu';

const LoginSection = () => {

    return (
        <div className={s.loginsection}>
            <NavLink to={'/user'} >   <div className={s.enter}>
                <SvgSelector id='user' />
                <div className={s.entertext}>Вход</div>
            </div></NavLink>
            <div className={s.followbtn}>
                <NavLink to={'/contactus'} >  <button className={s.follow}>Связаться с нами</button></NavLink>
            </div>

            <div className={s.openburger}><Menu /></div>
        </div>
    );
}

export default LoginSection;