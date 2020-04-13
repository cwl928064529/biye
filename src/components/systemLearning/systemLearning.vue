<template>
    <div class="systemLearning">
        <h2>从入门到精通</h2>
        <div class="course-list-box">
            <div class="box-left-courseInfo">
                <div class="courseInfo-top">
                    <img src="./webqd.jpg" alt="">
                    <div class="vidio-btn">
                        <i class="icon-play"></i>视频导学
                    </div>
                </div>
                <div class="courseInfo-bottom">
                    <a href="" target="_black" class="cheader">
                        <img src="./html.jpg" alt="" class="header_img">
                    </a>
                    <div class="cinfo">
                        <a href="" target="_black" class="coursename">HTML</a>
                        <p class="courseshort">超文本标记语言</p>
                    </div>
                    <p class="cdesc">HTML（HyperText Mark-up Language）是一种制作万维网页面的标准语言，是万维网浏览器使用的一种语言，它消除了不同计算机之间信息交流的障碍。HTML（HyperText Mark-up Language）是一种制作万维网页面的标准语言，是万维网浏览器使用的一种语言，它消除了不同计算机之间信息交流的障碍。</p>
                    <a href="" target="_black" class="cmorebtn">
                        了解更多
                        <i class="icon-right"></i>
                    </a>
                </div>
            </div>
            <div class="box-right-desc">
                <div class="content-box">
                    <a href="" target="_black" class="bigtitle">Vue.js 2.5 + cube-ui 重构饿了么 App</a>
                    <p class="smalltitle">
                        Vue.js全版本(涵盖1.0，2.0，2.5),开发到部署全流程实战教学<br>
                        在版本迭代中看透Vue的前世今生，在项目中感受Vue的优化提升<br>
                        以外卖App商家页面为主线，融合核心业务模块，高仿饿了么
                    </p>
                </div>
                <div class="loopover">
                    <div class="loop-container">
                        <div class="loop-active"></div>
                    </div>
                </div>
                <div class="more-box">
                    <div class="oleft headerpic">
                        <ul class="picitems">
                            <li></li>
                        </ul>
                    </div>
                    <div class="oleft psum">
                        <div class="sum">... 已经有999同学讨论</div>
                    </div>
                    <a href="" class="look-btn">立即查看</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style lang="less">
    .systemLearning{
        position: absolute;
        top: 802px;
        left: 50%;
        margin-left: -545px;
        width: 980px;
        color: black;
    }
    .systemLearning h2{
        width: 100%;
        text-align: center;
        height: 68px;
        line-height: 68px;
        margin: 48px 0 36px;
    }
    .systemLearning .course-list-box{
        display: flex;
        margin-bottom: 24px;
        position: relative;
        width: 100%;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0px 8px 16px 0 rgba(7, 17, 27, 0.1);
        .box-left-courseInfo{
            flex: 0 0 300px;
            position: relative;
            width: 300px;
            height: inherit;
            .courseInfo-top{
                cursor: pointer;
                overflow: hidden;
                position: relative;
                img{
                    width: 300px;
                    height: 168px;
                }
                .vidio-btn{
                    position: absolute;
                    top: 66px;
                    left: 98px;
                    background: rgba(7,17,27,.6);
                    border: 2px solid rgba(255,255,255,.8);
                    border-radius: 24px;
                    font-size: 14px;
                    color: #FFF;
                    line-height: 24px;
                    padding: 6px 12px;
                    .icon-play{
                        font-size: 16px;
                        margin-right: 4px;
                    }
                    
                }
            }
            .courseInfo-bottom{
                padding: 0 36px;
                a.cheader{
                    display: inline;
                    .header_img{
                        width: 62px;
                        height: 62px;
                        border: 2px solid #FFF;
                        border-radius: 50%;
                        box-shadow: 0 4px 8px 0 rgba(7,17,27,.2);
                        position: absolute;
                        top: 156px;
                        left: 36px;
                    }
                }
                .cinfo{
                    padding: 12px 0 0 76px;
                    .coursename{
                        font-size: 16px;
                        height: 24px;
                        display: inline-block;
                        line-height: 24px;
                    }
                    .courseshort{
                        font-size: 12px;
                    }
                }
                .cdesc{
                    margin-top: 26px;
                    font-size: 12px;
                    line-height: 24px;
                    font-weight: 200;
                    overflow: hidden;
                    text-overflow: ellipsis; /* 显示省略符号来代表被修剪的文本。*/
                    display: -webkit-box; /* 该属性会将此元素及其直系子代加入弹性框模型中 */
                    -webkit-line-clamp: 5; /* 只能显示5行 */
                    -webkit-box-orient: vertical;/* 该属性定义父元素的子元素是垂直排列的 */
                }
                .cmorebtn{
                    font-size: 12px;
                    margin-top: 20px;
                    line-height: 24px;
                    display: block;
                    .icon-right{
                        margin-left: 4px;
                    }
                }
            }
        }
        .box-right-desc{
            width: 584px;
            height: 100%;
            background: #fff;
            position: relative;
            padding: 0 48px;
            top: 0;
            left: 0;
            .content-box{
                padding-top: 48px;
                a.bigtitle{
                    display: block;
                    width: auto;
                    font-size: 24px;
                    color: #009999;
                }
                p.smalltitle{
                    font-size: 14px;
                    line-height: 32px;
                }
            }
            .loopover{
                position: absolute;
                bottom: -145px;
                width: 584px;
                border: 1px solid #eee;
                .loop-container{
                    .loop-active{
                        width: 584px;
                        height: 98px;
                        border: 1px solid #eee;
                        transform: translate3d(0px, 0px, 0px);
                        opacity: 1;
                        transition-duration: 0ms;
                        margin-top: 32px
                    }
                }
            }
            .more-box{
                position: absolute;
                margin: auto;
                bottom: -230px;
                height: 50px;
                width: 586px;
                /* display: inline-block; */
                .oleft{
                    float: left;
                }
                .psum{
                    height: 100%;
                    .sum{
                        height: 100%;
                        line-height: 50px;
                    }
                }
                .look-btn{
                    position: absolute;
                    bottom: 0px;
                    right: 0px;
                    padding: 13px 28px;
                    font-size: 16px;
                    color: #FFF;
                    border-radius: 34px;
                    background-color: rgb(0,153,153);
                    line-height: 40px;
                    text-align: center;
                }
            }

        }
    }

</style>