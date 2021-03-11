<template>
  <div class="container">
    <h2 class="layout-view_users">List of all Appraisals and their status</h2>

    <div class="row">
      <div class="col-md-6">
        <div class="md-layout-item col-6 mx-auto">
          <md-field>
            <md-select
              v-model="select_quarter"
              name="user_type"
              id="user_type"
              placeholder="Select Quarter"
              style="padding: 0px 10px"
            >
              <md-option value="Instructor">Quarter 1</md-option>
              <md-option value="Student">Quarter 2</md-option>
            </md-select>
          </md-field>
        </div>
      </div>
      <div class="col-md-6">
        <div class="md-layout-item col-6 mx-auto">
          <md-field>
            <md-select
              v-model="appraisal_status"
              name="user_type"
              id="user_type"
              placeholder="Select Appraisal Status"
              style="padding: 0px 10px"
            >
              <md-option value="Instructor">Completed</md-option>
              <md-option value="Student">Pending</md-option>
            </md-select>
          </md-field>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <md-table>
        <md-table-row>
          <md-table-head md-numeric>ID</md-table-head>
          <md-table-head>Staff</md-table-head>
          <md-table-head>Status</md-table-head>
          <md-table-head>Quarter</md-table-head>
          <md-table-head>Action</md-table-head>
        </md-table-row>

        <md-table-row v-for="member in this.allAppraisals" :key="member.id">
          <md-table-cell md-numeric>{{ member.id }}</md-table-cell>
          <md-table-cell>{{ member.appraisee_user_name }}</md-table-cell>
          <md-table-cell>{{ member.completed }}</md-table-cell>
          <md-table-cell>{{ member.quarter }}</md-table-cell>
          <md-table-cell><span @click="view_appraisal(member.quarter, member.appraisee_user_id, member.appraisee_user_name  )">View Appraisal</span></md-table-cell>
        </md-table-row>
      </md-table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["get_appraisals"]),
    view_appraisal(quarter, id, username){
      console.log("running", quarter, id)
      this.$store.dispatch("get_user_appraisal_form", {quarter, id});
      this.$router.push({ name: 'IndividualUserAppraisal', params: { username: username }})
    }
  },
  computed: {
    ...mapGetters(["allAppraisals"]),
  },
  mounted() {
    // Added the called to ensure the element is mounted once it is called.
    this.$nextTick(() => {
      this.get_appraisals();
    });
  },
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