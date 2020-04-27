<template>
  <div>
    <v-card outlined flat>
      <v-card-text>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Add References
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-text-field
                dense
                outlined
                v-model="reference.name"
                label="name"
              ></v-text-field>
              <v-text-field
                dense
                outlined
                v-model="reference.email"
                label="email"
              ></v-text-field>
              <v-text-field
                dense
                outlined
                v-model="reference.phone"
                label="phone"
              ></v-text-field>
              <v-text-field
                dense
                outlined
                v-model="reference.role"
                label="role"
              ></v-text-field>
              <v-text-field
                dense
                outlined
                v-model="reference.organization"
                label="organization"
              ></v-text-field>
              <v-expansion-panel-header>
                <v-btn
                  color="info"
                  block
                  rounded
                  depressed
                  x-small
                  @click="save"
                >
                  <v-icon small>mdi-account-plus</v-icon>add
                </v-btn>
              </v-expansion-panel-header>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Email</th>
                <th class="text-left">Phone</th>
                <th class="text-left">Role</th>
                <th class="text-left">Organization</th>
                <th class="text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="reference in references" :key="reference.email">
                <td>{{ reference.name }}</td>
                <td>{{ reference.email }}</td>
                <td>{{ reference.phone }}</td>
                <td>{{ reference.role }}</td>
                <td>{{ reference.organization }}</td>
                <td>
                  <v-btn class="info" rounded depressed x-small>
                    <v-icon x-small>mdi-delete-circle</v-icon> delete
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    reference: {},
    references: [
      {
        name: "Frozen Yogurt",
        email: 159,
        phone: 48488484,
        role: "kdkakdkak",
        organization: "new torn"
      }
    ]
  }),
  methods: {
    save() {
      this.references.push(this.reference);
    }
  }
};
</script>
