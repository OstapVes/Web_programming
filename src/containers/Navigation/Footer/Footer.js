import React from "react";
import {FooterStyled, LinkSection,RightsSection, VerticalLine, InfoSection} from "./Footer.styled";
import {IconStyled} from "../../../components/Icon/Icon.styled";
import {InstagramOutlined, FacebookFilled, TwitterCircleFilled} from "@ant-design/icons";
import {Logo} from "../../../components/Logo/Logo";

export const Footer = () => (
    <FooterStyled>
        <InfoSection>
            
            <p>
                Lamp world
            </p>
        </InfoSection>
        <LinkSection>
            <IconStyled component = {InstagramOutlined} color='#000'/>
            <IconStyled component = {FacebookFilled} color='#05f'/>
            <IconStyled component = {TwitterCircleFilled} color='#0af'/>
        </LinkSection>
        <VerticalLine />
    </FooterStyled>
);
