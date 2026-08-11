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
const coffee = document.createElement("div");
coffee.classList.add("menu-entries");
createSection("Coffee", wrapper, true)
createEntry("Foccacia bread", 25, coffee);
createEntry("Foccacia bread", 25, coffee);
createEntry("Foccacia bread", 25, coffee);
wrapper.append(coffee);

// Pastry Section
const tea = document.createElement("div");
tea.classList.add("menu-entries");
createSection("Tea", wrapper, false);
createEntry("Foccacia bread", 25, tea);
createEntry("Foccacia bread", 25, tea);
createEntry("Foccacia bread", 25, tea);
wrapper.append(tea)

// Event listener for close buton
closeButton.addEventListener("click", () => {
    dialog.close()
})

export default dialog;