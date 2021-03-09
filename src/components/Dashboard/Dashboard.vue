<template>
  <div class="mt-5 top container">
    <h1 class="text-center">Your Dashboard</h1>
    <div class="row container col-md-8 mx-auto">
      <div class="col-md-4">
        <md-card>
          <div class="md-title text-center mt-3">
            <router-link to="/team-members">view all staff</router-link>
          </div>
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            itaque ea nostrum.
          </md-card-content>
        </md-card>
      </div>
      <div class="col-md-4">
        <md-card>
          <div class="md-title text-center mt-3">
            <router-link to="/appraisals">Appraisals</router-link>
          </div>
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            itaque ea nostrum.
          </md-card-content>
        </md-card>
      </div>
      <div class="col-md-4">
        <md-card>
          <div class="md-title text-center mt-3">
            <a href="#">My profile</a>
          </div>
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            itaque ea nostrum.
          </md-card-content>
        </md-card>
      </div>
      <div class="col-md-6">
        <md-card>
          <div class="md-title text-center mt-3">
            <a href="#">Reports</a>
          </div>
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            itaque ea nostrum.
          </md-card-content>
        </md-card>
      </div>
      <div class="col-md-6">
        <md-card>
          <div class="md-title text-center mt-3">
            <a href="#">Analysis</a>
          </div>
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            itaque ea nostrum.
          </md-card-content>
        </md-card>
      </div>
      <div class="small">
        <line-chart :chart-data="datacollection"></line-chart>
        <button @click="fillData()">Randomize</button>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "../utilities/Charts/LineChart";
export default {
  name: "Dashboard",
  components: {
    LineChart,
  },
  data() {
    return {
      datacollection: null,
    };
  },
  mounted() {
    this.fillData();
  },
  fillData() {
    this.datacollection = {
      labels: [this.getRandomInt(), this.getRandomInt()],
      datasets: [
        {
          label: "Data One",
          backgroundColor: "#f87979",
          data: [this.getRandomInt(), this.getRandomInt()],
        },
        {
          label: "Data One",
          backgroundColor: "#f87979",
          data: [this.getRandomInt(), this.getRandomInt()],
        },
      ],
    };
  },
  getRandomInt() {
    return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
  },
};
</script>

<style lang="scss" scoped>
.top {
  margin-top: 90px !important;
}
.md-card {
  // width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

.md-card-example {
  .md-subhead {
    .md-icon {
      $size: 16px;

      width: $size;
      min-width: $size;
      height: $size;
      font-size: $size !important;
    }

    span {
      vertical-align: middle;
    }
  }

  .card-reservation {
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .md-icon {
      margin: 8px;
    }
  }

  .md-button-group {
    display: flex;

    .md-button {
      min-width: 60px;
      border-radius: 2px;
    }
  }
}
</style>
