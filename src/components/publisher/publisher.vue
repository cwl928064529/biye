<template>
    <div class="publisher">
        <div class="publisher_wrap">
            <div class="title_area">
                <div class="title">
                    <span class="txt">What's new with you?</span>
                </div>
            </div>
            <div class="input">
                <textarea class="W_input" title="输入框" style="resize:none; height: 68px"></textarea>
            </div>
            <div class="func_area">
                <div class="left_kinds">
                    <a href="javascript:;">
                        <i class="icon-face icon"></i>表情
                    </a>
                    <a href="javascript:;" type='file' accept="image/*" @change="selectImg">
                        <i class="icon-picture icon"></i>图片
                    </a>
                </div>
                <div class="right_func">
                    <a href="javascript:;" class="W_btn">发布</a>
                </div>

                <form name="imgForm" id="imgForm" enctype="multipart/form-data" action="图片上传接口" method='post'>
                    <input class="input-loc-img"  name="imgLocal" id="imgLocal" type='file' accept="image/*" @change="selectImg" />
                </form> 
            </div>
        </div>
<el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
    </div>
</template>
<script>
    export default{
        name: "publisher",
        data () {
            return {
                dialogVisible: false 
            }
        },
        methods: {
            handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
            selectImg(){
                let that=this;
                let imgFile = document.getElementById("imgLocal").files[0];//取到上传的图片
                console.log(imgFile);
                console.log(document.getElementById("imgLocal").files);//由打印的可以看到，图片    信息就在files[0]里面
                let formData=new FormData();//通过formdata上传
                formData.append('file',imgFile);
                this.$http.post('图片上传接口',formData,{
                    method: 'post',
                    headers: {'Content-Type': 'multipart/form-data'}
                }).then(function (res) {
                    console.log(res.data);//
                }).catch(function(error){
                    console.log(error);
                })
            }
        }
    }
</script>
<style lang="less">
    .publisher{

        & .publisher_wrap{
            background-color: #fff;
            padding: 15px 10px 10px;

            & .title_area{
                position: relative;
                overflow: hidden;
                height: 21px;

                & .title{
                    outline-style: none;
                    font: normal 16px Tahoma;
                    line-height: 16px;
                    float: left;
                    width: 200px;
                    height: 21px;

                    & .txt{

                    }
                }
            }

            & .input{
                position: relative;
                border-width: 1px;
                border-style: solid;
                margin: 4px 0 0;
                padding: 5px;
                box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.15) inset;
                border: 1px solid #cccccc;
                min-height: 68px;

                & .W_input{
                    width: 100%;
                    margin: 0px;
                    padding: 0px;
                    border-style: none;
                    border-width: 0px;
                    font-size: 14px;
                    overflow-wrap: break-word;
                    line-height: 18px;
                    overflow: hidden;
                    outline: none;
                }
            }

            & .input:hover {
                border: 1px solid #42b942;
                box-shadow: 0px 0px 3px 0px rgba(19, 241, 30, 0.45) inset;
            }

            & .func_area{
                position: relative;

                & .left_kinds{
                    float: left;
                    width: 380px;
                    height: 24px;
                    padding: 10px 0 0;
                    overflow: hidden;
                    line-height: 24px;

                    & a{
                        position: relative;
                        display: inline-block;
                        margin: 0 18px 0 0;
                        overflow: hidden;
                        font-size: 16px;
                        color: #000;
                        height: 24px;

                        & .icon{
                            font-size: 16px;
                            margin-right: 5px;
                            line-height: 16px;
                        }

                        & .icon-face{
                            color: #ffa405;
                        }

                        & .icon-picture{
                            color: #84c002;
                        }
                    }
                }

                & .right_func{
                    float: right;
                    padding: 5px 0 0;
                    text-align: right;
                    width: 200px;
                    white-space: nowrap;

                    & .W_btn{
                        display: inline-block;
                        height: 28px;
                        line-height: 29px;
                        width: 60px;
                        font-size: 14px;
                        background: #ff8140;
                        border: 1px solid #f77c3d;
                        color: #fff;
                        box-shadow: 0px 1px 2px rgba(0,0,0,0.25);
                        text-align: center;
                    }

                    & .W_btn_disable{
                        background: #ffc09f;
                        color: #fff;
                        border: 1px solid #fbbd9e;
                        box-shadow: none;
                        cursor: default;
                        text-align: center;
                    }
                }
            }
        }

        
    }
</style>