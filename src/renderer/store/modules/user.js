import { refreshToken } from '@/utils/token';
import db from '@/datastore';

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
  async changeAccessToken(context, access_token) {
    await db.remove({ type: 'access_token'});    
    await db.insert({ type: 'access_token', access_token: access_token });
    context.commit('changeAccessToken', access_token);
  },
  async changeRefreshToken(context, refresh_token) {
    db.remove({ type: 'refresh_token' });
    db.insert({ type: 'refresh_token', refresh_token: refresh_token });
    context.commit('changeRefreshToken', refresh_token);
  },
  async refreshAccessToken(context) {
    const access_token = await refreshToken(state.refresh_token);
    await db.remove({ type: 'access_token' });
    await db.insert({ type: 'access_token', access_token });
    context.commit('changeAccessToken', access_token);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
