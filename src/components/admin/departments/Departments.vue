<template>
  <v-card>
    <v-card-title>
      Departments
      <v-spacer></v-spacer>
      <v-btn
        color="red"
        depressed
        x-small
        rounded
        to="/admin/departments/create"
      >
        <v-icon small>mdi-bank-plus</v-icon>Add Department
      </v-btn>
    </v-card-title>
    <router-view />
  </v-card>
</template>
<script>
export default {};
</script>
