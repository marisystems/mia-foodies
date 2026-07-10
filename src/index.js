import './style.css';

import {default as greeting, menus} from './modules/greeting/greeting.js'
import foodMenu from './modules/food-menu/food.js'
import drinksMenu from './modules/drinks-menu/drink.js'
import infoMenu from './modules/info-menu/info.js'

import pageLoad from './modules/pageLoad.js'

const modules = [greeting, foodMenu, drinksMenu, infoMenu]
const content = document.querySelector(".content");

pageLoad(modules, content)

// Click event for the items
menus.addEventListener("click", (option) => {
    const target = option.target

    if (target.classList[0] === "foodies") {    
        foodMenu.showModal();
    } else if (target.classList[0] === "drinks") {
        drinksMenu.showModal();
    } else if (target.classList[0] === "info") {
        infoMenu.showModal();
    }
})

