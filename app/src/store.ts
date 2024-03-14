import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      userID: 0,
      token: '',
      auth: false
    }
  },
  mutations: {
    setUserID (state, id) {
      state.userID = id
    },
    setToken (state, token) {
      state.token = token
    },
    setAuth (state, auth) {
      state.auth = auth
    }
  },
  actions: {
    setUserID (context, id) {
      context.commit('setUserID', id)
    },
    setToken (context, token) {
      context.commit('setToken', token)
    },
    setAuth (context, auth) {
      context.commit('setAuth', auth)
    }
  },
  getters: {
    getUserID: state => state.userID,
    getToken: state => state.token,
    getAuth: state => state.auth
  }
})

export default store
