<template>
<div>
    <div class="container">
    <h2 class="layout-view_users"> User</h2>
   <div class="mt-4">
      <md-table>
        <md-table-row>
          <md-table-head md-numeric>ID</md-table-head>
          <md-table-head>Question</md-table-head>
          <md-table-head>Question Section</md-table-head>
          <md-table-head>Score</md-table-head>
          <md-table-head>Comment</md-table-head>
        </md-table-row>

        <md-table-row v-for="user in this.singleUserAppraisal" :key="user.id">
          <md-table-cell md-numeric>{{ user.id }}</md-table-cell>
          <md-table-cell>{{ user.question }}</md-table-cell>
          <md-table-cell>{{ user.question_type }}</md-table-cell>
          <md-table-cell>{{ user.score }}</md-table-cell>
          <md-table-cell>{{ user.cooment }}</md-table-cell>
        </md-table-row>
      </md-table>
    </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "IndividualUserAppraisal",
  computed: {
    ...mapGetters(["singleUserAppraisal"]),
  },
  created(){

  }
};
</script>

<style scoped>
.layout-view_users {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
</style>