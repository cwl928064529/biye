/**
   * 通过 this.$store.state 属性的方式来访问状态
   * 通过 this.$store.commit('mutation中方法') 来修改状态 
   *
  */

import Vue from 'vue'
import Vuex from 'vuex' 

Vue.use(Vuex)

const state = {
  userInfo: null,
  menus: {},
}

export default new Vuex.Store({
  state,
  getters: { // 对state里面的数据可以进行过滤 （相当于计算属性）
    filterlist(state, getters) {
      
    }
  },
  mutations: {  // 只能跟踪同步操作
    saveUserInfo(state, payload){
      state.userInfo = payload[key];
    },
  },
  actions: {  // 有异步操作，先执行异步操作，然后触发mutations，再去更新state。（getters只是用来计算的）
    // 比如：从服务器请求list数据
    getlist ({commit}, payload) {  // context = {commit}， context：上下文，相对于$store
      
    } 
  },
  modules: {
    // a: moduleA
  }
})
