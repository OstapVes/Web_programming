import { onDragNDrop } from "./drag_n_drop.js";

const nameInput = document.getElementById("name_input");
const numberInput = document.getElementById("number_input");
const powerInput = document.getElementById("power_input");
const priceInput = document.getElementById("price_input");
const totalValueLabel = document.getElementById("totalValue");
const itemsContainer = document.getElementById("items_container");

// local functions
const getItemId = (id) => `item-${id}`;

const itemTemplate = ({ id, name, power, number, price }) => `
<li id="${getItemId(id)}" class="card mb-3 item-card" draggable="true">
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
      <button id="edit-button-${id}" type="button" class="btn btn-info">
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

export const addItemToPage = ({ id, name, power, number, price }) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, name, power, number, price })
  );

  const element = document.getElementById(getItemId(id));
  element.onmousedown = onDragNDrop(element);

};

export const renderItemsList = (items) => {
  itemsContainer.innerHTML = "";

  for (const item of items) {
    addItemToPage(item);
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

export const sortItems = ({lamp, property, order}) => {

  function compareByPower(a, b) {
    if (a.power < b.power) {
      return 1;
    }
    if (a.power > b.power) {
      return -1;
    }
    return 0;
  }
  function compareByPrice(a, b) {
    if (a.price < b.price) {
      return 1;
    }
    if (a.price > b.price) {
      return -1;
    }
    return 0;
  }

  if (property === "power") {
      lamp.sort(compareByPower)
  } else if (property === "price") {
      lamp.sort(compareByPrice)
  }

  if (order === "DESC") {
    lamp.reverse()
  }
  itemsContainer.innerHTML = ""
  renderItemsList(lamps)
}

export const countValues = ({ lamp, property }) => {

  totalValueLabel.innerHTML = ""

  const totalValue = lamp.reduce((sum, current) => {
    if (property === "power") {
      return parseInt(sum, 10) + parseInt(current.power, 10)
    }
    if (property === "price") {
      return parseInt(sum, 10) + parseInt(current.power, 10)
    }
  }, 0)

  totalValueLabel.innerHTML = totalValue
}
