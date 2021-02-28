<template>
  <div class="page-container md-layout-column md-elevation-1">
    <md-toolbar class="md-primary" md-fixed style="position: fixed">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Appraisal Management Platform </span>
    </md-toolbar>

    <md-drawer
      :md-active.sync="showNavigation"
      md-swipeable
      :md-click-outside-to-close="true"
      md-fixed
    >
      <md-list v-if="get_is_user_authenticated">
        <AuthNavItem />
      </md-list>
      <md-list v-else class="md-transparent" md-elevation="0">
        <UnauthNavItem />
      </md-list>
    </md-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UnauthNavItem from "./UnauthenticatedNavItems";
import AuthNavItem from "./AuthenticatedNavItems";

export default {
  name: "Navbar",
  components: {
    UnauthNavItem,
    AuthNavItem,
  },
  data() {
    return {
      showNavigation: false,
      showSidepanel: false,
    };
  },
  computed: {
    ...mapGetters(["get_is_user_authenticated"]),
  },
};
</script>

<style lang="scss" scoped>
.page-container[data-v-5c9e19ea] {
  border: none !important;
}

.page-container {
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
  background-color: #448aff !important;
}

.md-content {
  padding: 16px;
}
.md-list {
  background-color: #448aff !important;
}
.md-list-item-text {
  color: white !important;
  margin-left: 20px !important;
}

@media only screen and (max-width: 600px) {
  .md-title {
    font-size: 12px;
    letter-spacing: 0px !important;
  }
}

.v-application ul,
.v-application ol {
  padding-left: 0px !important;
}
</style>