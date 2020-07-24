// sx sy
// w h
// x y

class Spirit{
    constructor(options){
        this.img = options.img

        // 图片的起始位置
        this.sx = options.sx || 0
        this.sy = options.sy || 0
        //图片素材宽度和高度 
        this.w = options.w || this.img.width
        this.h = options.h || this.img.height
        //图片的中心的位置 
        this.x = options.x || 0
        this.y = options.y || 0

        // 旋转角度
        this.rotation = options.rotation || 0
        // 速度
        this.speed = options.speed || 0 

    }

    // 画图
    draw(gd) {
        gd.save()
        gd.translate(this.x ,this.y)
        gd.rotate(this.rotation*Math.PI/180)
        // 旋转
        gd.drawImage(this.img,
        this.sx, this.sy, this.w, this.h,
        -this.w/2, -this.h/2, this.w, this.h
        )
        gd.restore()
    }

    // 移动
    move(){
        let speed_x = this.speed*Math.sin(this.rotation*Math.PI/180)
        let speed_y = this.speed*Math.cos(this.rotation*Math.PI/180)
        this.x += speed_x
        this.y -= speed_y
    }
}