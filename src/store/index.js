import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = new  Vuex.Store({
  state: {
    student:{
      cl:null,
      examList:null
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
    },
    updateStudentExamListInfo(state,info){
      state.student.exameList = info
    }
  }
  ,
  actions: {
  },
  modules: {
  },
  getters:{
    studentClass:state => {return state.student.cl},
    studentExamList:state => {return state.student.examList}
  }
})

export default state
