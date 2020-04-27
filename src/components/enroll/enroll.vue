<template>
  <div class="newLogin-page">
    <div class="login-box">
      <div class="app-desc"></div>
      <div class="main-content">
        <el-form class="login-form" 
                ref="loginForm" 
                :model="loginInfo" 
                :rules="rules" 
                :validate-on-rule-change="false">
          <h1 class="login-title">HI,{{c.a}}</h1>
          <el-form-item prop="userName">
            <el-input :placeholder=c.b
                        size="normal" 
                        v-model.trim="loginInfo.userName">
                <i slot="prefix" class="icon-user"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input :placeholder="c.c" 
                        size="normal" 
                        type="password"
                        v-model.trim="loginInfo.password" @keydown.enter.nation="loginEvent">
                <i slot="prefix" class="icon-locked"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="normal" @click="loginEvent">{{c.h}}</el-button>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="loginInfo.agreeOpt"></el-checkbox>
            <span>{{c.d}}
              <span class="protocol" @click="dialogVisible = true">{{c.e}}</span>
            </span>
          </el-form-item>
          <div class="register"></div>
        </el-form>
      </div>
    </div>
    <el-dialog :title="c.e"
                :visible.sync="dialogVisible"
                width="30%"
                center>
      <div>
        <p>{{c.f}}</p>
        <p>{{c.g}}</p>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="mini">{{c.i}}</el-button>
        <el-button type="primary" @click="dialogVisible = false" size="mini">{{c.j}}</el-button>
      </div>

    </el-dialog>
  </div>
</template>
<script>
import {RSAKeyPair, encryptedString} from './rsa/RSA_Stripped.js'
import {setMaxDigits} from './rsa/BigInt.js'

export default{
  name: "login",
  data () {
    return {
      from: {
        path: '/'
      },
      dialogVisible: false,
      loginInfo:{
        type: '2',
        userName: '',
        password: '',
        agreeOpt: true
      },
      c: {
        "a": "欢迎登录",
        "b": "请输入账号",
        "c": "请输入密码",
        "d": "我已阅读并同意",
        "e": "《使用须知》",
        "f": "1、系统中所使用的数据均通过合法渠道获得，内容展示结果仅供您参考使用，请您对接触到的非公开数据信息进行保密",
        "g": "2、本系统将即时进行相关数据的更新与完善，如您有相应的建议或建议欢迎反馈",
        "h": "登录",
        "i": "取消",
        "j": "确定",
        "k": "请先阅读并同意《使用须知》",
        "l": "请检查输入的用户名和密码",
        "m": "请输入用户名",
        "n": "请输入密码",
        "o": "",
      }
    }
  },
  computed: {
    rules () {
      return {
        userName: [{required: true, message: this.c.m, trigger: ['blur', 'change']}],
        password: [{required: true, message: this.c.n, trigger: ['blur', 'change']}]
      }
    }
  },
  methods: {
    loginEvent: function() {
      if (!this.loginInfo.agreeOpt) {
        return this.$message.error(this.c.k)
      }
      // console.log(this.$refs.loginForm)
      this.$refs.loginForm.validate(async flag => {
        if (flag) {
          let res = await this.$api.getRsaPublicKeyApi()
          console.log(res)
          if (res.result.modulus && res.result.publicExponent){
            setMaxDigits(131)
            let key = new RSAKeyPair(res.result.publicExponent, '', res.result.modulus)
            this.getLoginInfo({
              username: this.loginInfo.userName,
              password: encryptedString(key, this.loginInfo.password),
              type: this.loginInfo.type
            })
          }
        } else {
          this.$message.error(this.c.l)
        }
      })
    },
    getLoginInfo: async function (obj) {
      const res = await this.$api.loginApi(obj)
      if (res.responseCode === 0) {
        window.localStorage.setItem('userObjStr', JSON.stringify(res.result))
        this.$store.commit('saveUserInfo', res.result)
        window.accessToken = res.result.userTokenId
        // 开发设置cookie
        if (process.env.NODE_ENV !== 'production') {
          let setCookie = (name, value) => {
            let exp = new Date()
            exp.setTime(exp.getDate() + new Date(0))
            document.cookie = name + '=' + value + ';path=/;expires=' + exp.toGMTString()
          }
          setCookie('PASESSION', res.result.PASESSION)
          setCookie('CAS_SSO_COOKIE', res.result.CAS_SSO_COOKIE)
        }
        this.$message({
          type: 'success',
          message: res.responseMsg,
          duration: 1000,
          onClose: () => {
            this.$router.push(this.from)
          }
        })
      } else {
        this.$message({
          type: 'error',
          message: res.responseMsg
        })
      }
    }
  }
}
</script>
<style lang="less">
.newLogin-page {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("./img/bgd.jpg") no-repeat center/cover;

  & .login-box {
    position: relative;
    width: 804px;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    & .app-desc {
      position: relative;
      width: 400px;
      height: 480px;
      background: url("./img/hcj.jpg") no-repeat center/cover;
      opacity: 0.7;
    }

    & .main-content {
      position: relative;

      & .login-form {
        width: 460px;
        height: 400px;
        background-color: #fff;
        box-sizing: border-box;
        padding: 20px 40px;
      }

      & .login-title {
        text-align: center;
        padding-bottom: 20px;
      }

      & .el-form-item {
        margin-bottom: 32px;
      }

      & input:-webkit-autofill {
        box-shadow: 0 0 0 1000px #fff inset;
      }

      & .el-input__inner {
        border: none !important;
        border-bottom: 1px solid #9195AC !important;
        background-color: #fff !important;
        border-radius: 0 !important;
      }

      & button {
        width: 100%;
      }

      & .protocol {
        color: #f16a00;
        cursor: pointer;
      }
    }
  }
}
</style>