<template>
  <section>
    <section>
      <v-card>
        <h2>You've encountered a Monster</h2>
      </v-card>
    </section>
    <section id="monsterInfo">
      <monster-card id="id" name="monster" :health="100" :maxHealth="100" :baseAtk="10" :baseDef="10"></monster-card>
    </section>
    <section id="playerInfo">
      <player-card :playerCurrentHealth="100" :playerMaxHealth="100"></player-card>
    </section>
    <section id="contractCompletedMenu">
      <contract-completed-menu v-if="winner" :winner="winner" :gold="100"></contract-completed-menu>
      <battle-menu v-else @attack="10" @specialAttack="13" @heal="7" @surrender="surrender"></battle-menu>
      <battle-log-card></battle-log-card>
    </section>
  </section>
</template>

<script>
import { ref } from "vue";
import MonsterCard from "../components/elements/MonsterCard.vue";
import PlayerCard from "../components/elements/PlayerCard.vue";
import ContractCompletedMenu from "../components/menus/ContractCompletedMenu.vue";
import BattleMenu from "../components/menus/BattleMenu.vue";
import BattleLogCard from "../components/elements/BattleLogCard.vue";
export default {
  name: "Home",

  components: {
    MonsterCard,
    PlayerCard,
    ContractCompletedMenu,
    BattleMenu,
    BattleLogCard,
  },
  setUp() {
    const winner = ref('');
    function surrender() {
      winner.value = "monster";
      // addLogMessage("player", "surrender", null);
    }

    return { winner, surrender };
  },
};
</script>
