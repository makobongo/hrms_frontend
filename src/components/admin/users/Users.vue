<template>
  <div>
    <v-card>
      <v-card-title>
        Users
        <v-spacer></v-spacer>
        <v-btn color="red" small rounded depressed to="/admin/users/create">
          <v-icon small>mdi-account-circle</v-icon>add user
        </v-btn>
      </v-card-title>
      <router-view />
    </v-card>
  </div>
</template>
<script>
export default {};
</script>
