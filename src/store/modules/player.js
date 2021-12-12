const state = {
  playerMaxHealth: 0,
  playerCurrentHealth: 0,
  playerMaxMana: 0,
  playerCurrentMana: 0,
  playerMaxHealthPoints: 9,
  playerMaxManaPoints: 5,
  playerAtkPoints: 30,
  playerAtkValue: 0,
  playerDefPoints: 20,
  playerDefValue: 0,
  playerIntelligencePoints: 10,
  playerIntelligenceValue: 0,
  baseHp: 30,
  baseMp: 30,
  baseAtk: 10,
  baseDef: 10,
  baseInt: 10,
  hpModifier: 7.8,
  mpModifier: 4.63,
  atkModifier: 2.13,
  defModifier: 2.13,
  intModifier: 3.2,
  playerExp: 0,
  playerExpToNextLevel: 100,
  playerLevel: 1,
  attributePointsAvailable: 0,
};

const getters = {
  playerMaxHealth: (state) => {
    return getMaxHealth(state);
  },
  playerCurrentHealth: (state) => {
    return Math.min(Math.max(state.playerCurrentHealth, 0), getMaxHealth(state));
  },
  playerMaxMana: (state) => {
    return getMaxMana(state);
  },
  playerCurrentMana: (state) => {
    return Math.min(Math.max(state.playerCurrentMana, 0), getMaxMana(state));
  },
  playerMaxHealthPoints: (state) => {
    return state.playerMaxHealthPoints;
  },
  playerMaxManaPoints: (state) => {
    return state.playerMaxManaPoints;
  },
  playerAtkPoints: (state) => {
    return state.playerAtkPoints;
  },
  playerAtkValue: (state) => {
    return Math.round(state.baseAtk + (state.playerAtkPoints * state.atkModifier));
  },
  playerDefPoints: (state) => {
    return state.playerDefPoints;
  },
  playerDefValue: (state) => {
    return Math.round(state.baseDef + (state.playerDefPoints * state.defModifier));
  },
  playerIntelligencePoints: (state) => {
    return state.playerIntelligencePoints;
  },
  playerIntelligenceValue: (state) => {
    return Math.round(state.baseInt + (state.playerIntelligencePoints * state.intModifier));
  },
  playerLevel: (state) => {
    return state.playerLevel;
  },
  attributePointsAvailable: (state) => {
    return state.attributePointsAvailable;
  },
  playerExp: (state) => {
    return state.playerExp;
  },
  playerExpToNextLevel: (state) => {
    return state.playerExpToNextLevel;
  },
  playerStatVariables: (state) => {
    return {
      baseHp: state.baseHp,
      baseMp: state.baseMp,
      baseAtk: state.baseAtk,
      baseDef: state.baseDef,
      baseInt: state.baseInt,
      hpModifier: state.hpModifier,
      mpModifier: state.mpModifier,
      atkModifier: state.atkModifier,
      defModifier: state.defModifier,
      intModifier: state.intModifier,
    }
  }
};

const mutations = {
  resetHealth: (state) => {
    const maxHealth = getMaxHealth(state);
    state.playerCurrentHealth = maxHealth;
  },
  resetMana: (state) => {
    const maxMana = getMaxMana(state);
    state.playerCurrentMana = maxMana;
  },
  healPlayer: (state, payload) => {
    state.playerCurrentHealth += payload;
  },
  damagePlayer: (state, payload) => {
    state.playerCurrentHealth -= payload;
  },
  updateMana: (state, payload) => {
    state.playerCurrentMana += payload;
  },
  levelUp: (state) => {
    const expOverflow = state.playerExp - state.playerExpToNextLevel;
    state.playerExp = expOverflow;
    state.attributePointsAvailable++;
    state.playerLevel++;
  },
  playerMaxHealthPoints: (state, payload) => {
    state.playerMaxHealthPoints = payload;
  },
  playerMaxManaPoints: (state, payload) => {
    state.playerMaxManaPoints = payload;
  },
  playerAtkPoints: (state, payload) => {
    state.playerAtkPoints = payload;
  },
  playerDefPoints: (state, payload) => {
    state.playerDefPoints = payload;
  },
  playerIntelligencePoints: (state, payload) => {
    state.playerIntelligencePoints = payload;
  },
  attributePointsAvailable: (state, payload) => {
    state.attributePointsAvailable = payload;
  },
  awardExp: (state, payload) => {
    state.playerExp += payload;
  },
  playerExpToNextLevel: (state, payload) => {
    state.playerExpToNextLevel += (65 * payload);
  }
};

function getMaxHealth(state){
  return Math.round(state.baseHp + (state.playerMaxHealthPoints * state.hpModifier));
}
function getMaxMana(state){
  return Math.round(state.baseMp + (state.playerMaxManaPoints * state.mpModifier));
}
export default {
  state,
  getters,
  mutations,
};
