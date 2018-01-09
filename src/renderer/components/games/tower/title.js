import {createDom} from './utile.js'
import heart from './assets/heart.png'
import money from './assets/money.png'

class Title {
    constructor () {
        this.hp = 0
        this.maxhp = 0
        this.money = 0

        this.floor = 0
        this.score = 0

        const dom = this.dom = createDom('div', {position: 'absolute', top: 0, left: 0, height: '60px', width: '100%', backgroundColor: 'rgb(62, 73, 78)', zIndex: 99})

        const nameDom = this.nameDom = createDom('div', {float: 'left', height: '60px', lineHeight: '60px', fontSize: '30px', color: '#fff', margin: '0 20px'})

        const hpDom = this.hpDom = createDom('div', {background: 'url(' + heart + ') 0 50% no-repeat', backgroundSize: '35px 30px', float: 'left', height: '60px', lineHeight: '60px', fontSize: '26px', color: 'red', padding: '0 0 0 40px', margin: '0 20px'})

        const moneyDom = this.moneyDom = createDom('div', {background: 'url(' + money + ') 0 50% no-repeat', backgroundSize: '35px 30px', float: 'left', height: '60px', lineHeight: '60px', fontSize: '26px', color: '#f9f554', padding: '0 0 0 40px', margin: '0 20px'})

        const levelDom = this.levelDom = createDom('div', {float: 'left', height: '60px', lineHeight: '60px', fontSize: '26px', color: '#f9f554', margin: '0 20px'})

        this.updateHpDom()
        this.updateMoneyDom()
        this.updateLevelDom()
        dom.appendChild(nameDom)
        dom.appendChild(hpDom)
        dom.appendChild(moneyDom)
        dom.appendChild(levelDom)

    }
    setName (name) {
        this.name = name
        this.nameDom.innerHTML = name
    }
    changeMaxHp (value) {
        if (value > 0) {
            this.hp += value
        }
        this.maxhp += value
        this.updateHpDom()
    }
    changeHp (value) {
        this.hp += value
        this.updateHpDom()
    }
    updateHpDom () {
        this.hpDom.innerHTML = this.hp + '/' + this.maxhp
    }
    changeMoney (value) {
        if (this.money + value < 0) {
            throw new Error('金钱数量不能设置为负数')
        }
        this.money += value
        this.updateMoneyDom()
    }
    updateMoneyDom () {
        this.moneyDom.innerHTML = this.money
    }
    changeFloor (value) {
        if (value === 0) {
            this.floor = 0
        } else {
            this.floor += value
        }
        this.changeScore(0)
    }
    changeScore (value) {
        if (value === 0) {
            this.score = 0
        } else {
            this.score += value
        }
    }
    updateLevelDom () {
        this.levelDom.innerHTML = this.floor + '层' + this.maxhp + '分'
    }
}

export default Title