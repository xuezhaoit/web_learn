class Bullet extends Spirit{
    
    constructor(type){
        
        let bullet_data =  __g_resouce['bullet'][`bullet${type}`]
        super({
            img : bullet_data.img,

            sx : bullet_data.frame.x ,
            sy : bullet_data.frame.y ,
    
            w : bullet_data.frame.w ,
            h : bullet_data.frame.h ,
        })
        this.speed = 10
        this.type = type
        
        
    }

    setType(newtype){
        if (newtype > 7 || newtype < 1) {
            throw new Error('炮的类型不对，只能是1-7之间');
        }
        console.log(newtype);
        
        let bullet_data_new =  __g_resouce['bullet'][`bullet${newtype}`]
        
        this.img = bullet_data_new.img

        this.sx = bullet_data_new.frame.x 
        this.sy = bullet_data_new.frame.y 

        this.w = bullet_data_new.frame.w 
        this.h = bullet_data_new.frame.h 
        
        
    
    }
}
