import { SvgSelector } from '../../SvgSelector';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import s from './Header.module.scss'
import LoginSection from './LoginSection/LoginSection';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                <SvgSelector id='logo' />
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