<template>
  <div>
    <v-card>
      <v-card-title class="justify-center">
        <h4 class="title">Files</h4>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <vue-editor v-model="content"></vue-editor>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn class="red" rounded small to="/admin/files">
          <v-icon>mdi-arrow-left-circle</v-icon>Back
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn class="info" rounded small>
          Save<v-icon>mdi-send-circle-outline</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    content: ""
  })
};
</script>
