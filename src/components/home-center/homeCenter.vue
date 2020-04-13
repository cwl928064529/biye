<template>
    <!-- home的center： -->
    <div class="center">
        <!-- 轮播图： -->
        <center-rotationPic></center-rotationPic>

        <!-- 从入门到精通块(systemLearning)： -->
        <center-systemLearning></center-systemLearning>

    </div>
</template>
<script>
import rotationPic from '@/components/lunbo/lunbo.vue'
import systemLearning from '../systemLearning/systemLearning'
export default{
    name: "homeCenter",
    data () {
        return {
            
        }
    },
    components: {
        "center-rotationPic": rotationPic,
        "center-systemLearning": systemLearning,
    }
}
</script>
<style>
    .center{
        position: relative;
        top: 0;
        left: 0;
    }
</style>