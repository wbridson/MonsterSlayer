<template>
  <v-card class="pa-5" width="80%">
    <v-row>
      <v-col>
        <v-row justify="center">
          <h2>Level Up!</h2>
        </v-row>
        <v-row justify="center">
          <h3 class="subtitle-2">Level: {{ playerLevel }}</h3>
        </v-row>
        <v-row justify="center" class="pt-5">
            <h3 class="subtitle-1">Attribute Points: {{ attributePointsAvailable }}</h3>
        </v-row>
      </v-col>
    </v-row>
    <v-row id="Health">
        <v-col class="d-flex justify-center">
            Health
        </v-col>
        <v-col class="d-flex justify-center">
            {{ playerMaxHealthPoints }}
        </v-col>
        <v-col class="d-flex justify-center">
            {{ playerMaxHealth }}
        </v-col>
    </v-row>
    <v-row id="Mana">
        <v-col class="d-flex justify-center">
            Mana
        </v-col>
        <v-col class="d-flex justify-center">
            {{ playerMaxManaPoints }}
        </v-col>
        <v-col class="d-flex justify-center">
            {{ playerMaxMana }}
        </v-col>
    </v-row>
    <v-row id="Attack">
        <v-col class="d-flex justify-center">
            Attack
        </v-col>
        <v-col class="d-flex justify-center">
            {{ playerAtkPoints }}
        </v-col>
        <v-col class="d-flex justify-center">
            {{ playerAtkValue }}
        </v-col>
    </v-row>
    <v-row id="Defence">
        <v-col class="d-flex justify-center">
            Defence
        </v-col>
        <v-col class="d-flex justify-center">
            {{ playerDefPoints }}
        </v-col>
        <v-col class="d-flex justify-center">
            {{ playerDefValue }}
        </v-col>
    </v-row>
    <v-row id="Intelligence">
        <v-col class="d-flex justify-center">
            Intelligence
        </v-col>
        <v-col class="d-flex justify-center">
            {{ playerIntelligencePoints }}
        </v-col>
        <v-col class="d-flex justify-center">
            {{ playerIntelligenceValue }}
        </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    tempHPPoints: 0,
    tempAtkPoints: 0,
    tempDefPoints: 0,
    tempManaPoints: 0,
    tempIntelligence: 0,
  }),
  computed: {
    ...mapGetters([
      "attributePointsAvailable",
      "playerLevel",
      "playerMaxHealth",
      "playerMaxMana",
      "playerMaxHealthPoints",
      "playerMaxManaPoints",
      "playerAtkPoints",
      "playerAtkValue",
      "playerDefPoints",
      "playerDefValue",
      "playerIntelligencePoints",
      "playerIntelligenceValue",
    ]),
  },
};
</script>
