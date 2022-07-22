import React, { useState, useRef } from "react";
import s from './BurgerMenu.module.scss'
import Hamburger from "../Hamburger/Hamburger";
import { StyledMenu, StyledLink } from "./Menu.styled";
import { NavLink } from 'react-router-dom'


const Menu = () => {
    const [open, setOpen] = useState(false);
    const node = useRef(null);
    const close = () => setOpen(false);

    return (
        <div className={s.burgermenu}>
            <div ref={node}>
                <StyledMenu open={open}>
                    <NavLink to={'/howtopay'} > <StyledLink onClick={() => close()}>Как покупать</StyledLink></NavLink>
                    <NavLink to={'/sale'} ><StyledLink onClick={() => close()}>Распродажи</StyledLink></NavLink>
                    <NavLink to={'/prices'} ><StyledLink onClick={() => close()}>Цены</StyledLink></NavLink>
                    <NavLink to={'/help'} ><StyledLink onClick={() => close()}>Помощь</StyledLink></NavLink>
                    <NavLink to={'/bonus'} ><StyledLink onClick={() => close()}>Бонусы</StyledLink></NavLink>
                    <NavLink to={'/blog'} ><StyledLink onClick={() => close()}>Блог</StyledLink></NavLink>
                    <NavLink to={'/shops'} ><StyledLink onClick={() => close()}>Магазины</StyledLink></NavLink>
                    <NavLink to={'/contactus'} ><StyledLink className={s.contactus} onClick={() => close()}>Связаться с нами</StyledLink></NavLink>
                </StyledMenu>
                <Hamburger open={open} setOpen={setOpen} />
            </div>
        </div>

    );
};

export default Menu;
