const state = {
  access_token: '',
  refresh_token: '123'
};

const getters = {
  accessToken(state) {
    return state.access_token;
  },
  refreshToken(state) {
    return state.refresh_token;
  }
};

const mutations = {
  changeAccessToken(state, access_token) {
    state.access_token = access_token;
  }
};

const actions = {
  changeAccessToken(context, access_token) {
    context.commit('changeAccessToken', access_token);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}