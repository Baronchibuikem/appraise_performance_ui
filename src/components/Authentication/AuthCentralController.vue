<template>
  <div class="min-vh-100 layout-view">
    <div class="md-layout-item md-layout md-gutter">
      <div class="md-layout-item md-size-40">
        <router-view></router-view>
      </div>
      <div class="md-layout-item layout-view index-bg-image">
        <h1></h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthCentralController",
};
</script>
<style scoped>
.layout-view {
  display: flex;
  justify-content: center;
  align-items: center;
}
.index-bg-image {
  position: relative;
  /* height: 800px; */
  min-height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../assets/images/images.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>
