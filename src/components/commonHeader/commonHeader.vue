<template>
    <div class="commonHeader">
        <!-- 左边部分： -->
        <div class="common_left common">
            <router-link to="/"><span class="bgdImage-home bgdImage"><i class="icon-home"></i></span>首页</router-link> 
            <router-link to="/special"><span class="bgdImage-special bgdImage"><i class="icon-book"></i></span>专栏</router-link> 
            <router-link to="/inquire"><span class="bgdImage-inquire bgdImage"><i class="icon-ask"></i></span>猿问</router-link> 
            <router-link to="/notes" class="mgRight"><span class="bgdImage-notes bgdImage"><i class="icon-note"></i></span>手记</router-link> 
        </div>
        <!-- 右边部分： -->
        <div class="common_right common">
            <router-link to="/enroll" class="en-re">登录</router-link>
            <a href="javascript:;" class="cor">|</a>
            <router-link to="/regist" class="en-re">注册</router-link>
        </div>
    </div>
</template>
<script>
    export default{
        name: "app",
        data () {
            return {
            
            }
        }
    }
</script>
<style lang="less">
    a{
        text-decoration: none;
    }
    .commonHeader{
        position: fixed;
        left: 0;
        top: 0;
        z-index: 40;
        font-size: 14px;
        width: 100%;
        height: 48px;
        box-shadow: 0 0 1px 0px rgba(0,0,0,0.3), 0 0 6px 2px rgba(0,0,0,0.15);
        background: rgba(15, 15, 15, 0.9);
        padding: 0 8px;
        box-sizing: border-box;
        display: flex;
        color: #fff;
        div.common{
            height: 100%;
            line-height: 48px;
        }
        div.common_left{
            flex: 1;
            margin-left: 80px;
        }
        div.common_right{
            flex: 0 0 auto;
            margin-right: 80px;
            font-size: 10px;
            padding: 0;
            a{
                padding: 0 2px;
                opacity: 0.6;
            }
            .cor{
                font-size: 14px;
            }
        }
        a{
            display: inline-block;
            width: auto;
            height: 48px;
            font-weight: bold;
            color: #fff;
            padding: 0 18px;
            &.router-link-exact-active {
                color: #42b983;
            }
            span.bgdImage{
                padding-right: 8px;
            }
        }
        
    } 
    
</style>
  