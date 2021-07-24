<template>
  <v-container class="pl-10 pr-10">
    <v-row class="text-center">
      <v-col cols="12" class="mt-5">
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="28"
        />
      </v-col>
    </v-row>
    <slot />
  </v-container>
</template>
