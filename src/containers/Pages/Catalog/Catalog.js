import React, {useEffect, useState} from "react";
import {PageStyled} from "../Page.styled";
import {CardStorage} from "../../../components/Card/CardStorage/CardStorage";
import {FISH_CARD_SIZE} from "../../../const/Constants";
import {ActionPanelStyled} from "../../../components/ActionPannel/ActionPanel.styled";
import {FilterInput} from "../../../components/ActionPannel/FilterInput";

export const Catalog = () => {
    const [filterName, setFilterName] = useState("");
    const [filterType, setFilterType] = useState("");
    const [filterLifetime, setFilterLifetime] = useState(undefined);
    const [filters, setFilters] = useState(undefined);

    useEffect(() => {
        setFilters({
            name: filterName,
            type: filterType,
            lifetime: filterLifetime
        })
    }, [filterName, filterType, filterLifetime])

    return (
        <PageStyled>
            <ActionPanelStyled>
                <FilterInput id="name" placeholder="Enter name..."
                             onSearch={(value) => setFilterName(value)}/>
                <FilterInput id="type" placeholder="Enter type..."
                             onSearch={(value) => setFilterType(value)}/>
                <FilterInput id="lifetime_years" placeholder="Enter lifetime..."
                             onSearch={(value) => setFilterLifetime(Number(value))}/>
            </ActionPanelStyled>
            <CardStorage filters={filters} style={{width: FISH_CARD_SIZE*6}}/>
        </PageStyled>
    )
}
