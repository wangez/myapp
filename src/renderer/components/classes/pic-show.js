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
        // 计算取证后需要添加多少个元素并与设定个数相加，横竖方向元素个数最终数值
        const numx = numberx + Math.ceil((width - stepx * numberx) / stepx)
        const numy = numbery + Math.ceil((height - stepy * numbery) / stepy)
        // 设置多长时间完成动画效果，默认单位秒，默认帧数60
        const time = 2
        const zs = time * 60
        
        // 图片比canvas大，需要图片居中展示，计算开始展示坐标位置
        this.y = Math.floor((iheight - height) / 2)  
        this.x = Math.floor((iwidth - width) / 2)
        // 移动速度
        this.speedx = stepx / zs
        this.speedy = stepy / zs
        this.stepx = stepx
        this.stepy = stepy
        this.flag = 0
        this.zs = zs
        // 存储所有元素
        this.movingList = []
        this.movedList = []
        
        this.width = canvas.width = width
        this.height = canvas.height = height
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.img = img
        
        for (let i = 0; i < numy; i++) {
            for (let j = 0; j < numx; j++) {
                this.movingList.push([stepx * j, stepy * i])
            }
        }
    }
    animation () {
        const {ctx, img, flag, speedx, speedy, x, y, stepx, stepy} = this
        if (this.flag < this.zs) {
            this.animahandle = requestAnimationFrame(e => this.animation())
        }
        this.movingList.forEach(([endx, endy]) => {
            ctx.drawImage(img, endx + x, endy + y, stepx, stepy, endx, endy, flag * speedx, flag * speedy)
        })
        this.flag ++
    }
    distroy () {
        cancelAnimationFrame(this.animahandle)
    }
}

export default PicShow