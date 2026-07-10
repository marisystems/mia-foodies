// This is a module that will take all the modules
// and append it to the body

function pageLoad(modules, target) {
    modules.forEach( (element) => {
        target.appendChild(element);
    })
}

export default pageLoad;