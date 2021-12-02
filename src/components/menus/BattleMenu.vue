<template>
  <section class="pa-6" style="min-width: 50em">
    <v-row >
      <v-col class="text-center">
        <v-btn large dark width=20em color="deep-purple accent-4" @click="attackMonster">Attack</v-btn>
      </v-col>
      <v-col class="text-center ">
        <v-btn large dark width=20em color="deep-purple accent-4" @click="specialAttackMonster">Special Attack</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <v-btn large dark width=20em color="deep-purple accent-4" @click="heal">Heal</v-btn>
      </v-col>
      <v-col class="text-center">
        <v-btn large dark width=20em color="deep-purple accent-4" @click="surrender">Surrender</v-btn>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { calculateDamage } from "../../functions.js";
export default {
  computed: {
    ...mapGetters([
      "playerMaxHealth",
      "playerCurrentHealth",
      "playerAtk",
      "playerDef",
      "activeMonster",
      "monsterCurrentHealth",
      "monsterMaxHealth",
      "monsterDef",
      "monsterAtk",
      "turnCounter",
    ]),
  },
  watch:{
    playerCurrentHealth(newCurrentHealth){
      if(newCurrentHealth <= 0){
        this.$store.commit('winner', 'monster');
        this.$store.commit('updateGold', -75);
      }
    },
    monsterCurrentHealth(newCurrentHealth){
      if(newCurrentHealth <= 0 && this.playerCurrentHealth > 0){
        this.$store.commit('winner', 'player');
        this.$store.commit('updateGold', 100);
      }
   },
  },
  methods: {
    attackMonster() {
      const dmgToMonster = calculateDamage(this.playerAtk, this.monsterDef);
      const dmgToPlayer = calculateDamage(this.monsterAtk, this.playerDef);
      this.$store.commit("damageMonster", dmgToMonster);
      this.$store.commit("damagePlayer", dmgToPlayer);
      this.$store.commit("pushMessage", {
        messageID: this.turnCounter,
        actionBy: "player",
        actionType: "attack",
        actionValue: dmgToMonster,
      });
      this.$store.commit("pushMessage", {
        messageID: this.turnCounter,
        actionBy: "monster",
        actionType: "attack",
        actionValue: dmgToPlayer,
      });
      this.$store.commit("nextTurn");
    },
    specialAttackMonster() {},
    heal() {},
    surrender() {},
  },
  mounted() {},
};
</script>
