<template>
    
   <ul>
       {{ state.count }}
       {{ data1 }}
       {{ data2 }}
       <list-item v-for="(item, index) in data1" :key="index" :str="item" @plusOne="plusOneFun" @miniOne="miniOneFun" ></list-item>
   </ul>
</template>
<script>
    import list_item from './list_item'
export default {
    data(){    
        return{
            count:this.$store.state.count,
            state:this.$store.state,
            data1:[
            ]
        } 
    },
    created() {
        // console.log(111122)
        // console.log(this.$store.getters.arr)
        // console.log(this.$store.state.count)
    },
    computed: {
        data2(){
            console.log('111111111111111111');
            this.data1= this.$store.getters.arr
            console.log(this.$store.getters.arr)
        }
    },
    mounted() {
        // this.myAxios({
        //     method: 'get',
        //     url:'http://localhost:8081/list'
        // }).then(res=>{
        //     alert('成功')
        //     console.log(res);
        //     this.data1=res.data
        // },rej=>{
        //     alert('失败')
        // })
        this.$store.dispatch('loadData')
    },
    components:{
        'list-item':list_item
    },
    methods: {
        plusOneFun(){
            this.count++
        },
        miniOneFun(){
            this.count--
        }
    },
}
</script>
<style lang="">
    
</style>