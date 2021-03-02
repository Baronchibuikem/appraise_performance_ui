<template>
  <v-app>
    <div class="App-header">
      <div class="container col-md-6 col-sm-12">
        <form @submit.prevent="change_password">
        <md-field>
          <label>old password</label>
          <md-input v-model="old_password" type="password"></md-input>
        </md-field>

        <md-field>
          <label>new password</label>
          <md-input v-model="password" type="password"></md-input>
        </md-field>

        <md-field>
          <label>confirm new password</label>
          <md-input v-model="password2" type="password"></md-input>
        </md-field>

        <div>
            <md-button type="submit" class="md-raised form-control md-primary"
              >Submit</md-button
            >
          </div>
          <!-- <div
            class="text-dark"
            role="status"
            v-if="get_current_status === true"
          >
            <md-button type="submit" class="md-raised form-control md-primary">
              Sending...</md-button
            >
          </div> -->
        </form>
      </div>
    </div>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  data() {
    return {
      old_password: "",
      password: "",
      password2: "",
    };
  },
  methods:{
     change_password() {
      const reg_values = {
        old_password: this.old_password,
        password: this.password,
        password2: this.password2,
        id: this.get_current_user.user_id
      };
      console.log(reg_values)
      // this.$store.dispatch("change-password", reg_values);
    },
  },
   computed: {
    ...mapGetters([
      "get_current_user"
    ]),
  },
};
</script>

<style scoped>
.App-header {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
}
</style>