import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.prototype.myAxios= axios
console.log(Vue.myAxios);

Vue.use(Vuex)

const store = new Vuex.Store({
    strict:true,
    state:{
        count:0,
        arr:[]
    },
    mutations:{
        addOne(state,arg){
        console.log('mutations：add');
        state.arr= arg
        console.log(state);
        
        state.count ++
        },
        minusOne(state){
        console.log('mutations：minus');
        state.count --
        }
    },
    actions:{
        // addOne({commit},arg){
        // console.log('actions：add');
        // commit('addOne',arg)
        
        // },
        // minusOne({commit},arg){
        // console.log('actions：minus');
        // commit('minusOne',arg)
        // }
        loadData({commit},art){
            axios({
                url:'http://localhost:8081/list',
                method:'get'
            }).then(res=>{
                console.log(res);
                alert('成功')
                commit('addOne',res.data)
            },rej=>{
                alert('失败')
            })
        }
    },
    getters:{
        arr(state){
            console.log(1112);
            console.log( state.arr);
            
            return state.arr
        }
    }
})
// export default {
//     store
// }
export default store