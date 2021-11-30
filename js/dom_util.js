import { onDragNDrop } from "./drag_n_drop.js";

export const EDIT_BUTTON_PREFIX = 'edit-button-';

const nameInput = document.getElementById("name_input");
const powerInput = document.getElementById("power_input");
const numberInput = document.getElementById("number_input");
const priceInput = document.getElementById("price_input");
const itemsContainer = document.getElementById("items_container");

// local functions

const itemTemplate = ({ id, name, power, number, price }) => `
<li id="${(id)}" class="card mb-3 item-card" draggable="true">
    <img
    src="https://www.retrolight.com.ua/wp-content/uploads/2019/11/A19S.jpg"
    class="item-container__image card-img-top" 
      alt="card"
    />
    <div class="card-body">
      <h4 class="card-title">${name}</h4>
      <h5 class="card-text">${power}</h5>
      <h5 class="card-text">${number}</h5>
      <h5 class="card-text">${price}</h5>
      <button id="${EDIT_BUTTON_PREFIX}${id}" type="button" class="btn btn-info">
        Edit
      </button>
    </div>
</li>`;

// exposed functions
export const clearInputs = () => {
  nameInput.value = "";
  powerInput.value = "";
  numberInput.value = "";
  priceInput.value = "";

};

export const addItemToPage = ({ id, name, power, number, price }, onEditItem, onRemoveItem) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, name, power, number, price })
  );

  const element = document.getElementById(id);
  const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);

  element.onmousedown = onDragNDrop(element, onRemoveItem);

  editButton.addEventListener("click", onEditItem);
  
  // VERY IMPORTANT
  editButton.onmousedown = e => e.stopPropagation();
};

export const renderItemsList = (items, onEditItem, onRemoveItem) => {
  itemsContainer.innerHTML = "";

  for (const item of items) {
    addItemToPage(item, onEditItem, onRemoveItem);
  }
};

export const getInputValues = () => {
  return {
    name: nameInput.value,
    power: powerInput.value,
    number: numberInput.value,
    price: priceInput.value,
  };
};
