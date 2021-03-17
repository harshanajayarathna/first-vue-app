import { createStore } from 'vuex'

export default createStore({
  state: {
    username: 'Harshana',
    userAge: 0,
    todos: [
      { id: 1, text: 'Write an assay', done: true },
      { id: 2, text: 'start a meeting', done: true },
      { id: 3, text: 'Make a memo', done: false }
    ],
    selectedUser: null
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    age (state) {
      return state.userAge
    }
  },
  mutations: {
    SET_USER_AGE (state, payload) {
      state.userAge = state.userAge + payload
    },
    SET_SELECTED_USER (state, payload) {
      state.selectedUser = payload
      // console.log(state.selectedUser)
    }
  },
  actions: {
    SET_AGE (context, payload) {
      context.commit('SET_USER_AGE', payload)
    },
    SET_SELECTED_USER (context, payload) {
      context.commit('SET_SELECTED_USER', payload)
      // console.log(payload)
    }
  },
  modules: {
  }
})
