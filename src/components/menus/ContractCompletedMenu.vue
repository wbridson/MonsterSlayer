<template>
  <section>
    <span v-if="winner === 'monster'" class="text-center primary--text"
      ><h3>You were defeated!</h3>
      <h4>You awaken at a nearby tavern.</h4></span
    >
    <span v-else-if="winner === 'player'" class="text-center primary--text"
      ><h3>You won!</h3>
      <h4>{{ gold }} gold earned.</h4></span
    >
    <span v-else-if="winner === 'flee'" class="text-center primary--text"
      ><h3>You got away!</h3>
      <h4>Take some time to prepare for your next hunt.</h4></span
    >
    <div class="d-flex text-wrap">
      <button
        :class="potionButton"
        :disabled="playerCurrentHealth >= playerMaxHealth || gold < potionPrice ? true : false"
        style="max-width: 10em; max-height: 5em"
        @mouseenter="hoverSwitch('potion')"
        @mouseleave="hoverSwitch('potion')"
        @click="buyHealthPotion"
      >
        Health Potion (100g)
      </button>
      <button
        :class="contractButton"
        :disabled="playerCurrentHealth > 0 ? false : true"
        style="max-width: 10em; max-height: 5em"
        @mouseenter="hoverSwitch('contract')"
        @mouseleave="hoverSwitch('contract')"
        @click="acceptNextContract"
      >
        Accept Next Monster Contract
      </button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { heal } from "../../functions.js";
export default {
  data: () => ({
    isHoveringPotionButton: false,
    isHoveringContractButton: false,
    potionPrice: 100,
  }),
  computed: {
    ...mapGetters(["winner", "gold", "playerCurrentHealth", "playerMaxHealth", "activeMonster"]),
    contractButton() {
      if (this.isHoveringContractButton && this.playerCurrentHealth > 0) {
        return "btn primary--text d-flex flex-wrap align-center pa-3 ma-4 elevation-14";
      } else if (!this.isHoveringContractButton && this.playerCurrentHealth > 0) {
        return "btn primary--text d-flex flex-wrap align-center pa-3 ma-4";
      } else {
        return "btn lighten-4 primary--text flex-wrap align-center pa-3 ma-4";
      }
    },
    potionButton() {
      if (this.isHoveringPotionButton && this.gold >= 100 && this.playerCurrentHealth < this.playerMaxHealth) {
        return "btn primary--text d-flex flex-wrap align-center pa-3 ma-4 elevation-14";
      } else if (!this.isHoveringPotionButton && this.gold >= 100 && this.playerCurrentHealth < this.playerMaxHealth) {
        return "btn primary--text d-flex flex-wrap align-center pa-3 ma-4";
      } else {
        return "btn primary--text lighten-4 flex-wrap align-center pa-3 ma-4";
      }
    },
  },
  methods: {
    buyHealthPotion() {
      if (this.gold >= this.potionPrice) {
        var healAmt = heal(this.playerMaxHealth);
        if(healAmt + this.playerCurrentHealth > this.playerMaxHealth){
          healAmt = this.playerMaxHealth - this.playerCurrentHealth;
        }
        this.$store.commit("healPlayer", healAmt);
        this.$store.commit("updateGold", -this.potionPrice);
      }
    },
    acceptNextContract() {
      this.$store.commit("selectNewMonster");
      this.$store.commit("resetMonsterHealth");
      this.$store.commit("winner", "");
      console.log(this.activeMonster);
    },

    hoverSwitch(button) {
      if (button == "potion") {
        this.isHoveringPotionButton = !this.isHoveringPotionButton;
      } else if (button == "contract") {
        this.isHoveringContractButton = !this.isHoveringContractButton;
      }
    },
  },
};
</script>
