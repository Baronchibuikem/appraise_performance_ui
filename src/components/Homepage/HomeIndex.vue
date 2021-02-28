<template>
  <v-app>
    <Carousel />
    <div class="row">
      <div class="col-md-3 mt-2">
        <h6 class="text-center">Total Courses</h6>
        <p class="text-center">200</p>
      </div>
      <div class="col-md-3 mt-2">
        <h6 class="text-center">Lastest Course</h6>
        <p class="text-center">Building user authentication in Django</p>
      </div>
      <div class="col-md-3 mt-2">
        <h6 class="text-center">Total free Course</h6>
        <p class="text-center">150</p>
      </div>
      <div class="col-md-3 mt-2">
        <h6 class="text-center">Total Premium Course</h6>
        <p class="text-center">50</p>
      </div>
    </div>
    <hr/>
    <div class="container">
      <div class="md-title text-center">Featured Courses</div>
      <div class="row">
        <div class="col-md-4"><Card/></div>
        <div class="col-md-4"><Card /></div>
        <div class="col-md-4"><Card /></div>
      </div>
    </div>

    <div style="min-height: 50vh; background-color: blue"></div>
  </v-app>
</template>

<script>
import Carousel from "./CarouselSlider";
import Card from "../utilities/Card/Card";
export default {
  components: {
    Carousel,
    Card,
  },
};
</script>

<style>
</style>