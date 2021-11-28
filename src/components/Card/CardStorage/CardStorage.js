import React, {useEffect, useState} from 'react';
import {getFishList} from "../../../api/Api";
import {CardStorageStyled} from "./CardStorage.styled";
import {getFishCards} from "../../../containers/Pages/Catalog/CatalogDom";
import {Button} from "antd";

export const
    CardStorage = ({fishNum, fishIncrement= 1, style, filters}) => {
    const [fishListSize, setFishListSize] = useState(fishNum ? fishNum: 0);
    const [fishList, setFishList] = useState([]);
    useEffect (() => {
        getFishList()
            .then(
                receivedFishList => {
                    if (filters) {
                        receivedFishList = receivedFishList.filter( (fish) =>
                            {
                                const isProperName = fish.name.toLowerCase().search(filters.name) !== -1;
                                const isProperType = fish.animal_type.toLowerCase().search(filters.type) !== -1;
                                let isProperLifetime;
                                if (filters.lifetime) {
                                    isProperLifetime = fish.lifetime_years === filters.lifetime;
                                }
                                else {
                                    isProperLifetime = true;
                                }
                                return (isProperName && isProperType && isProperLifetime);
                            }
                        )
                    }
                    if (fishListSize >= receivedFishList.length) {
                        setFishListSize(0);
                    }
                    if (fishListSize === 0) {
                        setFishList(receivedFishList)
                    }
                    else setFishList(receivedFishList.slice(0, fishListSize))
                }
            )
            .catch( () =>  {
                console.log("Error occurred during loading data from server");
            })
    }, [fishListSize, filters]);
    return (
        <div style={style}>
            <CardStorageStyled>
                {
                    (fishList.length !== 0) ?
                        getFishCards(fishList) : <h2>Nothing found</h2>
                }
            </CardStorageStyled>
            {
                !(fishListSize === 0 || fishListSize > fishList.length) &&
                <Button onClick={() => setFishListSize(fishListSize+fishIncrement)}>Show more...</Button>
            }
        </div>
    );
}
