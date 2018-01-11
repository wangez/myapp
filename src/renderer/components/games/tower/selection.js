import {createDom} from './utile.js'

class Selection {
    constructor ({top, left, width, height, id, callback}) {
        this.top = top
        this.left = left
        this.width = width
        this.height = height
        this.hover = false
        const dom = this.dom = createDom('div', {position: 'absolute', top: top, left, height, width, boxSizing: 'border-box', textAlign: 'center', padding: '1em 0 0 0', border: '1px solid #fff', boxShadow: '0 0 2px 2px #fff'})
        dom.setAttribute('id', id)
        dom.classList.add('selection')
        document.addEventListener('click', callback)
    }
    setContent (text) {
        this.dom.innerHTML = text
        return this
    }
    reset () {
        const {dom, top, left, width, height} = this
        dom.style.top = top
        dom.style.left = left
        dom.style.width = width
        dom.style.height = height
        return this
    }
}

export default Selection