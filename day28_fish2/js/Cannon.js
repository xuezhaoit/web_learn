class Cannon extends Spirit{
    
    constructor(type){
        
        // 没有该类型类型，抛错
        if (type > 7 || type < 1) {
            throw new Error('炮的类型不对，只能是1-7之间');
        }
        
        
        let cannon_data =  __g_resouce['cannon'][`cannon${type}`]
        super({
            img : cannon_data.img,

            sx : cannon_data.frame.x ,
            sy : cannon_data.frame.y ,
    
            w : cannon_data.frame.w ,
            h : cannon_data.frame.h 
        })
        this.type=type || 1;
    }

    setType(newtype){
        if (newtype > 7 || newtype < 1) {
            throw new Error('炮的类型不对，只能是1-7之间');
        }
        
        
        let cannon_data_new =  __g_resouce['cannon'][`cannon${newtype}`]
        
        this.img = cannon_data_new.img

        this.sx = cannon_data_new.frame.x 
        this.sy = cannon_data_new.frame.y 

        this.w = cannon_data_new.frame.w 
        this.h = cannon_data_new.frame.h 
    
    }
}
