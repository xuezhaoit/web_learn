<template>
   <div>
     <Header></Header>
     <div class="index_36kr">
      <div class="pagewrap">
        <div class="mainlib_flex_wapper">
          <mainLib></mainLib>
          <sideLib></sideLib>
        </div>
      </div>
    </div>
    <Footer></Footer>
   </div>
     
     
     
</template>

<script>
import Footer  from './footer'
import Header from './header'
import mainLib from './mainLib'
import sideLib from './sideLib'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      foo:0
    }
  },
  components:{
    Footer,Header,mainLib,sideLib
  },
  mounted() {
    let p1 = document.getElementById("p1")
    console.log(p1);
    
    this.$nextTick(()=>{
      console.log(p1.innerHTML);
      
    }),
    Promise.resolve().then(()=>{
      console.log(p1.innerHTML);
      
    })
    this.foo=1
    console.log(p1.innerHTML);
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
