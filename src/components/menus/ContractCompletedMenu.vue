<template>
  <section>
    <span v-if="winner === 'monster'" class="text-center primary--text"
      ><h3>You were defeated!</h3>
      <h4>You awaken at a nearby tavern.</h4></span
    >
    <span v-else-if="winner === 'player'" class="text-center primary--text"
      ><h3>You won!</h3></span>
    <span v-else-if="winner === 'flee'" class="text-center primary--text"
      ><h3>You got away!</h3>
      <h4>Take some time to prepare for your next hunt.</h4></span
    >
    <div class="d-flex text-wrap">
      <button
        :class="potionButton"
        :disabled="potionButtonDisabled"
        style="min-width: 10em; max-height: 5em"
        @mouseenter="hoverSwitch('potion')"
        @mouseleave="hoverSwitch('potion')"
        @click="buyHealthPotion"
      >
        Rest at the Inn <br> ({{ potionPrice }})
      </button>
      <button
        :class="contractButton"
        :disabled="contractButtonDisabled"
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
    potionPrice: 125,
    diableTimer: 1500,
    reactionDisable: false
  }),
  computed: {
    ...mapGetters(["winner", "gold", "playerCurrentHealth", "playerMaxHealth", "playerCurrentMana", "playerMaxMana", "activeMonster", "monsterLevel", "playerLevel"]),
    contractButton() {
      if (this.isHoveringContractButton && !this.contractButtonDisabled) {
        return "btn primary--text d-flex flex-wrap align-center pa-3 ma-4 elevation-14";
      } else if (!this.isHoveringContractButton && !this.contractButtonDisabled) {
        return "btn primary--text d-flex flex-wrap align-center pa-3 ma-4";
      } else {
        return "btn lighten-4 primary--text flex-wrap align-center pa-3 ma-4";
      }
    },
    potionButton() {
      if (this.isHoveringPotionButton && !this.potionButtonDisabled) {
        return "btn primary--text d-flex flex-wrap align-center justify-center pa-3 ma-4 elevation-14";
      } else if (!this.isHoveringPotionButton && !this.potionButtonDisabled) {
        return "btn primary--text d-flex flex-wrap align-center justify-center pa-3 ma-4";
      } else {
        return "btn primary--text lighten-4 flex-wrap align-center justify-center pa-3 ma-4";
      }
    },
    contractButtonDisabled(){
      return this.playerCurrentHealth < 0 || this.reactionDisable ? true : false
    },
    potionButtonDisabled(){
      return this.playerCurrentHealth >= this.playerMaxHealth && this.playerCurrentMana >= this.playerMaxMana || this.gold < this.potionPrice || this.reactionDisable ? true : false
    }
  },
  methods: {
    buyHealthPotion() {
      if (this.gold >= this.potionPrice) {
        var healAmt = heal(this.playerMaxHealth);
        if (healAmt + this.playerCurrentHealth > this.playerMaxHealth) {
          healAmt = this.playerMaxHealth - this.playerCurrentHealth;
        }
        var manaRestoreAmt = heal(this.playerMaxMana);
        if(manaRestoreAmt + this.playerCurrentMana > this.playerMaxMana){
          manaRestoreAmt = this.playerMaxMana - this.playerCurrentMana;
        }
        this.$store.commit("healPlayer", healAmt);
        this.$store.commit("updateMana", manaRestoreAmt);
        this.$store.commit("updateGold", -this.potionPrice);
      }
    },
    acceptNextContract() {
      this.$store.commit("selectNewMonster", this.playerLevel);
      this.$store.commit("winner", "");
      this.$store.commit("pushMessage", {
        messageID: this.turnCounter,
        actionBy: "player",
        actionType: "new monster",
        actionValue: this.monsterLevel,
      });
    },

    hoverSwitch(button) {
      if (button == "potion") {
        this.isHoveringPotionButton = !this.isHoveringPotionButton;
      } else if (button == "contract") {
        this.isHoveringContractButton = !this.isHoveringContractButton;
      }
    },
  },
  mounted(){
    this.reactionDisable = true;
    setTimeout(() => {
      this.reactionDisable = false;
    }, this.diableTimer)
  }
};
</script>
