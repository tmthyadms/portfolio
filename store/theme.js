export const state = () => ({
  isDark: false,
});

export const getters = {
  getIsDark: (state) => state.isDark,
};

export const mutations = {
  setIsDark(state, payload) {
    state.isDark = payload;
  },
};

export const actions = {};
