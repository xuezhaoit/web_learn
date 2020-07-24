class Button extends Spirit{
    
    constructor(data,data_down){
        super({
            img : data.img,

            sx : data.frame.x ,
            sy : data.frame.y ,
    
            w : data.frame.w ,
            h : data.frame.h ,
        })
        this.data = data
        this.data_down = data_down
        
       
    }

    // 检查是否点击加减按钮
    checkbutton(x,y){
       
        let conditon1 = this.x-this.w/2 <= x
        let conditon2 = this.x+this.w/2 >= x
        let conditon3 = this.y-this.h/2 <= y
        let conditon4 = this.y+this.h/2 >= y
    
        if (
            conditon1 && conditon2 && conditon3 && conditon4
        ) {
            return true
        }else{
            return false
        }
    }
    checkdown(x,y){
       
        if (this.checkbutton(x,y)) {
          
            this.img = this.data_down.img
            this.sx = this.data_down.frame.x
            this.sy = this.data_down.frame.y
            this.w = this.data_down.frame.w
            this.h = this.data_down.frame.h
            return true
        }else{
            return false
        }

    }

    checkUp(x,y){
        
        if (this.checkbutton(x,y)) {
            this.img = this.data.img
            this.sx = this.data.frame.x
            this.sy = this.data.frame.y
            this.w = this.data.frame.w
            this.h = this.data.frame.h
            return true
        }else{
            return false
        }
    }
}
