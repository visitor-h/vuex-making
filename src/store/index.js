import Vue from 'vue'
import Vuex from '@/vuex'
import a from './a'
import b from './b'

// 1. vue.use(Vuex)    Vuex是一个对象  install 方法， 表示安装插件
// 2. Vuex中有一个Store类
// 3. 混入到组件中  增添store属性

Vue.use(Vuex)

export default new Vuex.Store({
  state: {    // -> data
    age: 10
  },
  getters: {    // 计算属性
    myAge(state) {
      return state.age + 20
    }
  },
  mutations: {    // method => 同步更改state  ,,  mutations 的第一个方法时状态
    changeAge(state, payload) {
      state.age += payload   // 更新age属性
    }
  },
  actions: {     // 异步操作做完后将结果提交给 mutations
    changeAge({commit, dispatch}, payload) {
      setTimeout(() => {
        commit('changeAge', payload)
      }, 1000)
    }
  },
  modules: {
    a,
    b
  }
})
