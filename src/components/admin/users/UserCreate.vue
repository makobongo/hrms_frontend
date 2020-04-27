<template>
  <div>
    <v-card-text>
      <v-text-field dense outlined label="First Name"></v-text-field>
      <v-text-field dense outlined label="Last Name"></v-text-field>
      <v-text-field dense outlined label="Email"></v-text-field>
      <v-file-input
        dense
        accept="image/*"
        label="Please Select the user image"
        outlined
      ></v-file-input>
      <v-text-field dense outlined label="Phone"></v-text-field>
      <v-text-field dense outlined label="Address"></v-text-field>
      <v-textarea
        dense
        label="Describe user in few words"
        outlined
      ></v-textarea>
    </v-card-text>
    <v-card-actions>
      <v-btn class="red" rounded small to="/admin/users">
        <v-icon>mdi-arrow-left-circle</v-icon>Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn class="info" rounded small>
        Save<v-icon>mdi-send-circle-outline</v-icon>
      </v-btn>
    </v-card-actions>
  </div>
</template>
<script>
export default {};
</script>
