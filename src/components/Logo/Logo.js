import React from "react";
import {LogoStyled} from "./Logo.styled";
import {FireOutlined} from "@ant-design/icons";

export const Logo = (props) => (
    <LogoStyled style={props.style}>
        <FireOutlined />
        AquaStore
    </LogoStyled>
);
