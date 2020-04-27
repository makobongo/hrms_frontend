<template>
  <div>
    <v-card>
      <v-card-title>
        <h4>About organization</h4>
        <v-spacer></v-spacer>
        <v-btn
          depressed
          fab
          x-small
          color="info"
          @click="editData"
          v-if="isEditing"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn depressed fab x-small color="red" @click="editData" v-else>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle>
        <v-alert type="success" dense v-if="successMsg" dismissible>{{
          successMsg
        }}</v-alert>
        <v-alert type="error" dense v-if="errorMsg" dismissible>{{
          errorMsg
        }}</v-alert>
      </v-card-subtitle>
      <v-card-text>
        <v-text-field
          dense
          label="Organization"
          :disabled="isEditing"
          name="name"
          v-validate="'required|min:5'"
          v-model="org.name"
        ></v-text-field>
        <span class="red--text">{{ errors.first("name") }}</span>
        <v-textarea
          label="Description i.e. history, activities etc."
          :disabled="isEditing"
          name="description"
          v-validate="'required|min:20'"
          v-model="org.description"
        ></v-textarea>
        <span class="red--text">{{ errors.first("description") }}</span>
        <v-text-field
          dense
          label="Vision"
          :disabled="isEditing"
          name="Vision"
          v-validate="'required|min:20'"
          v-model="org.vision"
        ></v-text-field>
        <span class="red--text">{{ errors.first("vision") }}</span>
        <v-text-field
          dense
          label="Mission"
          :disabled="isEditing"
          name="mission"
          v-validate="'required|min:20'"
          v-model="org.mission"
        ></v-text-field>
        <span class="red--text">{{ errors.first("mission") }}</span>
        <v-text-field
          dense
          label="Location"
          :disabled="isEditing"
          name="location"
          v-validate="'required|min:5'"
          v-model="org.location"
        ></v-text-field>
        <span class="red--text">{{ errors.first("location") }}</span>
        <v-text-field
          dense
          label="Address"
          :disabled="isEditing"
          name="address"
          v-validate="'required|min:5'"
          v-model="org.address"
        ></v-text-field>
        <span class="red--text">{{ errors.first("address") }}</span>
      </v-card-text>
      <v-card-actions>
        <v-btn class="red" rounded small to="/admin/about">
          <v-icon>mdi-arrow-left-circle</v-icon>Back
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn class="info" rounded small :disabled="isEditing" @click="save">
          Save<v-icon>mdi-send-circle-outline</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    org: {},
    isEditing: true
  }),
  computed: {
    organization() {
      return this.$store.state.organization.organization;
    },
    successMsg() {
      return this.$store.state.organization.successMsg;
    },
    errorMsg() {
      return this.$store.state.organization.errorMsg;
    }
  },
  methods: {
    editData() {
      this.isEditing = !this.isEditing;
    },
    save() {
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          return false;
        } else {
          this.isEditing = !this.isEditing;
          this.$store.dispatch("organization/createOrg", this.org);
        }
      });
    }
  },
  created() {
    this.$store.dispatch("organization/fetchOrg");
  }
};
</script>
