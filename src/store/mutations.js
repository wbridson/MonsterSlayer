export const updateGold = (state, payload) => {
    state.gold += payload;
  };

export const pushMessage = (state, payload) => {
  state.log.unshift({
    messageID: payload.messageID,
    actionBy: payload.actionBy,
    actionType: payload.actionType,
    actionValue: payload.actionValue
  });
};

export const nextTurn = (state) => {
  state.turnCounter++;
}