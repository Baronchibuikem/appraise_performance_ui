<template>
  <div>
    <footer class="text-center py-5">
      This is the footer
    </footer>
  </div>
</template>
<script>
export default {
  components: "Footer",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
<style scoped>
footer{
  height: 100px;
  background-color: #448AFF  
}
</style>