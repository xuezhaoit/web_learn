function loadResource(name) {
    return new Promise((resolve,reject)=>{
        $.ajax({
            url:'img/'+name,
            // dataType:'text',
            dataType:'json',
            success(json){
                // resolve(text)
                let res = {}
                let count=0
                let totle = 0
                for (let name in json) {
                    totle ++
                   
                    let img = new Image()
                    img.src = 'img/'+json[name].src
                    img.onload=function(){
                        res[name]={
                            img: this,
                            frame: json[name].frame
                        }
                        count ++
                        if (count==totle) {
                            // console.log("count:"+count);
                            // console.log(res);
                            resolve(res)
                        }   
                    }
                }
                // console.log();
            },
            error(err){
                console.log(err);
                reject(err)
            }
        })
    })
    
}


async function loadResources(params) {
    let resources={
        bottom: 'bottom.json',
        bullet: 'bullet.json',
        cannon: 'cannon.json',
        coin: 'coin.json',
        fish: 'fish.json',
        number: 'number.json',
        web: 'web.json'
    }
    let imgs = {}
    try {
        for (let name in resources) {
            console.log(name);
            imgs[name] = await loadResource(resources[name])
        }
        console.log(imgs);
        
        window.__g_resouce=imgs
    } catch (error) {
        console.log(error);
        
    }
}

