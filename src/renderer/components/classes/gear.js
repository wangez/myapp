/*
 * @Author: wangez 
 * @Date: 2018-01-03 14:09:48 
 * @Last Modified by: wangez
 * @Last Modified time: 2018-01-03 16:43:39
 *          Angle
 *           -
 *          | |
 *         |   |
 *        -     ------- next
 *         angle
 *           teechAngle
 * 循环中绘制点顺序
 *          2-3
 *          | |
 *         |   |
 *       1-     -4-----next
 */
class Gear {
    constructor ({ctx, R, r, x, y, teethNumber, Ratio = 0.2, ratio = 0.7, begin = 0, rr, childs}) {
        this.ctx = ctx
        this.R = R//外径
        this.r = r//内径
        this.x = x//圆心位置x坐标
        this.y = y//圆心位置y坐标
        this.teethNumber = teethNumber//齿个数
        this.teechAngle = 360 / teethNumber//每个齿对应的弧度
        this.Ratio = Ratio//齿外侧比例
        this.ratio = ratio//齿内侧比例
        this.Angle = this.teechAngle * Ratio//齿外侧弧度
        this.angle = this.teechAngle * ratio//齿内侧弧度
        this.disAngle = (this.angle - this.Angle) / 2//点1与点2之间弧度
        this.begin = begin//齿轮角度
        this.rr = rr
        if (childs) {
            this.childs = childs.map(e => {
                const {cAngle, cR, cr, cTeethNumber, crr, cChilds, cbegin} = e
                const angle = (cAngle - 3) / 12 * 360 / 180 * Math.PI//子齿轮相对父齿轮圆心坐标的角度是时钟方向，转换为canvas坐标角度
                const dis = cr + r + (cR - cr > R - r ? cR - cr : R - r)//求圆心距离，保证齿轮咬合
                return  new Gear({
                    ctx,
                    R: cR,
                    r: cr,
                    x: x + dis * Math.cos(angle),
                    y: y + dis * Math.sin(angle),
                    teethNumber: cTeethNumber,
                    begin: cbegin,
                    rr: crr,
                    childs: cChilds
                })
            })
        }
    }
    path () {
        const {ctx, R, r, x, y, teethNumber, teechAngle, Angle, angle, disAngle, begin} = this
        const {cos, sin} = Math
        const pi = Math.PI / 180
        ctx.beginPath()//循环开始前beginPath，而不是循环中，上次循环lineTo的最后一个点，会与下次循环第一个lineTo的点连接
        for (let i = 0; i < teethNumber; i++) {
            const a = teechAngle * i + begin
            ctx.lineTo(r * cos(a * pi) + x, r * sin(a * pi) + y)
            ctx.lineTo(R * cos((a + disAngle) * pi) + x, R * sin((a + disAngle) * pi) + y)
            ctx.lineTo(R * cos((a + disAngle + Angle) * pi) + x, R * sin((a + disAngle + Angle) * pi) + y)
            // ctx.lineTo(R * cos(a * pi) + x, R * sin(a * pi) + y)
            // ctx.lineTo(R * cos((a + angle) * pi) + x, R * sin((a + angle) * pi) + y)
            ctx.lineTo(r * cos((a + angle) * pi) + x, r * sin((a + angle) * pi) + y)
        }
        ctx.closePath()//closePath使第一个点与最后一个点连接
    }
    draw () {
        const {ctx, rr, x, y, childs} = this
        this.path()
        if (this.heightShow) {
            ctx.fillStyle = '#333'
            ctx.fill()
            if (rr) {
                ctx.beginPath()
                ctx.arc(x, y, rr, 0, Math.PI * 2)
                ctx.stroke()
            }
            ctx.fillStyle = '#ddd'
            if (rr) {
                ctx.beginPath()
                ctx.arc(x, y, rr, 0, Math.PI * 2)
                ctx.stroke()
            }
            ctx.fill()
        } else {
            ctx.stroke()
            if (rr) {
                ctx.beginPath()
                ctx.arc(x, y, rr, 0, Math.PI * 2)
                ctx.stroke()
            }
        }
        if (childs) {
            childs.forEach(e => e.draw())
        }
    }
    update (angle) {
        this.begin += angle
        if (this.childs) {
            this.childs.forEach(e => {
                e.update( - angle / this.teechAngle * e.teechAngle)
            })
        }
    }
    onthis (x, y) {
        this.path()
        if (this.ctx.isPointInPath(x, y)) {
            this.heightShow = true
        } else {
            this.heightShow = false
        }
        if (this.childs) {
            this.childs.forEach(e => e.onthis(x, y))
        }
    }
}

export default Gear