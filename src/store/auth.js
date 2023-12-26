
export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('vd_token'),
    user: null
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      localStorage.setItem('vd_token', token)
      console.log('meeee')
    },

    SET_USER(state, user) {
      state.user = user
    }
  },

  actions: {
    async setToken({ commit, state }, token) {
      if (token) {
        commit('SET_TOKEN', token)
      }
      console.log('meee')

      //   if (!state.token) {
      //     return;
      //   }

      //   try {
      //     const { data } = await Api().get("user");
      //     commit("SET_USER", data.data.user);
      //   } catch (error) {
      //     if (error) {
      //       commit("SET_USER", null);
      //     }
      //   }
    }
  },

  getters: {
    authenticated(state) {
      return state.token
    },
    token(state) {
      return state.token
    },
    user(state) {
      return state.user
    }
  }
}
