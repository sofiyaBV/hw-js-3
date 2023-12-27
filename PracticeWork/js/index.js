import dataFood from "./dataFood.js";
console.log(dataFood);

const productContainer = document.querySelector(".js_div");

function createFoodItem(data) {
  const divElement = document.createElement("div");

  const componentsDiv = document.createElement("div");
  componentsDiv.classList.add("div_components");
  divElement.appendChild(componentsDiv);

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img");
  componentsDiv.appendChild(imgDiv);

  const imgElement1 = document.createElement("img");
  imgElement1.src = data.image;
  imgDiv.appendChild(imgElement1);

  const informationDiv = document.createElement("div");
  informationDiv.classList.add("informations");
  componentsDiv.appendChild(informationDiv);

  const nameDiv = document.createElement("div");
  nameDiv.classList.add("div_name");
  informationDiv.appendChild(nameDiv);

  const nameParagraph = document.createElement("p");
  nameParagraph.classList.add("p_name");
  nameParagraph.textContent = data.name;

  const textParagraph = document.createElement("p");
  textParagraph.classList.add("p_text_informations");
  textParagraph.textContent = data.description;

  const imgElement = document.createElement("img");
  imgElement.alt = "";

  nameDiv.appendChild(nameParagraph);
  nameDiv.appendChild(textParagraph);
  nameDiv.appendChild(imgElement);

  var textDiv = document.createElement("div");
  textDiv.classList.add("div_text");
  informationDiv.appendChild(textDiv);

  const gramParagraph = document.createElement("p");
  gramParagraph.classList.add("p_gram");
  gramParagraph.textContent = data.gram;

  const colDiv = document.createElement("div");
  colDiv.classList.add("div_col");
  colDiv.innerHTML = "<p>-</p><p>1</p><p>+</p>";

  textDiv.appendChild(gramParagraph);
  textDiv.appendChild(colDiv);

  const priceDiv = document.createElement("div");
  priceDiv.classList.add("div_price");
  informationDiv.appendChild(priceDiv);

  const priceParagraph = document.createElement("p");
  priceParagraph.textContent = `${data.price} грн`;

  const buttonElement = document.createElement("button");
  const buttonDiv = document.createElement("div");
  const cartImg = document.createElement("img");
  cartImg.src = "./img/shopping-cart.png";
  buttonDiv.appendChild(cartImg);
  buttonElement.appendChild(buttonDiv);

  priceDiv.appendChild(priceParagraph);
  priceDiv.appendChild(buttonElement);

  return divElement;
}

dataFood.forEach((foodItem) => {
  const foodItemElement = createFoodItem(foodItem);
  productContainer.appendChild(foodItemElement);
});
