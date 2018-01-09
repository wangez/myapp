import {createDom} from './utile.js'

class Scene {
    constructor (width, height) {
        screen = createDom('canvas', {width, height, display: 'block'})
        screen.width = width
        screen.height=height
    }
}