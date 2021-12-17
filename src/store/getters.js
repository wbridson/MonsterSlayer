export const gold = (state) => {
  return state.gold >= 1 ? Math.round(state.gold) : 0;
};

export const log = (state) => {
  return state.log;
};
export const turnCounter = (state) => {
  return state.turnCounter;
};
export const winner = (state) => {
  return state.winner;
};
