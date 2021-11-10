<template>
  <section>
    <base-button @click="$emit('attack')">Attack</base-button>
    <base-button @click="$emit('specialAttack')">Special Attack</base-button>
    <base-button @click="$emit('heal')">Heal</base-button>
    <base-button @click="$emit('surrender')">Surrender</base-button>
  </section>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
export default {
  components: {
    BaseButton,
  },
  emits: ["attack", "specialAttack", "heal", "surrender"],
};
</script>
