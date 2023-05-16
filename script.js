fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    renderElements(data);
  });

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.products);
  });

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

const navbarContainer = document.createElement("div");
navbarContainer.classList.add("navbar__container");

const navbarLeft = document.createElement("div");
navbarLeft.classList.add("navbar__left");

const iconContainer = document.createElement("div");
iconContainer.classList.add("icon__container");

const lalafoIcon = document.createElement("img");
lalafoIcon.setAttribute("src", "./images/Green_lalafo.png");
lalafoIcon.setAttribute("alt", "Lalafo Icon");

iconContainer.appendChild(lalafoIcon);

const barsIcon = document.createElement("i");
barsIcon.classList.add("fa-solid", "fa-bars");

const forBusiness = document.createElement("a");
forBusiness.setAttribute("href", "https://lalafo.az/info/paid-posting");
forBusiness.textContent = "Biznes ucun";

navbarLeft.appendChild(iconContainer);
navbarLeft.appendChild(barsIcon);
navbarLeft.appendChild(forBusiness);

const navbarRight = document.createElement("div");
navbarRight.classList.add("navbar__right");

const iconContainerRight = document.createElement("div");
iconContainerRight.classList.add("icon__container__right");

const heartIcon = document.createElement("img");
heartIcon.setAttribute("src", "./images/heart-removebg-preview.png");
heartIcon.setAttribute("alt", "Heart icon");

iconContainerRight.appendChild(heartIcon);

const loginText = document.createElement("p");
loginText.textContent = "Giris • Qeydiyyat";

const adBtn = document.createElement("button");
adBtn.classList.add("adBtn");
adBtn.textContent = "Elan yerlesdir";

navbarRight.appendChild(iconContainerRight);
navbarRight.appendChild(loginText);
navbarRight.appendChild(adBtn);

navbarContainer.appendChild(navbarLeft);
navbarContainer.appendChild(navbarRight);

const header = document.querySelector("header");
header.appendChild(navbarContainer);

function renderElements(data) {
  data.products.forEach((product) => {
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main__container");

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item__container");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img__container");

    const imgElement = document.createElement("img");
    imgElement.src = product.images[0];
    imgContainer.appendChild(imgElement);
    itemContainer.appendChild(imgContainer);

    const itemRight = document.createElement("div");
    itemRight.classList.add("item__right");

    itemContainer.appendChild(itemRight);

    const mobilePath = document.createElement("p");
    mobilePath.classList.add("mobile__phone");
    mobilePath.innerText = "Mobil Telefonlar >";
    const spanName = document.createElement("span");
    spanName.classList.add("product__name");
    spanName.innerText = product.title;
    mobilePath.appendChild(spanName);

    const productDescription = document.createElement("h4");
    productDescription.classList.add("product__title");
    productDescription.textContent = product.description;

    const productPrice = document.createElement("span");
    productPrice.classList.add("product__price");
    productPrice.textContent = product.price + "AZN";
    itemRight.appendChild(mobilePath);
    itemRight.appendChild(productDescription);
    itemRight.appendChild(productPrice);
    mainContainer.appendChild(itemContainer);

    const bodyElement = document.querySelector("body");
    bodyElement.appendChild(mainContainer);
  });
}
