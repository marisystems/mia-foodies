// This is a module that will take all the modules
// and append it to a target

function pageLoad(modules, target) {
    modules.forEach( (element) => {
        target.appendChild(element);
    })
}

export default pageLoad;