import React from "react";

import { StyledHamburger } from "./Hamburger.styled";



const Hamburger = (props) => (
    <StyledHamburger open={props.open} onClick={() => props.setOpen(!props.open)}>
        <div />
        <div />
        <div />
    </StyledHamburger>
);

export default Hamburger;
