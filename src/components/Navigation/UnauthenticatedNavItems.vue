<template>
  <div>
    <md-list-item>
      <router-link to="/">
        <!-- <md-icon>move_to_inbox</md-icon> -->
        <span class="md-list-item-text sidebar-items">Home</span></router-link
      >
    </md-list-item>
    <md-list-item>
      <router-link to="/signup">
        <!-- <md-icon>move_to_inbox</md-icon> -->
        <span class="md-list-item-text sidebar-items">Register</span></router-link
      >
    </md-list-item>
    <router-link to="/login">
      <md-list-item>
        <!-- <md-icon>move_to_inbox</md-icon> -->
        <span class="md-list-item-text sidebar-items">Login</span>
      </md-list-item>
    </router-link>
    <md-list-item>
      <!-- <md-icon>error</md-icon> -->
      <span class="md-list-item-text sidebar-items">FAQ</span>
    </md-list-item>

    <md-list-item>
      <!-- <md-icon>error</md-icon> -->
      <span class="md-list-item-text sidebar-items">Support</span>
    </md-list-item>
  </div>
</template>

<script>
export default {
  name: "UnathenticatedNavItems",
};
</script>
<style scoped>
.md-list-item-text {
  color: white !important;
  margin-left: 20px !important;
}

.sidebar-items:hover {
  cursor: pointer;
  font-size: 30px;
}
</style>
