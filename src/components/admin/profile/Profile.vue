<template>
  <div>
    <v-row>
      <v-col cols="2" v-for="tab in tabs" :key="tab.text">
        <v-btn x-small color="info" depressed rounded outlined :to="tab.url">
          <v-icon x-small>{{ tab.icon }}</v-icon> {{ tab.text }}
        </v-btn>
      </v-col>
    </v-row>
    <v-card>
      <router-view />
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    tabs: [
      {
        text: "Personal Infor",
        icon: "mdi-account-child",
        url: "/admin/profile"
      },
      {
        text: "Experience",
        icon: "mdi-hammer-wrench",
        url: "/admin/profile/experience"
      },
      {
        text: "Education",
        icon: "mdi-library",
        url: "/admin/profile/education"
      },
      {
        text: "References",
        icon: "mdi-account-supervisor-circle",
        url: "/admin/profile/references"
      },
      { text: "Resume", icon: "mdi-menu", url: "/admin/profile/resume" }
    ]
  })
};
</script>
