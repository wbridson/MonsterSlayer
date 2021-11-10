<template>
  <section :id="target" class="container">
    <h3>{{ health }}HP</h3>
    <div class="healthbar">
      <div
        class="healthbar__value"
        :style="barStyles"
      ></div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["target", "health", "maxHealth"],
  computed: {
    barStyles() {
      if (this.health < 0) {
        return { width: "0%" };
      } else {
        return {
          width: (this.health / this.maxHealth) * 100 + "%",
        };
      }
    },
  },
};
</script>

<style scoped>
section {
  width: 90%;
  max-width: 40rem;
  margin: auto;
}

.healthbar {
  width: 100%;
  height: 40px;
  border: 1px solid #575757;
  margin: 1rem 0;
  background: #fde5e5;
}

.healthbar__value {
  background-color: #00a876;
  width: 100%;
  height: 100%;
}

#monster h2,
#player h2 {
  margin: 0.25rem;
}
</style>
