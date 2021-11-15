import Vue from "vue";
import Vuex from "vuex";
import player from "./modules/player.js";
import monsters from "./modules/monsters.js";
import * as mutations from "./mutations.js";
import * as getters from "./getters.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    gold: 0
  },
  getters,
  mutations,
  modules: {
    player,
    monsters
  }
});
// if ...mapGetters does not work vvv
// npm install --save-dev babel-preset-stage-2
//go to .babelrc and it should say:
/*{
    "presets": [
        ["es2015", {"modules": false }],
        ["stage-2"]
    ]
}
may only have to add ["stage-2"] line
*/
