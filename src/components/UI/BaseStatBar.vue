<template>
  <section :class="targetStat == 'exp' ? 'container pb-0 px-0 mx-0' : 'container' " :style="targetStat == 'exp' ? 'min-width: 100%;' : '' ">
    
    <div :class="barBackground">
      <div
        :class="barForeground"
        :style="barStyles"
      ></div>
    </div>
    <h3 v-if="targetStat != 'exp' " class="text-right subtitle-2">{{ currentStat }} HP</h3>
  </section>
</template>

<script>
export default {
  props: ["targetStat", "currentStat", "maxStat"],
  data: () => ({
    barBackground: "",
    barForeground: "",
  }),
  computed: {
    barStyles() {
      if (this.currentStat < 0) {
        return { width: "0%" };
      } else {
        return {
          width: (this.currentStat / this.maxStat) * 100 + "%",
        };
      }
    },
  },
  mounted(){
    if(this.targetStat == 'health'){
        this.barBackground = "health-stat-bar";
        this.barForeground = "health-bar";
      } else if(this.targetStat == 'mana'){
        this.barBackground = "mana-stat-bar";
        this.barForeground = "mana-bar";
      } else { //if this.targetStat == 'exp'
        this.barBackground = "exp-stat-bar";
        this.barForeground = "exp-bar";
      }
      console.log(this.barBackground, this.barForeground, this.maxStat)
  }
};
</script>

<style scoped>
section {
  width: 90%;
  max-width: 40rem;
  /* margin: auto; */
}

.health-stat-bar {
  width: 100%;
  height: 40px;
  border: 1px solid #575757;
  margin: .1rem 0;
  background: #fde5e5;
}
.mana-stat-bar {
  width: 20%;
  height: 10px;
  border: 1px solid #575757;
  background: #fde5e5;
  position: relative;
  left: 80%;
}
.exp-stat-bar{
  width: 100%;
  height: 5px;
  margin: .1rem 0, 0, 0,;
}
.health-bar {
  background-color: #00a876;
  width: 100%;
  height: 100%;
}
.mana-bar{
  background-color: #f7dc54;
  width: 20%;
  height: 100%;
}
.exp-bar {
  background-color: #3bf5ff;
  width: 100%;
  height: 100%;
}
#monster h2,
#player h2 {
  margin: 0.25rem;
}
</style>
