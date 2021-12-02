<template>
  <v-card class="pa-3" width="50em">
    <h2 class="text-center">{{ monsterName }}</h2>
    <base-health-bar target="monster" :health="monsterCurrentHealth" :maxHealth="monsterMaxHealth"></base-health-bar>
  </v-card>
</template>

<script>
import BaseHealthBar from "../UI/BaseHealthBar.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    BaseHealthBar,
  },
  computed: mapGetters(["activeMonster", "monsterName", "monsterLevel", "monsterMaxHealth", "monsterCurrentHealth"]),
  methods: {},
};
</script>
