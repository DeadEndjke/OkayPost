import s from './Navbar.module.scss'

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <ul>
                <li>Как покупать</li>
                <li>Распродажи</li>
                <li>Цены</li>
                <li>Помощь</li>
                <li>Бонусы</li>
                <li>Блог</li>
                <li>Магазины</li>
            </ul>
        </div>
    );
}

export default Navbar;