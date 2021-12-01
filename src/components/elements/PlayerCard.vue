<template>
  <v-card>
    <h2>Player</h2>
    <base-health-bar target="player" :health="playerCurrentHealth" :maxHealth="playerMaxHealth"></base-health-bar>
  </v-card>
</template>

<script>
import BaseHealthBar from "../UI/BaseHealthBar.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    BaseHealthBar,
  },
  computed: mapGetters(["playerMaxHealth", "playerCurrentHealth"]),
};
</script>
