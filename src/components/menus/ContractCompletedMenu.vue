<template>
  <section>
    <span v-if="winner === 'monster'"
      ><h3>were defeated!</h3>
      <h4>You awaken at a nearby tavern.</h4></span
    >
    <span v-else-if="winner === 'player'"
      ><h3>You won!</h3>
      <h4>{{ gold }} gold earned.</h4></span
    >
    <base-button @click="$emit('buyHealthPotion')">Health Potion (100g)</base-button>
    <base-button @click="$emit('nextContract')">Accept Next Monster Contract</base-button>
  </section>
</template>

<script>
export default {
  emits: ["buyHealthPotion, nextContract"],
  props: {
    winner: {
      type: String,
    },
    gold: {
      type: Number,
    },
  },
};
</script>
