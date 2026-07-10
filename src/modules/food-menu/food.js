// Create html structure
import closeButtonImg from './close.png';
import bnuuy from './bnuyy-avental.png';

function createEntry() {

}

// Dialog
const dialog = document.createElement("dialog");
dialog.classList.add("food-menu");

// Wrapper
const wrapper = document.createElement("div");
wrapper.classList.add("foodies-wrapper");

// Close button
const closeButton = document.createElement("img");
closeButton.src = closeButtonImg;
closeButton.width = '30'
closeButton.classList.add("close-menu")

// Bread
const section = document.createElement("div");
section.classList.add("bread");
const sectionHeader = document.createElement("h2")
sectionHeader.textContent = "Bread";
section.appendChild(sectionHeader)

// Bnuuy
const logo = document.createElement("img");
logo.src = bnuuy;
logo.width = '100';

wrapper.append(closeButton, section, logo);
dialog.appendChild(wrapper);

export default dialog