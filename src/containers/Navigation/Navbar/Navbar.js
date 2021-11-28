import React from "react";
import {NavbarStyled, NavLinkStyled} from "./Navbar.styled";

export const Navbar = () => (
   <NavbarStyled>
       <NavLinkStyled to={'/'}>
           Home
       </NavLinkStyled>
       <NavLinkStyled to={'/lamps'}>
           Lamps
       </NavLinkStyled>
       <NavLinkStyled to={'/goods'}>
           Basket of goods
       </NavLinkStyled>
   </NavbarStyled>
)


