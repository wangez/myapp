import {createDom} from './utile.js'
import Selection from './selection'

class Choose {
    constructor () {
        this.hover = null
        this.selections = {}
        const choose = this.dom = createDom('div', {position: 'absolute', height: '100%', width: '100%', backgroundColor: '#888'})
        choose.classList.add('choose')

        const normal = this.selections.normal = new Selection({id: 'normal', top: '25%', height: '25%', width: '20%', left: '4%'}).setContent('挑战普通怪物')
        const advanced = this.selections.advanced = new Selection({id: 'advanced', top: '25%', height: '25%', width: '20%', left: '28%'}).setContent('挑战高级怪物')
        const elitist = this.selections.elitist = new Selection({id: 'elitist', top: '25%', height: '25%', width: '20%', left: '52%'}).setContent('挑战精英怪物')
        const boss = this.selections.boss = new Selection({id: 'boss', top: '25%', height: '25%', width: '20%', left: '76%'}).setContent('挑战boss')

        const shop = this.selections.shop = new Selection({id: 'shop', top: '55%', height: '25%', width: '20%', left: '4%'}).setContent('商店')
        const smithy = this.selections.smithy = new Selection({id: 'smithy', top: '55%', height: '25%', width: '20%', left: '28%'}).setContent('铁匠铺')
        const hotel = this.selections.hotel = new Selection({id: 'hotel', top: '55%', height: '25%', width: '20%', left: '52%'}).setContent('旅馆')
        const chat = this.selections.chat = new Selection({id: 'chat', top: '55%', height: '25%', width: '20%', left: '76%'}).setContent('聊天室')

        choose.appendChild(normal.dom)
        choose.appendChild(advanced.dom)
        choose.appendChild(elitist.dom)
        choose.appendChild(boss.dom)

        choose.appendChild(shop.dom)
        choose.appendChild(smithy.dom)
        choose.appendChild(hotel.dom)
        choose.appendChild(chat.dom)

        
        choose.addEventListener('mousemove', e => {
            e.stopPropagation()
            const target = e.target
            if (!target.classList.contains('selection')) {
                if (target.classList.contains('choose')) {
                    if (this.hover) this.hover.reset()
                    this.hover = null
                } else {
                    return
                }
            }
            const id = target.getAttribute('id'),
                selection = this.selections[id]
            if (!selection || this.hover === selection) return
            if (this.hover) this.hover.reset()
            this.hover = selection
            const {top, left, width, height} = selection.dom.getBoundingClientRect()
            selection.dom.style.top = top - 0.05 * height + 'px'
            selection.dom.style.left = left - 0.05 * width + 'px'
            selection.dom.style.width = width * 1.1 + 'px'
            selection.dom.style.height = height * 1.1 + 'px'
        })
    }
}

export default Choose