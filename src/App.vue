<template>
  <v-app>
    <v-main>
      <component :is="layout" ref="componentRef">
        <router-view ref="childRef"></router-view>
      </component>
    </v-main>
  </v-app>
</template>

<script>
import { AppLayout } from "./util/constants";
export default {
  name: "App",
  computed: {
    layout() {
      return this.$route.meta.layout || AppLayout.Default;
    },
  },
};
</script>
