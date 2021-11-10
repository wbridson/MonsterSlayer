<template>
  <v-card>
    <h2>Player</h2>
    <base-health-bar target="player" :health="playerCurrentHealth" :maxHealth="playerMaxHealth"></base-health-bar>
  </v-card>
</template>

<script>
import BaseHealthBar from "../UI/BaseHealthBar.vue";
export default {
  components: {
    BaseHealthBar,
  },
  props: ["playerCurrentHealth", "playerMaxHealth"],
};
</script>
