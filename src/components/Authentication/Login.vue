<template>
  <div class="container layout-view">
    <div class="col-md-5 mx-auto">
      <h5 class="text-center">Login</h5>
      <form @submit.prevent="handle_login">
        <span v-if="this.get_server_error_status">{{
          this.get_server_error_message
        }}</span>
        <md-field md-clearable>
          <md-input
            type="email"
            v-model="email"
            style="padding: 20px"
            placeholder="Email"
          ></md-input>
        </md-field>

        <md-field>
          <md-input
            v-model="password"
            type="password"
            style="padding: 20px"
            placeholder="password"
          ></md-input>
        </md-field>
        <div>
          <div v-if="get_current_status === false">
            <md-button type="submit" class="md-raised form-control md-primary"
              >Login</md-button
            >
          </div>
          <div
            class="text-dark"
            role="status"
            v-if="get_current_status === true"
          >
            <md-button type="submit" class="md-raised form-control md-primary">
              Loading...</md-button
            >
          </div>
        </div>

        <div class="text-center">
          <span
            >Don't have an account?
            <router-link to="/signup/">Sign up here.</router-link></span
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },
  methods: {
    handle_login() {
      const reg_values = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("login", reg_values);
      // if (this.get_server_error_status === true) {
      //   this.$toasted.show(this.get_server_error_message, { duration: 9000 });
      // } else {
      //   this.$toasted.show("You are now logged in", { duration: 5000 });
      // }
    },
  },
  computed: {
    ...mapGetters([
      "get_server_error_status",
      "get_server_error_message",
      "get_current_status",
    ]),
  },
};
</script>
<style scoped>
.layout-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
}
</style>
