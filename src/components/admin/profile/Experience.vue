<template>
  <v-card>
    <v-card-title>
      <h4 class="title">Experience</h4>
      <v-spacer></v-spacer>
      <v-btn
        x-small
        color="info"
        fab
        depressed
        @click="editData"
        v-if="isEditing"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn x-small color="red" fab depressed @click="editData" v-else>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <vue-editor :disabled="isEditing"></vue-editor>
    </v-card-text>
    <v-card-actions>
      <v-btn class="red" rounded small to="/admin/profile">
        <v-icon>mdi-arrow-left-circle</v-icon>Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn class="info" rounded small :disabled="isEditing">
        Save<v-icon>mdi-send-circle-outline</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    isEditing: true
  }),
  methods: {
    editData() {
      this.isEditing = !this.isEditing;
    }
  }
};
</script>
