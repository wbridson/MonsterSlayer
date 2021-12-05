<template>
  <v-card class="pa-3" width="50em">
    <h2 class="text-center">{{ monsterName }}</h2>
    <h3 class="text-center subtitle-2">Lvl: {{ monsterLevel }}</h3>
    <base-stat-bar targetStat="health" :currentStat="monsterCurrentHealth" :maxStat="monsterMaxHealth"></base-stat-bar>
  </v-card>
</template>

<script>
import BaseStatBar from "../UI/BaseStatBar.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    BaseStatBar,
  },
  computed: mapGetters(["activeMonster", "monsterName", "monsterLevel", "monsterMaxHealth", "monsterCurrentHealth"]),
  methods: {},
};
</script>
