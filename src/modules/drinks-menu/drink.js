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

// Coffee Section
const coffee = document.createElement("div");
coffee.classList.add("menu-entries");
createSection("Coffee", wrapper, true)
createEntry("Cappucino", 12, coffee);
createEntry("Cold Brew", 12, coffee);
createEntry("Iced Mocha", 12, coffee);
wrapper.append(coffee);

// Tea Section
const tea = document.createElement("div");
tea.classList.add("menu-entries");
createSection("Tea", wrapper, false);
createEntry("Black Tea", 9, tea);
createEntry("Green Tea", 9, tea);
createEntry("Masala Chai", 12, tea);
wrapper.append(tea)

// Event listener for close buton
closeButton.addEventListener("click", () => {
    dialog.close()
})

export default dialog;