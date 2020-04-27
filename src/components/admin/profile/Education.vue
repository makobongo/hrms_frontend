<template>
  <div>
    <v-card>
      <v-card-title>
        <h4 class="title">Education</h4>
        <v-spacer></v-spacer>
        <v-btn
          color="info"
          fab
          x-small
          depressed
          @click="editData"
          v-if="isEditing"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn color="red" fab x-small depressed @click="editData" v-else>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-text-field
          label="College / University / Tertiary education"
          :disabled="isEditing"
        ></v-text-field>
        <v-text-field
          label="Highest level attained e.g. diploma in human resource management"
          :disabled="isEditing"
        ></v-text-field>
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
  </div>
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
