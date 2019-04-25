const state = {
  access_token: '',
  refresh_token: ''
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
  },
  changeRefreshToken(state, refresh_token) {
    state.refresh_token = refresh_token;
  }
};

const actions = {
  changeAccessToken(context, access_token) {
    context.commit('changeAccessToken', access_token);
  },
  changeRefreshToken(context, refresh_token) {
    context.commit('changeRefreshToken', refresh_token);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}