<template>
  <v-card id="log" width="50em" class="pa-5 secondary darken-2">
    <h2 class="primary--text">Battle Log</h2>
    <ul class="overflow-y-auto" style="max-height: 15em">
      <li v-for="messages in log" :key="messages.messageID">
        <v-divider class="pb-3"></v-divider>
        <span
          :class="{
            'log--player': messages.actionBy === 'player',
            'log--monster': messages.actionBy === 'monster',
          }"
        >
          {{ messages.actionBy === "player" ? "Player" : "Monster" }}
        </span>
        <span v-if="messages.actionType === 'heal'" class="primary--text">
          heals himself for
          <span class="log--heal">{{ messages.actionValue }}</span>
        </span>
        <span v-else-if="messages.actionType === 'attack'" class="primary--text">
          attacks and deals
          <span class="log--damage">{{ messages.actionValue }}</span>
        </span>
        <span v-else-if="messages.actionType === 'special attack'" class="primary--text">
          used a special attack for
          <span class="log--damage">{{ messages.actionValue }}</span>
        </span>
        <span v-else-if="messages.actionType === 'flee'" class="primary--text">
          escapes and finds refuge in a nearby village. 
        </span>
        <span v-else-if="messages.actionType === 'new monster'" class="primary--text">
          hunts down a new monster. Monster Level: {{ messages.actionValue }}
        </span>
        <span v-else-if="messages.actionType === 'receive gold'" class="primary--text">
          is awarded {{ messages.actionValue }} gold for completing the quest.
        </span>
        <span v-else-if="messages.actionType === 'receive exp'" class="primary--text">
          is awarded {{ messages.actionValue }} experience points for completing the quest.
        </span>
        <span v-else-if="messages.actionType === 'lose gold'" class="primary--text">
          pays the owner <span class="log--damage">{{ messages.actionValue }}</span> gold for giving them a place to recover.
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
