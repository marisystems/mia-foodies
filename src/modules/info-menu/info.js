import {
    createEntry, 
    createSection, 
    createMenu,
} from '../menuHelper/menuHelper.js';

import infoImgSrc from './logo.png';
import gitSrc from './github.svg';
import linkSrc from './linkedin.svg';

// Create the menu
const menu = createMenu();
const wrapper = menu[0];
wrapper.classList.add("info-wrapper")
const dialog = menu[1];
const closeButton = menu[2];

// Info text
const infoText = document.createElement("p");
infoText.classList.add("info-text");
infoText.textContent = "mia's bakery is a local bakery localized in Florianopolis-SC that offers a warm and comforting environment with an assortment of pastries and artisanal goods ";

// Info image
const infoImg = document.createElement("img");
infoImg.classList.add("info-img")
infoImg.src = infoImgSrc;

// Lower section
const myInfoContainer = document.createElement("div");
myInfoContainer.classList.add("info-container")

const myInfoP = document.createElement("p");
myInfoP.classList.add("info-p")
myInfoP.textContent = "marisystems@2026";

const myInfoGit = document.createElement("img");
myInfoGit.classList.add("info-git");
myInfoGit.src = gitSrc;


const myInfoLink = document.createElement("img");
myInfoLink.classList.add("info-link");
myInfoLink.src = linkSrc;


myInfoContainer.append(myInfoP, myInfoGit, myInfoLink);


wrapper.append(infoText);
wrapper.append(infoImg);
wrapper.append(myInfoContainer);


// Event listener for close buton
closeButton.addEventListener("click", () => {
    dialog.close();
})

export default dialog;