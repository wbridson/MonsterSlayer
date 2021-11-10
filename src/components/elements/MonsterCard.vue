<template>
  <v-card>
    <h2>{{ name }}</h2>
    <base-health-bar target="monster" :health="health" :maxHealth="maxHealth"></base-health-bar>
  </v-card>
</template>

<script>
import BaseHealthBar from "../UI/BaseHealthBar.vue";
export default {
  components: {
    BaseHealthBar,
  },
  props: ["id", "name", "health", "maxHealth", "baseAtk", "baseDef"],
  inject: ["getRandomValue"],
  data() {
    return {
      activeMonster: 0,
    };
  },
  methods: {},
};
</script>
