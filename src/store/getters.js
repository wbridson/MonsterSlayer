export const gold = (state) => {
  return state.gold >= 0 ? state.gold : 0;
};

export const log = (state) => {
  return state.log;
};
export const turnCounter = (state) => {
  return state.turnCoutner;
};
export const winner = (state) => {
  return state.winner;
};
