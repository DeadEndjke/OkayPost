import { Routes, Route } from 'react-router-dom';
import s from './Content.module.scss'
import Main from './Main/Main';
import HowToPay from './HowToPay/HowToPay';
import Sale from './Sale/Sale';
import Prices from './Prices/Prices';
import Help from './Help/Help';
import Bonus from './Bonus/Bonus';
import Blog from './Blog/Blog';
import Shops from './Shops/Shops';
import User from './User/User';

const Content = () => {
    return (
        <div className={s.content}>
            <Routes>
                <Route path={'/'} element={<Main />} />
                <Route path={'/howtopay'} element={<HowToPay />} />
                <Route path={'/sale'} element={<Sale />} />
                <Route path={'/prices'} element={<Prices />} />
                <Route path={'/help'} element={<Help />} />
                <Route path={'/bonus'} element={<Bonus />} />
                <Route path={'/blog'} element={<Blog />} />
                <Route path={'/shops'} element={<Shops />} />
                <Route path={'/user'} element={<User />} />
            </Routes>
        </div>
    );
}

export default Content;