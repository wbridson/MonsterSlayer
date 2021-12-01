<template>
  <v-card id="log">
    <h2>Battle Log</h2>
    <ul>
      <li v-for="messages in log" :key="messages.messageID">
        <span
          :class="{
            'log--player': messages.actionBy === 'player',
            'log--monster': messages.actionBy === 'monster',
          }"
        >
          {{ messages.actionBy === "player" ? "Player" : "Monster" }}
        </span>
        <span v-if="messages.actionType === 'heal'">
          heals himself for
          <span class="log--heal">{{ messages.actionValue }}</span>
        </span>
        <span v-else-if="messages.actionType === 'attack'">
          attacks and deals
          <span class="log--damage">{{ messages.actionValue }}</span>
        </span>
        <span v-else-if="messages.actionType === 'special attack'">
          used a special attack for
          <span class="log--damage">{{ messages.actionValue }}</span>
        </span>
        <span v-else-if="messages.actionType === 'surrender'">
          ran for their life!
        </span>
        <span v-else>
          You hunt down a new monster. Monster Level: {{ messages.actionValue }}
        </span>
      </li>
    </ul>
  </v-card>
</template>

<script>
export default {
    computed: {
      log(){
        return this.$store.getters.log;
      }
    }
};
</script>

<style scoped>
#log ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

#log li {
  margin: 0.5rem 0;
}

.log--player {
  color: #7700ff;
}

.log--monster {
  color: #da8d00;
}

.log--damage {
  color: red;
}

.log--heal {
  color: green;
}
</style>
