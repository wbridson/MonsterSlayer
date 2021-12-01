<template>
  <section>
    <v-btn large color="deep-purple accent-4" @click="attackMonster">Attack</v-btn>
    <base-button @click="specialAttackMonster">Special Attack</base-button>
    <base-button @click="heal">Heal</base-button>
    <base-button @click="surrender">Surrender</base-button>
  </section>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
import { mapGetters } from "vuex";
import { calculateDamage } from "../../functions.js";
export default {
  components: {
    BaseButton,
  },
  computed: {
    ...mapGetters([
      'playerMaxHealth',
      'playerCurrentHealth',
      'playerAtk',
      'playerDef',
      'activeMonster',
      'monsterCurrentHealth',
      'monsterMaxHealth',
      'monsterDef',
      'monsterAtk',
      'turnCounter',
    ])
  },
  methods:{
    attackMonster() {
      const dmgToMonster = calculateDamage(this.playerAtk, this.monsterDef);
      const dmgToPlayer = calculateDamage(this.monsterAtk, this.playerDef);
      this.$store.commit('damageMonster', dmgToMonster);
      this.$store.commit('damagePlayer', dmgToPlayer);
      this.$store.commit('pushMessage', {
        messageID: this.turnCounter,
        actionBy: "player",
        actionType: "attack",
        actionValue: dmgToMonster,
      });
      this.$store.commit('pushMessage', {
        messageID: this.turnCounter,
        actionBy: "monster",
        actionType: "attack",
        actionValue: dmgToPlayer,
      })
      this.$store.commit('nextTurn');
    },
    specialAttackMonster(){},
    heal(){},
    surrender(){},
  },
  mounted(){
    
  }
};
</script>
