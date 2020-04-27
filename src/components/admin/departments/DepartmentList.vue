<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Department</th>
            <th class="text-left">Head</th>
            <th class="text-left">Established</th>
            <th class="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
            <td>{{ item.calories }}</td>
            <td>
              <v-btn
                rounded
                depressed
                x-small
                color="success"
                to="/admin/departments/3"
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
  </div>
</template>
<script>
export default {
  data: () => ({
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159
      }
    ]
  })
};
</script>
