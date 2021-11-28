import React from "react";
import {PageStyled} from "../Page.styled";
import {WelcomeSection} from "../../../components/WelcomeSection/WelcomeSection";
import {CardStorage} from "../../../components/Card/CardStorage/CardStorage";
import {FISH_CARD_SIZE} from "../../../const/Constants";


export const Homepage = () => (
    <PageStyled>
        <WelcomeSection />
        <CardStorage style={{width: FISH_CARD_SIZE*3}} fishNum={3} fishIncrement={3} />
    </PageStyled>
);
