export const state = () => ({
  isDarkMode: false,
});

export const getters = {
  getIsDarkMode: (state) => state.isDarkMode,
};

export const mutations = {
  setIsDarkMode(state, payload) {
    state.isDarkMode = payload;
  },
};

export const actions = {};
