<template>
  <section style="min-height: 100%">
    <section class="d-flex justify-center pb-5" v-if="winner != 'flee'">
      <h2 class="primary--text">You've encountered a Monster</h2>
    </section>
    <section id="monsterInfo" class="d-flex justify-center pb-10" v-if="winner != 'flee'">
      <monster-card></monster-card>
    </section>
    <section id="playerInfo" class="d-flex justify-center pb-7">
      <player-card></player-card>
    </section>
    <section id="contractCompletedMenu" class="d-flex justify-center">
      <contract-completed-menu v-if="winner && !levelUp" :gold="100"></contract-completed-menu>
    </section>
    <section id="levelUpMenu" class="d-flex justify-center">
      <level-up-menu v-if="levelUp" @closeLevelMenu="levelUp = false"></level-up-menu>
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
import LevelUpMenu from "../components/menus/LevelUpMenu.vue";
import { mapGetters } from "vuex";
export default {
  name: "Home",

  components: {
    MonsterCard,
    PlayerCard,
    ContractCompletedMenu,
    BattleMenu,
    BattleLogCard,
    LevelUpMenu,
  },
  data: () => ({
    levelUp: false,
  }),
  computed: {
    ...mapGetters([
      "turnCounter",
      "playerCurrentHealth",
      "playerMaxHealth",
      "playerCurrentMana",
      "playerMaxMana",
      "winner",
      "playerLevel",
      "playerExp",
      "playerExpToNextLevel",
      "monsterLevel",
      "turnCounter",
      "gold",
      "playerDefPoints",
    ]),
  },
  watch: {
    playerExp(newVal) {
      console.log(newVal + " >= " + this.playerExpToNextLevel);
      if (newVal >= this.playerExpToNextLevel) {
        this.$store.commit("levelUp");
        this.$store.commit('playerExpToNextLevel', this.playerLevel);
        this.levelUp = true;
      }
    },
  },
  methods: {
  },
  mounted() {
    this.$store.commit("resetHealth");
    this.$store.commit("resetMana");
    this.$store.commit("selectNewMonster", this.playerLevel);
    this.$store.commit("pushMessage", {
      messageID: this.turnCounter,
      actionBy: "player",
      actionType: "new monster",
      actionValue: this.monsterLevel,
    });
    console.log(this.playerDefPoints)
  },
};
</script>
