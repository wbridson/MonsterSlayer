import { getRandomVal } from "../../functions";
const state = {
  activeMonster: 0,
  hpModifier: 3.5,
  atkModifier: 5.2,
  defModifier: 2.3,
  goldModifier: 5.8,
  expModifier: 9.9,
  monsters: [
    {
      monsterID: 0,
      monsterName: "Troll",
      monsterLevel: 1,
      monsterMaxHealth: 0,
      monsterAtk: 0,
      monsterDef: 0,
      monsterGoldPayout: 0,
      monsterExpPayout: 0,
      monsterBaseExpPayout: 130,
      monsterBaseGoldPayout: 75,
      monsterBaseMaxHealth: 200,
      monsterCurrentHealth: 200,
      monsterBaseAtk: 10,
      monsterBaseDef: 3,
    },
    {
      monsterID: 1,
      monsterName: "Vampire",
      monsterLevel: 1,
      monsterMaxHealth: 0,
      monsterAtk: 0,
      monsterDef: 0,
      monsterGoldPayout: 0,
      monsterExpPayout: 0,
      monsterBaseExpPayout: 115,
      monsterBaseGoldPayout: 48,
      monsterBaseMaxHealth: 90,
      monsterCurrentHealth: 90,
      monsterBaseAtk: 20,
      monsterBaseDef: 1,
    },
    {
      monsterID: 2,
      monsterName: "Werewolf",
      monsterLevel: 1,
      monsterMaxHealth: 0,
      monsterAtk: 0,
      monsterDef: 0,
      monsterGoldPayout: 0,
      monsterExpPayout: 0,
      monsterBaseExpPayout: 122,
      monsterBaseGoldPayout: 60,
      monsterBaseMaxHealth: 120,
      monsterCurrentHealth: 120,
      monsterBaseAtk: 20,
      monsterBaseDef: 2,
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
    return state.monsters[state.activeMonster].monsterExpPayout;
  },
  monsterMaxHealth: (state) => {
    return state.monsters[state.activeMonster].monsterMaxHealth;
  },
  monsterCurrentHealth: (state) => {
    var hp = state.monsters[state.activeMonster].monsterCurrentHealth;
    if(hp < 0){
      return 0;
    }else if(hp > state.monsters[state.activeMonster].monsterMaxHealth){
      return state.monsters[state.activeMonster].monsterMaxHealth;
    } else {
      return state.monsters[state.activeMonster].monsterCurrentHealth;
    }
  },
  monsterAtk: (state) => {
    return state.monsters[state.activeMonster].monsterAtk;
  },
  monsterDef: (state) => {
    return state.monsters[state.activeMonster].monsterDef;
  },
  monsterGoldPayout: (state) => {
    return state.monsters[state.activeMonster].monsterGoldPayout;
  }
};
const mutations = {
  selectNewMonster: (state, payload) => {
    state.activeMonster = Math.floor(Math.random() * state.monsters.length);
    setMonsterLevel(state, payload);
    setMonsterStats(state);
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
function setMonsterStats(state){
  state.monsters[state.activeMonster].monsterMaxHealth = Math.round(state.monsters[state.activeMonster].monsterBaseMaxHealth + (state.hpModifier * state.monsters[state.activeMonster].monsterLevel) + getRandomVal(3, 14));
  state.monsters[state.activeMonster].monsterAtk = state.monsters[state.activeMonster].monsterBaseAtk + (state.atkModifier * state.monsters[state.activeMonster].monsterLevel);
  state.monsters[state.activeMonster].monsterDef = state.monsters[state.activeMonster].monsterBaseDef + (state.defModifier * state.monsters[state.activeMonster].monsterLevel);
  state.monsters[state.activeMonster].monsterExpPayout = Math.round(state.monsters[state.activeMonster].monsterBaseExpPayout + (state.expModifier * state.monsters[state.activeMonster].monsterLevel));
  state.monsters[state.activeMonster].monsterGoldPayout = Math.round(state.monsters[state.activeMonster].monsterBaseGoldPayout + (state.goldModifier * state.monsters[state.activeMonster].monsterLevel));
  state.monsters[state.activeMonster].monsterCurrentHealth = Math.round(state.monsters[state.activeMonster].monsterMaxHealth);
}

export default {
  state,
  getters,
  mutations,
  actions,
};
