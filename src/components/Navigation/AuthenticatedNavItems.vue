<template>
  <div>
    <md-list-item>
      <router-link to="/dashboard">
        <span class="md-list-item-text sidebar-items mt-5 pt-5">Dashboard</span>
      </router-link>
    </md-list-item>
    <hr />

    <md-list-item>
      <router-link to="/team-members">
      <span class="md-list-item-text sidebar-items">View Teams</span>
      </router-link>
    </md-list-item>
    <hr />

    <md-list-item>
      <router-link to="/appraisals">
      <span class="md-list-item-text sidebar-items">Appraisals</span>
      </router-link>
    </md-list-item>
    <hr />

    <md-list-item>
      <router-link to="/change-password">
      <span class="md-list-item-text sidebar-items">Change Password</span>
      </router-link>
    </md-list-item>
    <hr />

    <md-list-item>
      <!-- <md-icon>error</md-icon> -->
      <span class="md-list-item-text sidebar-items">All Staff</span>
    </md-list-item>
    <hr />

    <md-list-item>
      <!-- <md-icon>error</md-icon> -->
      <span class="md-list-item-text sidebar-items">FAQ</span>
    </md-list-item>
    <hr />

    <md-list-item>
      <!-- <md-icon>error</md-icon> -->
      <span class="md-list-item-text sidebar-items">Contact Support</span>
    </md-list-item>
    <hr />
    <md-list-item>
      <!-- <md-icon>error</md-icon> -->
      <span class="md-list-item-text sidebar-items" @click="handle_logout"
        >Logout</span
      >
    </md-list-item>
    <hr />
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
  name: "AuthenticatedNavItems",
  methods: {
    handle_logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
<style lang="scss" scoped>
.md-list-item-text {
  color: white !important;
  margin-left: 20px !important;
}
.sidebar-items:hover {
  cursor: pointer;
  font-size: 20px;
}
</style>
