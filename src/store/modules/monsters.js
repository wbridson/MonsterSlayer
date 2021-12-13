import { getRandomVal } from "../../functions";
const state = {
  activeMonster: 0,
  monsters: [
    {
      monsterID: 0,
      monsterName: "Troll",
      monsterLevel: 1,
      monsterBaseExpPayout: 100,
      monsterMaxHealth: 200,
      monsterCurrentHealth: 200,
      monsterAtk: 10,
      monsterDef: 3,
    },
    {
      monsterID: 1,
      monsterName: "Vampire",
      monsterLevel: 1,
      monsterBaseExpPayout: 100,
      monsterMaxHealth: 90,
      monsterCurrentHealth: 90,
      monsterAtk: 20,
      monsterDef: 1,
    },
    {
      monsterID: 2,
      monsterName: "Werewolf",
      monsterLevel: 1,
      monsterBaseExpPayout: 100,
      monsterMaxHealth: 120,
      monsterCurrentHealth: 120,
      monsterAtk: 10,
      monsterDef: 2,
    },
  ],
};
const getters = {
  activeMonster: (state) => {
    return state.activeMonster;
  },
  monsterName: (state) => {
    return state.monsters[state.activeMonster].monsterName;
  },
  monsterLevel: (state) => {
    return state.monsters[state.activeMonster].monsterLevel;
  },
  monsterExpPayout: (state) => {
    return state.monsters[state.activeMonster].monsterBaseExpPayout * state.monsters[state.activeMonster].monsterLevel;
  },
  monsterMaxHealth: (state) => {
    return state.monsters[state.activeMonster].monsterMaxHealth;
  },
  monsterCurrentHealth: (state) => {
    return Math.min(
      Math.max(state.monsters[state.activeMonster].monsterCurrentHealth, 0),
      state.monsters[state.activeMonster].monsterMaxHealth
    );
  },
  monsterAtk: (state) => {
    return state.monsters[state.activeMonster].monsterAtk;
  },
  monsterDef: (state) => {
    return state.monsters[state.activeMonster].monsterDef;
  },
};
const mutations = {
  selectNewMonster: (state, payload) => {
    state.activeMonster = Math.floor(Math.random() * state.monsters.length);
    setMonsterLevel(state, payload);
  },
  resetMonsterHealth: (state) => {
    state.monsters[state.activeMonster].monsterCurrentHealth = state.monsters[state.activeMonster].monsterMaxHealth;
  },
  healMonster: (state, payload) => {
    state.monsters[state.activeMonster].monsterCurrentHealth += payload;
  },
  damageMonster: (state, payload) => {
    state.monsters[state.activeMonster].monsterCurrentHealth -= payload;
  },
};

const actions = {
  selectNewMonster(context) {
    context.commit("selectNewMonster");
  },
};

function setMonsterLevel(state, payload){
  var lvl = Math.round(getRandomVal(payload - 3, payload + 4));
  state.monsters[state.activeMonster].monsterLevel = lvl > 0 ? lvl : 1;
}

export default {
  state,
  getters,
  mutations,
  actions,
};
