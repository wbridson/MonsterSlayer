const state = {
  playerMaxHealth: 100,
  playerCurrentHealth: 100,
  playerAtk: 10,
  playerDef: .1,
};

const getters = {
  playerMaxHealth: (state) => {
    return state.playerMaxHealth;
  },
  playerCurrentHealth: (state) => {
    return state.playerCurrentHealth;
  },
};

const mutations = {
  heal: (state, payload) => {
    state.playerCurrentHealth += payload;
  },
  damage: (state, payload) => {
    payload -= (state.playerDef * payload);
    state.playerCurrentHealth -= payload;
  },
};
export default {
  state,
  getters,
  mutations,
};
