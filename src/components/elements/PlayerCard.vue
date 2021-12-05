<template>
  <v-card class="pt-3 px-0 pb-0" width="50em">
    <h2 class="text-center">Player</h2>
    <h3 class="text-center subtitle-2">Lvl: {{ playerLevel }}</h3>
    <div id="healthDisplay">
      <base-stat-bar targetStat="health" :currentStat="playerCurrentHealth" :maxStat="playerMaxHealth"></base-stat-bar>
    </div>
    <div id="manaDisplay" class="text-right">
      <base-stat-bar targetStat="mana" :currentStat="playerCurrentMana" :maxStat="playerMaxMana"></base-stat-bar>
    </div>
    <div id="goldDisplay">
      <h3 class="subtitle-1 text-right pr-7">{{ gold }} gold</h3>
    </div>
    <div id="expDisplay">
      <base-stat-bar targetStat="exp" :currentStat="playerExp" :maxStat="playerExpToNextLevel"></base-stat-bar>
    </div>
  </v-card>
</template>

<script>
import BaseStatBar from "../UI/BaseStatBar.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    BaseStatBar,
  },
  computed: mapGetters([
    "playerMaxHealth",
    "playerCurrentHealth",
    "playerMaxMana",
    "playerCurrentMana",
    "playerExp",
    "playerExpToNextLevel",
    "playerLevel",
    "gold",
  ]),
};
</script>
