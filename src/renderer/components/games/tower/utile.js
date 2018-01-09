const createDom = (name, option) => {
    const dom = document.createElement(name)
    if (option) {
        Object.keys(option).forEach(key => dom.style[key] = option[key])
    }
    return dom
}

export {createDom}