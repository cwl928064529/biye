<template>
  <div id="app">
    <!-- 共用头： -->
    <v-commonHeader></v-commonHeader>
    <router-view/>

    

  </div>
  
</template>
<script>
  import commonHeader from './components/commonHeader/commonHeader.vue'
  export default{
    name: "app",
    data () {
      return {
        
      }
    },
    components:{
      "v-commonHeader": commonHeader,
    }
  }
</script>
<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
/* @import "./common/stylus/icon.styl"; */

html,body{
  width: 100%;
  height: 100%;
}
*{
  padding: 0;
  margin: 0;
}
#app{
  width: 100%;
  height: 100%;
}



</style>
