<template>
  <v-card class="pa-5 primary--text" width="80%" color="secondary darken-2">
    <v-row>
      <v-col>
        <v-row justify="center">
          <v-col class="text-center pl-16 ml-7" cols="11">
            <h2>Level Up!</h2>
          </v-col>
          <v-col>
            <v-btn icon color="primary" @click="$emit('closeLevelMenu')"><v-icon>mdi-window-close</v-icon></v-btn>
          </v-col>
        </v-row>
        <v-row justify="center">
          <h3 class="subtitle-2">Level: {{ playerLevel }}</h3>
        </v-row>
        <v-row justify="center" class="pt-5">
          <h3 class="subtitle-1">Attribute Points: {{ tempAttributePointsAvailable }}</h3>
        </v-row>
      </v-col>
    </v-row>
    <!-- ---------------------Health---------------------- -->
    <v-row id="Health">
      <v-col class="d-flex justify-center"> Health </v-col>
      <v-col class="d-flex justify-center pa-0">
        <v-col class="d-flex justify-end pa-0"
          ><v-btn icon @click="tempStatMod('hp', -1)" :disabled="hpDecreaseDisabled" color="primary"
            ><v-icon>mdi-chevron-left</v-icon></v-btn
          ></v-col
        >
        <v-col class="d-flex justify-center pa-0 pt-1">{{ tempHpPoints }}</v-col>
        <v-col class="pa-0"
          ><v-btn icon @click="tempStatMod('hp', 1)" :disabled="increaseDisabled" color="primary"
            ><v-icon>mdi-chevron-right</v-icon></v-btn
          ></v-col
        >
      </v-col>
      <v-col class="d-flex justify-center">{{ tempHpValue }}</v-col>
    </v-row>
    <!-- ------------------------Mana----------------------- -->
    <v-row id="Mana">
      <v-col class="d-flex justify-center"> Mana </v-col>
      <v-col class="d-flex justify-center pa-0">
        <v-col class="d-flex justify-end pa-0"
          ><v-btn icon @click="tempStatMod('mp', -1)" :disabled="manaDecreaseDisabled" color="primary"
            ><v-icon>mdi-chevron-left</v-icon></v-btn
          ></v-col
        >
        <v-col class="d-flex justify-center pa-0 pt-1">{{ tempManaPoints }}</v-col>
        <v-col class="pa-0"
          ><v-btn icon @click="tempStatMod('mp', 1)" :disabled="increaseDisabled" color="primary"
            ><v-icon>mdi-chevron-right</v-icon></v-btn
          ></v-col
        >
      </v-col>
      <v-col class="d-flex justify-center">
        {{ tempManaValue }}
      </v-col>
    </v-row>
    <!-- --------------------------Attack----------------------- -->
    <v-row id="Attack">
      <v-col class="d-flex justify-center"> Attack </v-col>
      <v-col class="d-flex justify-center pa-0">
        <v-col class="d-flex justify-end pa-0"
          ><v-btn icon @click="tempStatMod('atk', -1)" :disabled="atkDecreaseDisabled" color="primary"
            ><v-icon>mdi-chevron-left</v-icon></v-btn
          ></v-col
        >
        <v-col class="d-flex justify-center pa-0 pt-1">{{ tempAtkPoints }}</v-col>
        <v-col class="pa-0"
          ><v-btn icon @click="tempStatMod('atk', 1)" :disabled="increaseDisabled" color="primary"
            ><v-icon>mdi-chevron-right</v-icon></v-btn
          ></v-col
        >
      </v-col>
      <v-col class="d-flex justify-center">
        {{ tempAtkValue }}
      </v-col>
    </v-row>
    <!-- ---------------------------Defense----------------------- -->
    <v-row id="Defense">
      <v-col class="d-flex justify-center"> Defense </v-col>
      <v-col class="d-flex justify-center pa-0">
        <v-col class="d-flex justify-end pa-0"
          ><v-btn icon @click="tempStatMod('def', -1)" :disabled="defDecreaseDisabled" color="primary"
            ><v-icon>mdi-chevron-left</v-icon></v-btn
          ></v-col
        >
        <v-col class="d-flex justify-center pa-0 pt-1">{{ tempDefPoints }}</v-col>
        <v-col class="pa-0"
          ><v-btn icon @click="tempStatMod('def', 1)" :disabled="increaseDisabled" color="primary"
            ><v-icon>mdi-chevron-right</v-icon></v-btn
          ></v-col
        >
      </v-col>
      <v-col class="d-flex justify-center">
        {{ tempDefValue }}
      </v-col>
    </v-row>
    <!-- --------------------------Intelligence--------------------------- -->
    <v-row id="Intelligence">
      <v-col class="d-flex justify-center"> Intelligence </v-col>
      <v-col class="d-flex justify-center pa-0">
        <v-col class="d-flex justify-end pa-0"
          ><v-btn icon @click="tempStatMod('int', -1)" :disabled="intDecreaseDisabled" color="primary"
            ><v-icon>mdi-chevron-left</v-icon></v-btn
          ></v-col
        >
        <v-col class="d-flex justify-center pa-0 pt-1">{{ tempIntPoints }}</v-col>
        <v-col class="pa-0"
          ><v-btn icon @click="tempStatMod('int', 1)" :disabled="increaseDisabled" color="primary"
            ><v-icon>mdi-chevron-right</v-icon></v-btn
          ></v-col
        >
      </v-col>
      <v-col class="d-flex justify-center">
        {{ tempIntValue }}
      </v-col>
    </v-row>
    <!-- --------------------------Confirm-------------------------------- -->
    <v-row>
      <v-col class="d-flex justify-center">
        <v-btn large class="btn primary--text" @click="confirm" :disabled="confirmDisabled">Confirm</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  emits: ['closeLevelMenu'],
  data: () => ({
    tempAttributePointsAvailable: 0,
    tempHpPoints: 0,
    tempHpValue: 0,
    tempManaPoints: 0,
    tempManaValue: 0,
    tempAtkPoints: 0,
    tempAtkValue: 0,
    tempDefPoints: 0,
    tempDefValue: 0,
    tempIntPoints: 0,
    tempIntValue: 0,
    increaseDisabled: false,
    hpDecreaseDisabled: true,
    manaDecreaseDisabled: true,
    atkDecreaseDisabled: true,
    defDecreaseDisabled: true,
    intDecreaseDisabled: true,
    confirmDisabled: true,
    confirmDisableCounter: 0,
  }),
  computed: {
    ...mapGetters([
      "attributePointsAvailable",
      "playerLevel",
      "playerMaxHealth",
      "playerMaxMana",
      "playerMaxHealthPoints",
      "playerMaxManaPoints",
      "playerAtkPoints",
      "playerAtkValue",
      "playerDefPoints",
      "playerDefValue",
      "playerIntelligencePoints",
      "playerIntelligenceValue",
      "playerStatVariables",
    ]),
  },
  watch: {
    tempAttributePointsAvailable(newVal) {
      //button disabling
      newVal > 0 ? (this.increaseDisabled = false) : (this.increaseDisabled = true);
      this.tempHpPoints > this.playerMaxHealthPoints && newVal >= 0 ? (this.hpDecreaseDisabled = false) : (this.hpDecreaseDisabled = true);
      this.tempManaPoints > this.playerMaxManaPoints && newVal >= 0
        ? (this.manaDecreaseDisabled = false)
        : (this.manaDecreaseDisabled = true);
      this.tempAtkPoints > this.playerAtkPoints && newVal >= 0 ? (this.atkDecreaseDisabled = false) : (this.atkDecreaseDisabled = true);
      this.tempDefPoints > this.playerDefPoints && newVal >= 0 ? (this.defDecreaseDisabled = false) : (this.defDecreaseDisabled = true);
      this.tempIntPoints > this.playerIntelligencePoints && newVal >= 0
        ? (this.intDecreaseDisabled = false)
        : (this.intDecreaseDisabled = true);
      newVal <= this.attributePointsAvailable ? (this.confirmDisabled = false) : (this.confirmDisabled = true);
    },
  },
  methods: {
    tempStatMod(stat, points) {
      switch (stat) {
        case "hp": {
          this.tempHpPoints += points;
          this.tempHpValue = Math.round(this.playerStatVariables.baseHp + this.tempHpPoints * this.playerStatVariables.hpModifier);
          break;
        }
        case "mp": {
          this.tempManaPoints += points;
          this.tempManaValue = Math.round(this.playerStatVariables.baseMp + this.tempManaPoints * this.playerStatVariables.mpModifier);
          break;
        }
        case "atk": {
          this.tempAtkPoints += points;
          this.tempAtkValue = Math.round(this.playerStatVariables.baseAtk + this.tempAtkPoints * this.playerStatVariables.atkModifier);
          break;
        }
        case "def": {
          this.tempDefPoints += points;
          this.tempDefValue = Math.round(this.playerStatVariables.baseDef + this.tempDefPoints * this.playerStatVariables.defModifier);
          break;
        }
        case "int": {
          this.tempIntPoints += points;
          this.tempIntValue = Math.round(this.playerStatVariables.baseInt + this.tempIntPoints * this.playerStatVariables.intModifier);
          break;
        }
      }
      points > 0 ? this.tempAttributePointsAvailable-- : this.tempAttributePointsAvailable++;
    },
    confirm() {
      this.$store.commit("playerMaxHealthPoints", this.tempHpPoints);
      this.$store.commit("playerMaxManaPoints", this.tempManaPoints);
      this.$store.commit("playerAtkPoints", this.tempAtkPoints);
      this.$store.commit("playerDefPoints", this.tempDefPoints);
      this.$store.commit("playerIntelligencePoints", this.tempIntPoints);
      this.$store.commit("attributePointsAvailable", this.tempAttributePointsAvailable);
      this.hpDecreaseDisabled = true;
      this.manaDecreaseDisabled = true;
      this.atkDecreaseDisabled = true;
      this.defDecreaseDisabled = true;
      this.intDecreaseDisabled = true;
      this.tempAttributePointsAvailable == 0 ? this.confirmDisabled = true : false;
      this.setTempValues();

    },
    setTempValues() {
      this.tempAttributePointsAvailable = this.attributePointsAvailable;
      this.tempHpPoints = this.playerMaxHealthPoints;
      this.tempHpValue = this.playerMaxHealth;
      this.tempManaPoints = this.playerMaxManaPoints;
      this.tempManaValue = this.playerMaxMana;
      this.tempAtkPoints = this.playerAtkPoints;
      this.tempAtkValue = this.playerAtkValue;
      this.tempDefPoints = this.playerDefPoints;
      this.tmepDefValue = this.playerDefValue;
      this.tempIntPoints = this.playerIntelligencePoints;
      this.tempIntValue = this.playerIntelligenceValue;
      this.confirmDisableCounter = this.attributePointsAvailable;
    },
  },
  mounted() {
    this.setTempValues();
  },
};
</script>
