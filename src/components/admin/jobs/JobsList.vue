<template>
  <div>
    <v-card-subtitle>
      <v-alert type="success" dense v-if="successMsg" dismissible>{{
        successMsg
      }}</v-alert>
      <v-alert type="success" dense v-if="errorMsg" dismissible>{{
        errorMsg
      }}</v-alert>
    </v-card-subtitle>
    <v-card-text>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Job Title</th>
              <th class="text-left">Closing Date</th>
              <th class="text-left">Location</th>
              <th class="text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in jobs" :key="item.name">
              <td>{{ item.title }}</td>
              <td>{{ item.closing_date }}</td>
              <td>{{ item.location }}</td>
              <td>
                <v-btn
                  rounded
                  depressed
                  x-small
                  color="success"
                  :to="`/admin/jobs/${item._id}`"
                >
                  <v-icon small>mdi-eye-check</v-icon> View
                </v-btn>
                <v-btn
                  rounded
                  depressed
                  x-small
                  color="warning"
                  @click="deleteJob(item._id)"
                >
                  <v-icon small>mdi-delete-circle</v-icon>Delete
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </div>
</template>
<script>
export default {
  computed: {
    jobs() {
      return this.$store.state.job.jobs;
    },
    errorMsg() {
      return this.$store.state.job.successErrorDeleteMsg;
    },
    successMsg() {
      return this.$store.state.job.successDeleteMsg;
    }
  },
  methods: {
    deleteJob(id) {
      this.$store.dispatch("job/deleteJob", id);
      this.$store.dispatch("job/fetchJob");
    }
  },
  created() {
    this.$store.dispatch("job/fetchJob");
  }
};
</script>
