import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    student:{

    },
    teacher:{

    }
  },
  mutations: {
    updateStudentInfo(state,info){
      state.student.info = info
    },
    updateStudentClassInfo(state,info){
      state.student.class = info
    }
  }
  ,
  actions: {
  },
  modules: {
  }
})
