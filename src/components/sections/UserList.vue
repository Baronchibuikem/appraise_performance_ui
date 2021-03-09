<template>
  <v-app>
    <div class="layout-view_users mb-5">
      <h1 class="mt-5 pt-5" style="margin-top: 100%">
        Search for all staff in a Team
      </h1>
    </div>
    <div class="container">
      <div class="col-md-7 mx-auto">
        <form>
          <md-field>
            <md-input
              v-model="text"
              type="text"
              style="padding: 20px"
              placeholder="Enter team name to get all staff in the team"
            ></md-input>
          </md-field>
          <div>
            <md-button type="submit" class="md-raised form-control md-primary" @click.prevent="search_for_team_members"
              >Search</md-button
            >
          </div>
        </form>
      </div>
      <div class="mt-4">
        <md-table>
          <md-table-row>
            <md-table-head md-numeric>ID</md-table-head>
            <md-table-head>First Name</md-table-head>
            <md-table-head>Last Name</md-table-head>
            <md-table-head>Email</md-table-head>
            <md-table-head>Team</md-table-head>
          </md-table-row>

          <md-table-row
            v-for="member in this.allSubTeamMembers"
            :key="member.id"
          >
            <md-table-cell md-numeric>{{ member.id }}</md-table-cell>
            <md-table-cell>{{ member.first_name }}</md-table-cell>
            <md-table-cell>{{ member.last_name }}</md-table-cell>
            <md-table-cell>{{ member.email }}</md-table-cell>
            <md-table-cell>{{ member.user_team_name }}</md-table-cell>
          </md-table-row>
        </md-table>
      </div>
      <md-button type="submit" @click="clear" class="md-raised form-control md-primary col-md-2 my-5"
              >Clear List</md-button
            >
    </div>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "UserList",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    search_for_team_members() {
      this.$store.dispatch("subteam_member_action", this.text);
    },
    clear(){
      this.$store.dispatch("clear_list");
    }
  },
  computed: {
    ...mapGetters(["allSubTeamMembers"]),
  },
};
</script>

<style scoped>
.layout-view_users {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
}
</style>