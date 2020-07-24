<template>
       <li>
           <h3> <input type="checkbox" name="" v-model="checked1"> {{ product.name }}</h3>
           <span>单价：{{ product.price }}，销量：{{product.num}}</span>
           <input type="button" value="增加" @click="addFun"><input type="button" value="减少" @click="minusFun">
       </li>
</template>
<script>
export default {
    data(){
        return {
            checked1:false,
            product:this.str
        }
    },
    props:['str'],
    mounted() {
        // console.log(this)
        // this.product=str
    },
    methods: {
        addFun(){
            console.log('item：addOne');
            this.$store.dispatch('addOne')
        },
        minusFun(){
            console.log('item：minusOne');
            this.$store.dispatch('minusOne')
        }
    },
    watch: {
        checked1( checked ){
            if (checked) {
                console.log(checked);
                this.$emit('plusOne',1)
            } else {
                 console.log(checked);
                 this.$emit('miniOne',1)
                 
            }
        }
    }
}
</script>
<style lang="">
    
</style>