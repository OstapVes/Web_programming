import React from "react";
import {FishCard} from "../../../components/Card/FishCard";
import swordfish from "../../../images/swordfish.jpg";
import clownfish from "../../../images/coolfish.jpg";
import shark from "../../../images/shark.jpg";


export const createFishCard = (fish) => {
    let image;
    if (fish.animal_type.toString().toLocaleLowerCase().search("shark") !== -1) {
        image = shark;
    }
    else if (fish.animal_type.toString().toLocaleLowerCase().search("swordfish") !== -1) {
        image = swordfish;
    }
    else {
        image = clownfish;
    }
    return (
        <FishCard key={fish.id}
                  image = {image}
                  name = {fish.name}
                  lifetime={fish.lifetime_years}
                  type={fish.animal_type}
                  id={fish.id}
        />
    )
}

export const getFishCards = (fishList) => {
    return fishList.map(createFishCard);
}
