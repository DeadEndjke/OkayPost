import React, { useState, useRef } from "react";
import s from './BurgerMenu.module.scss'
import Hamburger from "../Hamburger/Hamburger";
import { StyledMenu } from "./Menu.styled";
import { NavLink } from 'react-router-dom'


const Menu = () => {
    const [open, setOpen] = useState(false);
    const node = useRef(null);
    const close = () => setOpen(false);

    return (
        <div className={s.burgermenu}>
            <div ref={node}>
                <StyledMenu open={open}>
                    <NavLink to={'/howtopay'} onClick={() => close()}>Как покупать</NavLink>
                    <NavLink to={'/sale'} >Распродажи</NavLink>
                    <NavLink to={'/prices'} >Цены</NavLink>
                    <NavLink to={'/help'} >Помощь</NavLink>
                    <NavLink to={'/bonus'} >Бонусы</NavLink>
                    <NavLink to={'/blog'} >Блог</NavLink>
                    <NavLink to={'/shops'} >Магазины</NavLink>
                    <NavLink to={'/contactus'} >Связаться с нами</NavLink>
                </StyledMenu>
                <Hamburger open={open} setOpen={setOpen} />
            </div>
        </div>

    );
};

export default Menu;
