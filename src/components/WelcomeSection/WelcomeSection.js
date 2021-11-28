import React from "react";
import {WelcomeStyled, TextSection} from "./Welcome.styled";

export const WelcomeSection = (props) => (
    <WelcomeStyled style={props.style}>
        <TextSection>
            <h2>Welcome to Lamp world!</h2>
            
        </TextSection>
    </WelcomeStyled>
);