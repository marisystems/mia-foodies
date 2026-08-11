import logoImg from './logo.png';
import closeButtonImg from './close.png'

function createEntry(name, price, target) {
    // Helper function to create the menu entries
    // It also appends to the target for convenience sake

    const menuEntry = document.createElement("div");
    const menuName = document.createElement("p");
    const menuPrice = document.createElement("p");

    menuEntry.classList.add("menu-entry");
    menuName.classList.add("menu-name");
    menuPrice.classList.add("menu-price");

    menuName.textContent = name;
    menuPrice.textContent = `${price}R$`;

    menuEntry.append(menuName, menuPrice)

    target.append(menuEntry);
}

function createSection(name, target, logoShow=false) {
    const section = document.createElement("div");
    section.classList.add("menu-section");
    const sectionHeader = document.createElement("h2")
    sectionHeader.textContent = name;
    section.appendChild(sectionHeader)

    // Optional bunny image
    const logo = document.createElement("img");
    logo.classList.add("logo-menu")
    logo.src = logoImg;
    logo.width = '100';

    if (!logoShow) {
        logo.style.opacity = 0;
    }
    
    const logoContainer = document.createElement("div");
    logoContainer.classList.add("inline-flex-menu");
    logoContainer.append(section, logo);
    
    target.append(logoContainer);
}

function createMenu() {
    // Dialog
    const dialog = document.createElement("dialog");
    dialog.classList.add("menu");
    
    // Wrapper
    const wrapper = document.createElement("div");
    wrapper.classList.add("menu-wrapper");
    
    // Close button
    const closeButton = document.createElement("img");
    closeButton.src = closeButtonImg;
    closeButton.width = '30'
    closeButton.classList.add("close-menu")
    
    // Close button
    wrapper.append(closeButton)

    dialog.appendChild(wrapper);

    return [wrapper, dialog, closeButton];
}

export {createEntry, createSection, createMenu};