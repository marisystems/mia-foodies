import logoImg from './logo.png'
import foodiesImgSrc from './foodies.png'
import drinksImgSrc from './drinks.png'
import infoImgSrc from './info.png'

const wrapper = document.createElement("div");
wrapper.classList.add("greeting")

const logo = document.createElement("img");
logo.src = logoImg;
logo.width = "120";
const h1 = document.createElement("h1");
h1.textContent = "mia's bakery"

const menus = document.createElement("nav");
menus.classList.add("menus");

// Items on the nav

// Food menu
const foodies = document.createElement("button");
const foodiesImg = document.createElement("img");
foodiesImg.src = foodiesImgSrc
foodiesImg.width = '130';
foodiesImg.classList.add("foodies")
foodies.appendChild(foodiesImg);

// Drink menu
const drinks = document.createElement("button");
const drinksImg = document.createElement("img");
drinksImg.src = drinksImgSrc
drinksImg.width = '150';
drinksImg.classList.add("drinks")
drinks.appendChild(drinksImg);

// Info menu
const info = document.createElement("button");
const infoImg = document.createElement("img");
infoImg.src = infoImgSrc
infoImg.width = '120';
infoImg.classList.add("info")
info.appendChild(infoImg);

menus.append(foodies, drinks, info);
wrapper.append(logo, h1, menus);

export default wrapper;
export {menus};