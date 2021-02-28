<template>
  <v-app>
    <Navbar />

    <router-view />
    <Footer />
  </v-app>
</template>

<script>
const Navbar = () => import("./components/Navigation/Navbar");
const Footer = () => import("./components/Footer/Footer");
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>
