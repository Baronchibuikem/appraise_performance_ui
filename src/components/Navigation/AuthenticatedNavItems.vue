<template>
  <div>
    <md-list-item>
      <!-- <md-icon>move_to_inbox</md-icon> -->
      <span
        class="md-list-item-text sidebar-items mb-5"
        style="margin-top: 120px"
        >Home</span
      >
    </md-list-item>

    <md-list-item>
      <!-- <md-icon>send</md-icon> -->
      <span class="md-list-item-text sidebar-items my-5">View Teams</span>
    </md-list-item>

    <md-list-item>
      <!-- <md-icon>error</md-icon> -->
      <span class="md-list-item-text sidebar-items my-5">Appraisals</span>
    </md-list-item>

    <md-list-item>
      <!-- <md-icon>error</md-icon> -->
      <span class="md-list-item-text sidebar-items my-5">Change Password</span>
    </md-list-item>

    <md-list-item>
      <!-- <md-icon>error</md-icon> -->
      <span class="md-list-item-text sidebar-items my-5">All Staff</span>
    </md-list-item>

    <md-list-item>
      <!-- <md-icon>error</md-icon> -->
      <span class="md-list-item-text sidebar-items my-5">FAQ</span>
    </md-list-item>

    <md-list-item>
      <!-- <md-icon>error</md-icon> -->
      <span class="md-list-item-text sidebar-items my-5">Contact Support</span>
    </md-list-item>
    <md-list-item @click="handle_logout">
      <!-- <md-icon>error</md-icon> -->
      <span class="md-list-item-text sidebar-items my-5">Logout</span>
    </md-list-item>
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
