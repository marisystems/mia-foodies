import {
    createEntry, 
    createSection, 
    createMenu,
} from '../menuHelper/menuHelper.js'

// Create the menu
const menu = createMenu();
const wrapper = menu[0];
const dialog = menu[1];
const closeButton = menu[2];

// Bread Section
const bread = document.createElement("div");
bread.classList.add("menu-entries");
createSection("Bread", wrapper, true)
createEntry("Foccacia bread", 25, bread);
createEntry("Foccacia bread", 25, bread);
createEntry("Foccacia bread", 25, bread);
wrapper.append(bread);

// Pastry Section
const pastry = document.createElement("div");
pastry.classList.add("menu-entries");
createSection("Pastry", wrapper, false);
createEntry("Foccacia bread", 25, pastry);
createEntry("Foccacia bread", 25, pastry);
createEntry("Foccacia bread", 25, pastry);
wrapper.append(pastry)

// Event listener for close buton
closeButton.addEventListener("click", () => {
    dialog.close()
})

export default dialog;