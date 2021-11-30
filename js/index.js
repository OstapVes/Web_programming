import {
    addItemToPage,
    clearInputs,
    renderItemsList,
    getInputValues,
    sortItems,
    countValues,
} from "./dom_util.js";

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");
const sortPropertySelector = document.getElementById("propertyForSorting");
const sortOrderSelector = document.getElementById("orderSelector");
const totalValueSelector = document.getElementById("propertyForTotalValue");
const nameInput = document.getElementById("name_input");
const powerInput = document.getElementById("power_input");
const numberInput = document.getElementById("number_input");
const errorName = document.getElementById("error_name");
const errorPrice = document.getElementById("error_price");
const errorNumber= document.getElementById("error_number");

let lamp = [];

const addItem = ({ name, power, number, price }) => {
    const generatedId = uuid.v1();

    const newItem = {
        id: generatedId,
        name,
        power,
        number,
        price,
    };

    lamp.push(newItem);

    addItemToPage(newItem);
}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const invalidSymbols = ["@", "#", "<", ">", "/", "\\", "*", "+", "-", "=", ")", "(", "[", "]",
        "{", "}", "&", "^", "%", "$","!", "~"];


    if(nameInput.value == 0){
        errorName.textContent = "Please enter a name";
        window.alert("We need to know name of the lamp!");
    }
    else if(invalidSymbols.some(symbol =>nameInput.value.includes(symbol))){
        errorName.textContent = "Wrong symbols";
        window.alert("Oops, something went wrong");
    }
    else if(powerInput.value == 0){
        errorNumber.textContent = "Please enter power";
        window.alert("We need to know the power of the lamp!");
    }
    else if(numberInput.value == 0){
        errorPrice.textContent = "Please enter a number of diode lamps";
        window.alert("We need to know the price of the lamp!");
    }
    else if(invalidSymbols.some(symbol =>nameInput.value.includes(symbol))){
        errorPrice.textContent = "Wrong symbols";
        window.alert("Oops, something went wrong");
    }
    else if(isNaN(priceInput.value)){
        errorPrice.textContent = "Please enter a price";
        window.alert("The entered value is not a price!");
    }
    else{
    const {name, power, number, price} = getInputValues();

    clearInputs();

    addItem({
        name,
        power,
        number,
        price
    })

    errorPrice.textContent = "";
    errorName.textContent = "";
    errorNumber.textContent = "";
}
});

findButton.addEventListener("click", () => {
    const foundLamp = lamp.filter(
        (lamp) => lamp.name.search(findInput.value) !== -1
    );

    renderItemsList(foundLamp);
});

cancelFindButton.addEventListener("click", () => {
    renderItemsList(lamp);

    findInput.value = "";
});

sortPropertySelector.addEventListener("change", () => {
    sortItems({ lamp, property: sortPropertySelector.value, order: sortOrderSelector.value })
})

sortOrderSelector.addEventListener("change", () => {
    sortItems({ lamp, property: sortPropertySelector.value, order: sortOrderSelector.value })
})

totalValueSelector.addEventListener("change", () => {
    console.log(totalValueSelector.value)
    countValues({lamp, property: totalValueSelector.value })
})

// main code
renderItemsList(lamp);

countValues({ lamp, property: "price" })
