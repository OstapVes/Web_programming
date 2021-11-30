import {
    addItemToPage,
    clearInputs,
    renderItemsList,
    getInputValues,
    EDIT_BUTTON_PREFIX,
} from "./dom_util.js";
import { getAllLamps, postLamp, editLamp, deleteLamp } from './api.js'

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");


let lamps = [];

// const addItem = ({ name, power, number, price }) => {
//    const generatedId = uuid.v1();

//    const newItem = {
//        id: generatedId,
//        name,
//        power,
//        number,
//        price,
//    };

//    lamps.push(newItem);

//    addItemToPage(newItem);
// }

const onEditItem = (element) => {
    const id = element.target.id.replace(EDIT_BUTTON_PREFIX, "");

    const { name, power, number, price } = getInputValues();

    clearInputs();

    editLamp(id, {
        name, 
        power, 
        number, 
        price,
    }).then(refetchAllLamps);
}

const onRemoveItem = (id) => deleteLamp(id).then(refetchAllLamps);

export const refetchAllLamps = async () => {
    const allLamps = await getAllLamps();

    lamps = allLamps;

    renderItemsList(lamps, onEditItem, onRemoveItem);
};

submitButton.addEventListener("click", (event) => {
    // Prevents default page reload on submit
    event.preventDefault();

    const { name, power, number, price } = getInputValues();

    clearInputs();

    postLamp({
        name,
        power,
        number,
        price,
    }).then(refetchAllLamps);
});

findButton.addEventListener("click", () => {
    const foundLamp = lamps.filter(
        (lamp) => lamp.name.search(findInput.value) !== -1
    );

    renderItemsList(foundLamp, onEditItem, onRemoveItem);
});

cancelFindButton.addEventListener("click", () => {
    renderItemsList(lamps, onEditItem, onRemoveItem);

    findInput.value = "";
});


// main code
refetchAllLamps();
