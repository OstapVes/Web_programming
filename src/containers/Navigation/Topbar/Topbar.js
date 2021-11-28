import React from "react";
import {TopbarStyled} from "./Topbar.styled";
import {Navbar} from "../Navbar/Navbar";
import {Logo} from "../../../components/Logo/Logo";

export const Topbar = () => (
    <TopbarStyled>
        <Navbar />
    </TopbarStyled>
);
