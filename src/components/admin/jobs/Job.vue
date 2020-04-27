<template>
  <div>
    <v-card>
      <v-card-title class="justify-center">
        <h4 class="title">Jobs</h4>
        <v-spacer></v-spacer>
        <v-btn color="red" x-small rounded depressed to="/admin/jobs/create">
          <v-icon x-small>mdi-bell-sleep</v-icon>add job
        </v-btn>
      </v-card-title>
      <router-view />
    </v-card>
  </div>
</template>
<script>
export default {};
</script>
