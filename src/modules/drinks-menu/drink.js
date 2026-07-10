// Create html structure

const dialog = document.createElement("dialog");
dialog.classList.add("drink-menu");
const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

dialog.appendChild(wrapper);

export default dialog