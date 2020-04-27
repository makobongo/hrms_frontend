<template>
  <div>
    <v-card-text>
      <v-row>
        <v-col>
          <v-text-field
            label="Job title"
            outlined
            dense
            v-model="job.title"
            name="title"
            v-validate="'required|min:10'"
          >
          </v-text-field>
          <span class="red--text">{{ errors.first("title") }}</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <vue-editor
            v-model="job.description"
            name="description"
            v-validate="'required|min:20'"
          ></vue-editor>
          <span class="red--text">{{ errors.first("description") }}</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            type="date"
            label="Closing Date"
            outlined
            dense
            v-model="job.closing_date"
            name="closing_date"
            v-validate="'required'"
          ></v-text-field>
          <span class="red--text">{{ errors.first("closing_date") }}</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Location"
            dense
            outlined
            v-model="job.location"
            name="location"
            v-validate="'required'"
          ></v-text-field>
          <span class="red--text">{{ errors.first("location") }}</span>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn class="red" rounded small to="/admin/jobs">
        <v-icon>mdi-arrow-left-circle</v-icon>Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn class="info" rounded small @click="save">
        Save<v-icon>mdi-send-circle-outline</v-icon>
      </v-btn>
    </v-card-actions>
  </div>
</template>
<script>
export default {
  data: () => ({
    job: {}
  }),
  methods: {
    save() {
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          return false;
        } else {
          this.$store.dispatch("job/createJob", this.job);
        }
      });
    }
  }
};
</script>
