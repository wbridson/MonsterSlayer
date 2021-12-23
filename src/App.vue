<template>
  <v-app>
    <section class="secondary darken-3">
    <the-header></the-header>
    <v-main style="min-height: 62em" >
      <router-view />
    </v-main>
    </section>
  </v-app>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  name: "App",
  components: { TheHeader, },
  data: () => ({
    //
  }),
};
</script>
