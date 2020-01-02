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
      window.console.log(info)
      state.student.class = [{
        id: 1,
        name: "classOne",
        classCode: "1254088"

      }]
    }
  }
  ,
  actions: {
  },
  modules: {
  },
  getters:{
    studentClass:state => {return state.student.class}
  }
})
