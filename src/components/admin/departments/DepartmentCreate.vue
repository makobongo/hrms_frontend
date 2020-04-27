<template>
  <div>
    <v-card-text>
      <v-text-field outlined label="Department Name"></v-text-field>
      <v-textarea outlined label="Department description"></v-textarea>
      <v-autocomplete
        v-model="value"
        :items="items"
        dense
        outlined
        filled
        label="Select Head of this department"
      ></v-autocomplete>
      <v-autocomplete
        v-model="friends"
        :disabled="isUpdating"
        :items="people"
        filled
        outlined
        chips
        color="blue-grey lighten-2"
        label="Add Department members"
        item-text="name"
        item-value="name"
        multiple
      >
        <template v-slot:selection="data">
          <v-chip
            v-bind="data.attrs"
            :input-value="data.selected"
            close
            @click="data.select"
            @click:close="remove(data.item)"
          >
            <v-avatar left>
              <v-img :src="data.item.avatar"></v-img>
            </v-avatar>
            {{ data.item.name }}
          </v-chip>
        </template>
        <template v-slot:item="data">
          <template v-if="typeof data.item !== 'object'">
            <v-list-item-content v-text="data.item"></v-list-item-content>
          </template>
          <template v-else>
            <v-list-item-avatar>
              <img :src="data.item.avatar" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="data.item.name"></v-list-item-title>
              <v-list-item-subtitle
                v-html="data.item.group"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </template>
      </v-autocomplete>
    </v-card-text>
    <v-card-actions>
      <v-btn class="red" rounded small to="/admin/departments">
        <v-icon>mdi-arrow-left-circle</v-icon>Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn class="info" rounded small>
        Save<v-icon>mdi-send-circle-outline</v-icon>
      </v-btn>
    </v-card-actions>
  </div>
</template>
<script>
export default {
  data() {
    const srcs = {
      1: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      2: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      3: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      4: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
      5: "https://cdn.vuetifyjs.com/images/lists/5.jpg"
    };
    return {
      items: ["foo", "bar", "fizz", "buzz"],
      friends: ["Sandra Adams", "Britta Holt"],
      people: [
        { header: "Group 1" },
        { name: "Sandra Adams", group: "Group 1", avatar: srcs[1] },
        { name: "Ali Connors", group: "Group 1", avatar: srcs[2] },
        { name: "Trevor Hansen", group: "Group 1", avatar: srcs[3] },
        { name: "Tucker Smith", group: "Group 1", avatar: srcs[2] },
        { divider: true },
        { header: "Group 2" },
        { name: "Britta Holt", group: "Group 2", avatar: srcs[4] },
        { name: "Jane Smith ", group: "Group 2", avatar: srcs[5] },
        { name: "John Smith", group: "Group 2", avatar: srcs[1] },
        { name: "Sandra Williams", group: "Group 2", avatar: srcs[3] }
      ]
    };
  },
  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    }
  },
  methods: {
    remove(item) {
      const index = this.friends.indexOf(item.name);
      if (index >= 0) this.friends.splice(index, 1);
    }
  }
};
</script>
