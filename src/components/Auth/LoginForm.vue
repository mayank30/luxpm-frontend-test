<template>
  <div>
    <div class="text-h6 text-center">Sign In</div>
    <v-form lazy-validation ref="form" class="mt-10">
      <v-row class="text-center">
        <v-col cols="12">
          <v-text-field
            label="Email"
            prepend-inner-icon="mdi-email"
            v-model="auth.email"
            :rules="rules.email"
          >
          </v-text-field>

          <v-text-field
            label="Password"
            prepend-inner-icon="mdi-lock"
            v-model="auth.password"
            :rules="rules.password"
            type="password"
          ></v-text-field>

          <router-link to="forgot-password" class="text-right">
            Forgot Password?
          </router-link>
        </v-col>
        <v-col cols="12" class="mt-10 pl-10 pr-10">
          <v-btn depressed color="primary" large block @click="login">
            Sign in
          </v-btn>
        </v-col>
        <v-col cols="12" class="mt-n2 link-text">
          Don't have an account?
          <router-link to="register">sign up</router-link>
        </v-col>
      </v-row>
    </v-form>
    <v-snackbar v-model="showMessage">
      {{ msg }}
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="showMessage = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      showMessage: false,
      msg: "",
      auth: {
        email: "",
        password: "",
      },
      rules: {
        email: [
          (v) => !!v || "Email is required",
          (v) =>
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
            "Email must be valid",
        ],
        password: [(v) => !!v || "Password is required"],
      },
    };
  },
  methods: {
    login() {
      const isValid = this.$refs.form.validate();
      if (isValid) {
        const testLogin = {
          email: "test@luxpmsoft.com",
          password: "test1234!",
        };
        if (
          testLogin.email === this.auth.email &&
          testLogin.password === this.auth.password
        ) {
          this.$router.push("blank");
        } else {
          this.msg = "Invalid Login";
          this.showMessage = true;
        }
      }
    },
  },
};
</script>
