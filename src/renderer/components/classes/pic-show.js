class PicShow {
    constructor (canvas, img) {
        const {width, height, top, left} = canvas.getBoundingClientRect()
        const {width: iwidth, height: iheight} = img
        // 设置横竖方向元素个数 此个数不是最终个数，因计算出的元素大小需要取整保证渲染性能，所以显示的总宽高不够，需要添加个数补全
        const numberx = 57
        const numbery = 30
        // 每个元素大小
        const stepx = Math.floor(width / numberx)
        const stepy = Math.floor(height / numbery)
        // 计算取整后需要添加多少个元素并与设定个数相加，横竖方向元素个数最终数值
        const numx = numberx + Math.ceil((width - stepx * numberx) / stepx)
        const numy = numbery + Math.ceil((height - stepy * numbery) / stepy)
        // 图片每个元素大小
        const istepx = iwidth / numx
        const istepy = iheight / numy
        // 设置多长时间完成动画效果，默认单位秒，默认帧数60
        const time = 2
        const zs = time * 60

        // 移动速度
        this.speedx = stepx / zs
        this.speedy = stepy / zs
        this.ispeedx = istepx / zs
        this.ispeedy = istepy / zs
        this.zs = zs
        this.flag = -zs
        this.change = 1
        this.stopcount = 60
        // 存储所有元素
        this.movingList = []
        
        this.width = canvas.width = width
        this.height = canvas.height = height
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.img = img
        
        for (let i = 0; i < numy; i++) {
            for (let j = 0; j < numx; j++) {
                this.movingList.push([stepx * j, stepy * i, istepx * j, istepy * i])
            }
        }
    }
    animation () {
        this.animahandle = requestAnimationFrame(e => this.animation())
        const {ctx, img, flag, speedx, speedy, ispeedx, ispeedy} = this
        ctx.clearRect(0, 0, this.width, this.height)
        if (flag < 0) {
            this.movingList.forEach(([endx, endy, iendx, iendy]) => {
                ctx.drawImage(img, iendx, iendy, - flag * ispeedx, - flag * ispeedy, endx, endy, flag * speedx, flag * speedy)
            })
        } else {
            this.movingList.forEach(([endx, endy, iendx, iendy]) => {
                ctx.drawImage(img, iendx, iendy, flag * ispeedx, flag * ispeedy, endx, endy, flag * speedx, flag * speedy)
            })
        }
        if ((flag === this.zs || flag === -this.zs) && this.stopcount < 60) {
            this.stopcount ++
            return
        } else {
            this.stopcount = 0
        }
        if (this.change === 1 && flag >= this.zs) {
            this.change = -1
        } else if (this.change === -1 && flag <= - this.zs) {
            this.change = 1
        }
        this.flag += this.change
    }
    distroy () {
        cancelAnimationFrame(this.animahandle)
    }
}

export default PicShow