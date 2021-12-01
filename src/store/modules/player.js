const state = {
  playerMaxHealth: 100,
  playerCurrentHealth: 100,
  playerAtk: 5,
  playerDef: 5,
};

const getters = {
  playerMaxHealth: (state) => {
    return state.playerMaxHealth;
  },
  playerCurrentHealth: (state) => {
    return state.playerCurrentHealth;
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
