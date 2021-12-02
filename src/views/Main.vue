<template>
  <section>
    <section class="d-flex justify-center pb-5">
        <h2>You've encountered a Monster</h2>
    </section>
    <section id="monsterInfo" class="d-flex justify-center pb-10">
      <monster-card></monster-card>
    </section>
    <section id="playerInfo" class="d-flex justify-center pb-7">
      <player-card></player-card>
    </section>
    <section id="contractCompletedMenu" class="d-flex justify-center">
      <contract-completed-menu v-if="winner" :winner="winner" :gold="100"></contract-completed-menu>
    </section>
    <section id="battleMenu" class="d-flex justify-center pb-5">
      <battle-menu v-if="!winner"></battle-menu>
    </section>
    <section id="battleLog" class="d-flex justify-center pb-16">
      <battle-log-card></battle-log-card>
    </section>
  </section>
</template>

<script>
import MonsterCard from "../components/elements/MonsterCard.vue";
import PlayerCard from "../components/elements/PlayerCard.vue";
import ContractCompletedMenu from "../components/menus/ContractCompletedMenu.vue";
import BattleMenu from "../components/menus/BattleMenu.vue";
import BattleLogCard from "../components/elements/BattleLogCard.vue";
import { mapGetters } from "vuex";
export default {
  name: "Home",

  components: {
    MonsterCard,
    PlayerCard,
    ContractCompletedMenu,
    BattleMenu,
    BattleLogCard,
  },
  computed: {
    ...mapGetters(["turnCounter"]),
    winner() {
      return "";
    },
  },
  methods: {
    surrender() {},
  },
  mounted() {
    this.$store.commit("selectNewMonster");
    this.$store.commit("pushMessage", {
      messageID: this.turnCounter,
      actionBy: null,
      actionType: null,
      actionValue: null,
    });
    console.log(this.$store.state.log);
  },
};
</script>
