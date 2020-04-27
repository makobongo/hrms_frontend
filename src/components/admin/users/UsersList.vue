<template>
  <v-card-text>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Avatar</th>
            <th class="text-left">First Name</th>
            <th class="text-left">Last Name</th>
            <th class="text-left">Email</th>
            <th class="text-left">Phone</th>
            <th class="text-left">Address</th>
            <th class="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.avatar }}</td>
            <td>{{ item.f_name }}</td>
            <td>{{ item.l_name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.address }}</td>
            <td>
              <v-btn
                rounded
                depressed
                x-small
                color="success"
                to="/admin/users/3"
              >
                <v-icon small>mdi-eye-check</v-icon> View
              </v-btn>
              <v-btn rounded depressed x-small color="warning">
                <v-icon small>mdi-delete-circle</v-icon>Delete
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card-text>
</template>
<script>
export default {
  data() {
    return {
      desserts: [
        {
          avatar: "Frozen Yogurt",
          f_name: "james",
          l_name: "ballack",
          phone: "082929299292",
          email: "ballack@gmail.com",
          address: "Kandaria"
        }
      ]
    };
  }
};
</script>
