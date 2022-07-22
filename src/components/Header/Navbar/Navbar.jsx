import s from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <ul>
                <NavLink to={'/howtopay'} ><li>Как покупать</li></NavLink>
                <NavLink to={'/sale'} >  <li>Распродажи</li></NavLink>
                <NavLink to={'/prices'} > <li>Цены</li></NavLink>
                <NavLink to={'/help'} ><li>Помощь</li></NavLink>
                <NavLink to={'/bonus'} > <li>Бонусы</li></NavLink>
                <NavLink to={'/blog'} > <li>Блог</li></NavLink>
                <NavLink to={'/shops'} > <li>Магазины</li></NavLink>
            </ul>
        </div>
    );
}

export default Navbar;