const state = {
  playerMaxHealth: 100,
  playerCurrentHealth: 100,
  playerMaxMana: 50,
  playerCurrentMana: 50,
  playerAtk: 20,
  playerDef: 20,
  playerExp: 0,
  playerExpToNextLevel: 100,
};

const getters = {
  playerMaxHealth: (state) => {
    return state.playerMaxHealth;
  },
  playerCurrentHealth: (state) => {
    return Math.min(Math.max(state.playerCurrentHealth, 0), state.playerMaxHealth);
  },
  playerMaxMana: (state) => {
    return state.playerMaxMana;
  },
  playerCurrentMana: (state) => {
    return Math.min(Math.max(state.playerCurrentMana, 0), state.playerMaxMana);
  },
  playerAtk: (state) => {
    return state.playerAtk;
  },
  playerDef: (state) => {
    return state.playerDef;
  },
  playerExp: (state) => {
    return state.playerExp;
  },
  playerExpToNextLevel: (state) => {
    return state.playerExpToNextLevel;
  }
};

const mutations = {
  healPlayer: (state, payload) => {
    state.playerCurrentHealth += payload;
  },
  damagePlayer: (state, payload) => {
    state.playerCurrentHealth -= payload;
  },
  updateMana: (state, payload) => {
    state.playerCurrentMana += payload;
  },
  awardExp: (state, payload) => {
    state.playerExp += payload;
  },
  playerExpToNextLevel: (state, payload) => {
    state.playerExpToNextLevel = payload;
  }
};
export default {
  state,
  getters,
  mutations,
};
