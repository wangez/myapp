import {createDom} from './utile'
import Titile from './title'
import Choose from './choose'

class Tower {
    constructor (dom) {
        const {width, height} = this.rect = dom.getBoundingClientRect()
        const tower = createDom('div', {position: 'absolute',width: width + 'px', height: height + 'px', backgroundColor: '#fff'})
        dom.appendChild(tower)

        const title = new Titile()
        title.setName('访客')
        tower.appendChild(title.dom)

        const choose = new Choose()
        tower.appendChild(choose.dom)
    }
}

export default Tower