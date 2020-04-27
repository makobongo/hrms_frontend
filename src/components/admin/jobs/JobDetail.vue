<template>
  <div>
    <v-card v-if="job">
      <v-alert type="success" v-if="successMsg" dense dismissible>{{
        successMsg
      }}</v-alert>
      <v-alert type="error" v-if="errorMsg" dense dismissible>
        {{ errorMsg }}</v-alert
      >
      <v-card-title>
        <v-spacer></v-spacer>
        <v-btn
          depressed
          fab
          color="info"
          x-small
          @click="enableEdit"
          v-if="isEditing"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn depressed fab color="red" x-small @click="enableEdit" v-else>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-text-field
          dense
          label="Title"
          v-model="job.title"
          :disabled="isEditing"
          name="title"
          v-validate="'required'"
        ></v-text-field>
        <span class="red--text">{{ errors.first("title") }}</span>
        <p>Description:</p>
        <vue-editor
          v-model="job.description"
          :disabled="isEditing"
          name="description"
          v-validate="'required'"
        ></vue-editor>
        <span class="text--red">{{ errors.first("description") }}</span>
        <p>
          <v-text-field
            label="Location:"
            v-model="job.location"
            :disabled="isEditing"
            name="location"
            v-validate="'required'"
          ></v-text-field>
          <span class="red--text">{{ errors.first("location") }}</span>
        </p>
        <p>
          <v-text-field
            label="Closing Date"
            type="date"
            v-model="job.closing_date"
            :disabled="isEditing"
            name="closing_date"
            v-validate="'required'"
          ></v-text-field>
          <span class="red--text">{{ errors.first("closing_date") }}</span>
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="error" x-small depressed rounded to="/admin/jobs">
          <v-icon x-small>mdi-arrow-left-circle</v-icon> back
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="error"
          x-small
          depressed
          rounded
          @click="update"
          :disabled="isEditing"
        >
          <v-icon x-small>mdi-send-circle-outline</v-icon> update
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
  computed: {
    job() {
      return this.$store.state.job.jobDetail;
    },
    successMsg() {
      return this.$store.state.job.successUpdateMsg;
    },
    errorMsg() {
      return this.$store.state.job.errorUpdateMsg;
    }
  },
  methods: {
    enableEdit() {
      this.isEditing = !this.isEditing;
    },
    update() {
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          return false;
        } else {
          this.$store.dispatch("job/updateJob", this.job);
          this.$store.dispatch("job/fetchDetail", this.$route.params.id);
        }
      });
    }
  },
  created() {
    this.$store.dispatch("job/fetchDetail", this.$route.params.id);
  }
};
</script>
