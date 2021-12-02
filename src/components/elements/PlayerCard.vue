<template>
  <v-card class="pa-3" width="50em">
    <h2 class="text-center">Player</h2>
    <base-health-bar target="player" :health="playerCurrentHealth" :maxHealth="playerMaxHealth"></base-health-bar>
    <div id="goldDisplay">
      <h3 class="subtitle-1 text-right">{{gold}} gold</h3>
    </div>
  </v-card>
</template>

<script>
import BaseHealthBar from "../UI/BaseHealthBar.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    BaseHealthBar,
  },
  computed: mapGetters(["playerMaxHealth", "playerCurrentHealth", "gold"]),
};
</script>
