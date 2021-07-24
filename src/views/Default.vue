<template>
  <v-row class="text-center">
    <v-col cols="12" class="mt-5">
      <h3 class="grey-text font-weight-medium">
        Stay on the top of your finance
      </h3>
      <p class="font-weight-light light-grey-text text-body-2 mt-10">
        Lorem ipsum carrots, consetetur sadipscing over the years, but the
        diameter
      </p>
    </v-col>
    <v-col cols="12" class="mt-10 pl-10 pr-10">
      <v-btn
        depressed
        color="primary"
        large
        block
        @click="$router.push('register')"
      >
        Sign up
      </v-btn>
    </v-col>
    <v-col cols="12" class="mt-n2">
      <router-link to="login" class="f14">Login</router-link>
    </v-col>
  </v-row>
</template>
