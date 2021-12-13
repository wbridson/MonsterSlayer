<template>
  <section class="pa-6" style="min-width: 50em">
    <v-row>
      <v-col class="text-center">
        <v-btn large dark width="20em" color="btn primary--text" @click="attackMonster">Attack</v-btn>
      </v-col>
      <v-col class="text-center">
        <v-btn large dark width="20em" color="btn primary--text" @click="specialAttackMonster" :disabled="specialAttackDisabled">Special Attack</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <v-btn large dark width="20em" color="btn primary--text" @click="heal" :disabled="healDisabled">Heal</v-btn>
      </v-col>
      <v-col class="text-center">
        <v-btn large dark width="20em" color="btn primary--text" @click="flee">flee</v-btn>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { calculateDamage, getRandomVal, heal } from "../../functions.js";
export default {
  computed: {
    ...mapGetters([
      "playerMaxHealth",
      "playerCurrentHealth",
      "playerCurrentMana",
      "playerAtkPoints",
      "playerAtkValue",
      "playerDefPoints",
      "playerDefValue",
      "playerIntelligencePoints",
      "playerIntelligenceValue",
      "activeMonster",
      "monsterCurrentHealth",
      "monsterMaxHealth",
      "monsterDef",
      "monsterAtk",
      "monsterExpPayout",
      "turnCounter",
      "specialAttackBaseManaUse",
      "healBaseManaUse",
    ]),
    specialAttackDisabled() {
      return this.playerCurrentMana <= this.specialAttackBaseManaUse ? true : false;
    },
    healDisabled() {
      return this.playerCurrentMana <= this.healBaseManaUse ? true : false;
    },
  },
  watch: {
    playerCurrentHealth(newCurrentHealth) {
      if (newCurrentHealth <= 0) {
        this.$store.commit("winner", "monster");
        this.$store.commit("updateGold", -75);
      }
    },
    monsterCurrentHealth(newCurrentHealth) {
      if (newCurrentHealth <= 0 && this.playerCurrentHealth > 0) {
        this.$store.commit("winner", "player");
        this.$store.commit("updateGold", 100);
        this.$store.commit("awardExp", this.monsterExpPayout);
      }
    },
  },
  methods: {
    attackMonster() {
      const dmgToMonster = calculateDamage(this.playerAtkValue, this.monsterDef);
      const dmgToPlayer = this.attackPlayer();
      this.$store.commit("damageMonster", dmgToMonster);
      this.pushMessage("attack", dmgToMonster, dmgToPlayer);
    },
    specialAttackMonster() {
      const dmgToMonster = calculateDamage(this.playerIntelligenceValue, this.monsterDef);
      const dmgToPlayer = this.attackPlayer();
      this.$store.commit("damageMonster", dmgToMonster);
      this.pushMessage("special attack", dmgToMonster, dmgToPlayer);
      this.$store.commit("updateMana", Math.round(-getRandomVal(this.specialAttackBaseManaUse - 4, this.specialAttackBaseManaUse + 4)));
    },
    heal() {
      var healAmt = heal(this.playerIntelligenceValue * .7);
      const dmgToPlayer = this.attackPlayer();
      if(healAmt + this.playerCurrentHealth > this.playerMaxHealth){
          healAmt = this.playerMaxHealth - this.playerCurrentHealth;
      }
      this.$store.commit("healPlayer", healAmt);
      this.$store.commit("updateMana", Math.round(-getRandomVal(this.healBaseManaUse - 3, this.healBaseManaUse + 3)));
      this.pushMessage("heal", healAmt, dmgToPlayer);
    },
    flee() {
      this.$store.commit("winner", "flee");
      this.$store.commit("pushMessage", {
        messageID: this.turnCounter,
        actionBy: "player",
        actionType: "flee",
        actionValue: null,
      })
    },
    attackPlayer(){
      const dmgToPlayer = calculateDamage(this.monsterAtk, this.playerDefValue);
      this.$store.commit("damagePlayer", dmgToPlayer);
      return dmgToPlayer;
    },
    pushMessage(actionType, dmgToMonster, dmgToPlayer) {
      this.$store.commit("pushMessage", {
        messageID: this.turnCounter,
        actionBy: "player",
        actionType: actionType,
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
  },
};
</script>
