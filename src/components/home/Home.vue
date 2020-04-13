<template>
  <div class="home">
    <!-- 左边菜单： -->
    <home-leftNav class="left-home"></home-leftNav>

    <!-- home的center部分: -->
    <home-center class="center-home"></home-center>


  </div>
</template>

<script>
// @ is an alias to /src
import LeftNav from '../leftMenu/LeftNav'
import center from '@/components/home-center/homeCenter'

export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  components: {
    "home-leftNav":LeftNav,
    "home-center": center,
  }
}
</script>
<style>
  .home{
    position: absolute;
    left: 0;
    top: 48px;
    width: 100%;
    height: 686px;
    color: #fff;
    background: linear-gradient(-45deg, rgba(20, 20, 20, 1), rgba(18, 31, 209, 0.6), rgba(74, 36, 245, 0.6), rgba(211, 90, 130, 0.6));
    background-size: 400% 400%;
    -webkit-animation: Gradient 15s ease infinite;
    -moz-animation: Gradient 15s ease infinite;
    animation: Gradient 15s ease infinite;

    display: flex;
  }
  @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
  @-moz-keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
  @keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
  h1,
  h6 {
    font-family: 'Open Sans';
    font-weight: 300;
    text-align: center;
    position: absolute;
    top: 45%;
    right: 0;
    left: 0;
  }

  .home .left-home{
    flex: 0 0 140px
  }
  .home .center-home{
    flex: 1;
    width: 100%;
  }
</style>
