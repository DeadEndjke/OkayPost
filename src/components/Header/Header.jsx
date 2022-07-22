import { SvgSelector } from '../../SvgSelector';
import { NavLink } from 'react-router-dom'
import s from './Header.module.scss'
import LoginSection from './LoginSection/LoginSection';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                <NavLink to={'/'} ><SvgSelector id='logo' /></NavLink>
            </div>
            <div className={s.navbar}>
                <Navbar />
            </div>
            <div className={s.loginsection}>
                <LoginSection />
            </div>


        </div>
    );
}

export default Header;