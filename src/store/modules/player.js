const state = {
  playerMaxHealth: 100,
  playerCurrentHealth: 100,
  playerAtk: 20,
  playerDef: 20,
};

const getters = {
  playerMaxHealth: (state) => {
    return state.playerMaxHealth;
  },
  playerCurrentHealth: (state) => {
    return Math.min(Math.max(state.playerCurrentHealth, 0), state.playerMaxHealth);
  },
  playerAtk: (state) => {
    return state.playerAtk;
  },
  playerDef: (state) => {
    return state.playerDef;
  }
};

const mutations = {
  healPlayer: (state, payload) => {
    state.playerCurrentHealth += payload;
  },
  damagePlayer: (state, payload) => {
    state.playerCurrentHealth -= payload;
  },
};
export default {
  state,
  getters,
  mutations,
};
