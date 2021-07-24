<template>
  <div>
    <div class="text-h6 text-center">Sign up</div>
    <v-form lazy-validation ref="form">
      <v-row class="text-center">
        <v-col cols="12" class="mt-5">
          <v-text-field label="Name" v-model="auth.name" :rules="rules.name">
          </v-text-field>
          <v-text-field
            label="Mobile Phone Number"
            v-model="auth.phone"
            :rules="rules.phone"
          >
          </v-text-field>
          <v-text-field
            label="Date of Birth"
            v-model="auth.dob"
            :rules="rules.dob"
          >
          </v-text-field>

          <v-text-field
            label="Email"
            v-model="auth.email"
            :rules="rules.email"
          ></v-text-field>

          <v-text-field
            label="Password"
            type="password"
            v-model="auth.password"
            :rules="rules.password"
          ></v-text-field>

          <v-text-field
            label="Confirm Password"
            type="password"
            v-model="auth.confirmPassword"
            :rules="rules.confirmPassword"
          ></v-text-field>
          <v-checkbox
            v-model="auth.iAgree"
            :rules="rules.iAgree"
            label="I agree to the terms and conditions"
          ></v-checkbox>
        </v-col>
        <v-col cols="12" class="mt-5 pl-10 pr-10">
          <v-btn depressed color="primary" large block @click="register">
            Sign Up
          </v-btn>
        </v-col>
        <v-col cols="12" class="mt-n2 link-text">
          Already have an account?
          <router-link to="login">log in </router-link>
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
  name: "Register",
  components: {},
  data() {
    return {
      showMessage: false,
      msg: "",
      auth: {
        name: "",
        phone: "",
        dob: "",
        email: "",
        password: "",
        confirmPassword: "",
        iAgree: false,
      },
      rules: {
        name: [(v) => !!v || "Name is required"],
        phone: [(v) => !!v || "Mobile is required"],
        dob: [(v) => !!v || "Date of birth is required"],
        email: [
          (v) => !!v || "Email is required",
          (v) =>
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
            "Email must be valid",
        ],
        password: [
          (v) => !!v || "Password is required",
          (v) => (v && v.length >= 8) || "Password minimum 8 characters",
          (v) =>
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(v) ||
            "Password contain atleast  one uppercase letter, one lowercase letter, one special character, and one number",
        ],
        confirmPassword: [
          (v) => !!v || "Confirm Password is required",
          (v) =>
            v === this.auth.password || "Password confirmation does not match",
        ],
        iAgree: [(v) => !!v || "You must agree to continue!"],
      },
    };
  },
  methods: {
    register() {
      const isValid = this.$refs.form.validate();
      if (isValid) {
        this.msg = "welcome to LuxPM";
        this.showMessage = true;
      }
    },
  },
};
</script>
