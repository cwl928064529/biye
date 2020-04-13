<template>
  <div class="leftnav">
    <ul>
      <li><a href="javascript:;" class="selected">热门</a></li>
      <li v-for="(v, i) in navArr" :key="i"><a href="javascript:;" @mouseenter="aBgd($event)" @mouseleave="noABgd($event)" :key="i">{{v}}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LeftNav',
  props: {
    msg:String
  },
  data () {
    return {
      navArr: ['HTML','CSS','JavaScript','JQuery','BootStrap','webpack','...']
    }
  },
  methods: {
    aBgd(event){
      let el = event.target;
      el.className = "selected";
    },
    noABgd(event){
      let el = event.target;
      let newClass = el.getAttribute("class").replace("selected","");
      el.setAttribute("class",newClass);
      // console.log(el.getAttribute("class"));
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  *{
    padding: 0;
    margin: 0;
  }
  .leftnav{
    position: relative;
    left: 0;
    top: 0;
    z-index: 40;
    height: 100%;
    width: 140px;
    opacity: 0.9;
    /* border: 1px solid black; */
  }
  .leftnav ul{
    position: fixed;
    left: 0;
    top: 50%;
    margin-top: -160px;
    list-style: none;
    text-align: center;
    background-color: #fff;
    border-radius: 5px;
  }
  li {
    margin-bottom: 2px;
    width: 110px;
    height: 40px;
    line-height: 40px;
    /* border: 1px solid black; */
  }
  a{
    text-decoration: none;
    width: 110px;
    height: 40px;
    display: inline-block;
    color: #000;
    border-radius: 5px;
  }
  .selected{
    background: linear-gradient(128deg, #148178 0%, #2a6486 90%);
    color: #fff;
  }
</style>
