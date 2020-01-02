import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = new  Vuex.Store({
  state: {
    student:{
      cl:null
    },
    teacher:{
    
    }
  },
  mutations: {
    updateStudentInfo(state,info){
      state.student.info = info
    },
    updateStudentClassInfo(state,info){
      state.student.cl = info
      window.console.log(state.student.cl)
    }
  }
  ,
  actions: {
  },
  modules: {
  },
  getters:{
    studentClass:state => {return state.student.cl}
  }
})

export default state
