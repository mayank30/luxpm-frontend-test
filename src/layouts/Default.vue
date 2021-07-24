<template>
  <v-container class="pl-10 pr-10">
    <v-row class="text-center">
      <v-col cols="12" class="mt-16">
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="28"
        />
      </v-col>
      <v-col cols="12" class="mt-10">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="70"
        />
      </v-col>
    </v-row>
    <slot />
  </v-container>
</template>
