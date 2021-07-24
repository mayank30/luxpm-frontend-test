<template>
  <div>
    <div class="text-h6 text-center">Forgot Password</div>
    <v-form lazy-validation ref="recoverForm">
      <v-row class="text-center">
        <v-col cols="12" class="mt-5">
          <v-text-field
            label="Email"
            prepend-inner-icon="mdi-email"
            :rules="rules.email"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="mt-10 pl-10 pr-10">
          <v-btn depressed color="primary" large block @click="recover">
            Recover Account
          </v-btn>
        </v-col>
        <v-col cols="12" class="mt-n2 link-text">
          <router-link to="login">I remember my password</router-link>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "Recover",
  components: {},
  data() {
    return {
      rules: {
        email: [
          (v) => !!v || "Email is required",
          (v) =>
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
            "Email must be valid",
        ],
      },
    };
  },
  methods: {
    recover() {
      const isValid = this.$refs.recoverForm.validate();
      if (isValid) {
        this.$router.push("login");
      }
    },
  },
};
</script>
