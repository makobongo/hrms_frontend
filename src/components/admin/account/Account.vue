<template>
  <div>
    <v-row>
      <v-col cols="4">
        <v-card>
          <v-card-text>
            <v-avatar>
              <img src="../../../assets/placeholder.png" alt="avatar" />
            </v-avatar>
            <h4>Username: Mr.Tester</h4>
            <h4>Role: Human Resource Management</h4>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card>
          <v-card-title>
            <h3 class="body-2">Adjust account password</h3>
            <v-spacer></v-spacer>
            <v-btn
              x-small
              fab
              depressed
              color="info"
              @click="editPassword"
              v-if="isEditing"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              x-small
              fab
              depressed
              color="red"
              @click="editPassword"
              v-else
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="Enter new Password"
              prepend-inner-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :disabled="isEditing"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
            <v-text-field
              label="Confirm Password"
              prepend-inner-icon="mdi-lock"
              :disabled="isEditing"
              type="password"
            ></v-text-field>
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
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    isEditing: true,
    showPassword: false
  }),
  methods: {
    editPassword() {
      this.isEditing = !this.isEditing;
    }
  }
};
</script>
