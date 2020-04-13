<template>
  <div class="special">
    <div class="title-column">
      <div class="special-container">
        <span class="bigtitle"><i class="icon-book"></i>专栏</span>
        <span class="book-sum">共有11个专栏</span>
      </div>
    </div>
    <div class="hot-column">
      <div class="hot-content">
        <div class="hot-title">
          <h2><a href="" target="_black" title="abc">标题</a></h2>
          <p>123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789</p>
        </div>
        <div class="hot-book">
          <div class="book-wrap">
            <ul>
              <li><a href=""><img src="./test.jpg" alt=""></a></li>
              <li><a href=""><img src="./test.jpg" alt=""></a></li>
              <li><a href=""><img src="./test.jpg" alt=""></a></li>
              <li><a href=""><img src="./test.jpg" alt=""></a></li>
              <li><a href=""><img src="./test.jpg" alt=""></a></li>
              <li><a href=""><img src="./test.jpg" alt=""></a></li>
              <li><a href=""><img src="./test.jpg" alt=""></a></li>
              <li><a href=""><img src="./test.jpg" alt=""></a></li>
              <li><a href=""><img src="./test.jpg" alt=""></a></li>
              <li><a href=""><img src="./test.jpg" alt=""></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="all-column">
      <div class="all-con">
        <ul>
          <li>
            <a href="">
              <img src="./test.jpg" alt="">
            </a>
            <div class="text-con">
              <a href="" target="_black">
                <p class="title">123456</p>
              </a>
              <p class="desc">0987654321</p>
              <div class="info">
                <span>共35节</span>
                <i class="icon-dot"></i>
                <span>2人已看</span>
              </div>
              <div class="try-read">
                <a href="" target="_black" class="try-read-item">
                  <div class="try-read-img"></div>
                  <p class="try-read-title">01 开篇词：为什么学习这门专栏</p>
                </a>
                <a href="" target="_black" class="try-read-item">
                  <div class="try-read-img"></div>
                  <p class="try-read-title">01 开篇词：为什么学习这门专栏</p>
                </a>
              </div>
              <a href="" target="_black" class="try-read-btn">立即阅读</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style lang="less">
.special{
  position: relative;
  left: 0;
  top: 48px;
  width: 100%;
  height: auto;
  background-color: #eee;
  .title-column{
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 60px;
    padding: 4px 0;
    box-shadow: 0 2px 4px 0 rgba(28,31,33,.06);
    background-color: #fff;
    .special-container{
      margin: 0 28px;
      .bigtitle{
        font-size: 32px;
        line-height: 60px;
        .icon-book{
          color: #42b942;
          margin-right: 4px;
        }
      }
      .book-sum{
        position: absolute;
        right: 296px;
        line-height: 60px;
        color: #9199a1;
        font-size: 14px;
      }
    }
  }
  .hot-column{ 
    position: relative;
    height: 332px;
    min-width: 1000px;
    background: url("./bg.gif") no-repeat center top;
    .hot-content{
      margin: 0 20px;
      padding-top: 30px;
      box-sizing: border-box;
      .hot-title{
        h2{
          text-align: center;
          a{
            display: inline-block;
            font-size: 20px;
            max-width: 516px;
            height: 20px;
            line-height: 20px;
            color: #FFF;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin: 0 auto;
          }
        }
        p{
          max-width: 516px;
          height: 20px;
          font-size: 16px;
          color: #FFF;
          padding-top: 10px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin: 0 auto;
          opacity: 0.3;
        }
      }
      .hot-book{
        width: 1000px;
        height: 240px;
        position: relative;
        left: 50%;
        top: 0;
        margin-left: -500px;
        .book-wrap{
          padding-top: 26px;
          position: absolute;
          left: 50%;
          margin-left: -315px;
          width: 629px;
          height: 194px;
          overflow: hidden;
          ul{
            width: 3500px;
            overflow: hidden;
            li{
              list-style: none;
              float: left;
              width: 126px;
              height: 168px;
              margin: 0 18px;
              a{

                img{
                  width: 117px;
                  height: 156px;
                  margin-top: 5px;
                  transition-timing-function: cubic-bezier(0.42, 0, 0.54, 1.28);
                  transition-duration: 0.5s;
                }
                img:hover{
                  display: inline-block;
                  height: 168px;
                  width: 126px;
                  margin-top: 0px;
                  overflow: hidden;
                }
              }
            }
            
          }
        }
      }
    }
  }
  .all-column{
    position: relative;
    width: 100%;
    margin-top: 28px;
    .all-con{
      position: relative;
      left: 50%;
      margin-left: -428px;
      margin-bottom: 48px;
      width: 856px;
      background: #fff;
      box-shadow: 0 2px 4px 0px rgba(28,31,33,.06);
      border-radius: 5px;
      padding: 50px 40px 40px 50px;
      box-sizing: border-box;
      ul{
        list-style: none;
        li{
          width: 100%;
          height: auto;
          box-sizing: border-box;
          border-bottom: 1px solid rgba(28,31,33,.1);
          margin-bottom: 38px;
          display: flex;
          a{
            display: block;
            
            height: 156px;
            flex: 1;
            img{
              width: 117px;
              height: 156px;
            }
          }
          .text-con{
            flex: 0 0 598px;
            /* border: 1px solid black; */
            width: 598px;
            padding: 0 0 16px 0;
            font-size: 0;
            a{
              height: auto;
              .title{
                font-weight: 700;
                font-size: 20px;
                color: #1c1f21;
                line-height: 24px;
                text-align: left;
                margin-bottom: 12px;
                margin-top: 4px;
              }
              .title:hover{
                color: #42b983;
              }
            }
            .desc{
              font-size: 14px;
              color: #545c63;
              font-weight: 600;
              line-height: 14px;
              text-align: left;
              margin-bottom: 18px;
              display: inline-block;
              max-width: 350px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .info{
              color: #9199a1;
              width: 100%;
              height: auto;
              margin-top: 14px;
              span{
                font-size: 12px;

              }
              .icon-dot{
                font-size: 12px;
              }
            }
            .try-read{
              margin-bottom: 42px;
              display: flex;
              a.try-read-item{
                flex: 1;
                margin-right: 10px;
                margin-buttom: 12px;
                .try-read-img{
                  display: inline-block;
                  vertical-align: middle;
                  margin-right: 6px;
                  background: url('./test.jpg');
                  background-repeat: no-repeat;
                  background-size: 34px auto;
                  background-position: center;
                  width: 30px;
                  height: 20px;
                }
                .try-read-title{
                  display: inline-block;
                  font-size: 12px;
                  line-height: 16px;
                  color: #545c63;
                  text-align: left;
                  width: 250px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  vertical-align: middle;
                }
              }
              a.try-read-item:nth-child(2n){
                margin-right: 0;
              }
              a.try-read-item:hover{
                color: 42b983;
              }
            }
          }
          .try-read-btn{
            position: absolute;
            bottom: 94px;
            right: 36px;
            font-size: 16px;
            color: #FFF;
            border-radius: 34px;
            background-color: #009999;
            line-height: 40px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
