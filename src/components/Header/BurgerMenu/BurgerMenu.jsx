import { SvgSelector } from '../../../SvgSelector';
import s from './BurgerMenu.module.scss'

const BurgerMenu = () => {
    return (
        <div className={s.burgermenu}>
            <SvgSelector id='buffer' />
        </div>
    );
}

export default BurgerMenu;