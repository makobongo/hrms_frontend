<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-img
        alt="Iventsoft"
        class="shrink mt-1 hidden-sm-and-down mr-8"
        contain
        min-width="70"
        src="../../assets/logo.png"
        width="70"
      />
      <v-toolbar-title>
        <v-btn fab outlined text x-small @click.stop="mini = !mini">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        class="mr-1 mt-8"
        label="Search"
        outlined
        dense
        append-icon="mdi-magnify"
      ></v-text-field>
      <div v-if="organization">
        <v-btn
          outlined
          rounded
          small
          class="mr-1"
          v-for="detail in organization"
          :key="detail.id"
          >Organization: {{ detail.name }}</v-btn
        >
      </div>
      <div v-else>
        <v-btn outlined rounded small class="mr-1" to="/admin/about"
          >Create</v-btn
        >
      </div>
      <v-btn outlined text rounded small class="mr-1">{{
        user ? user.username : "admin"
      }}</v-btn>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            dark
            v-on="on"
            x-small
            color="info"
            outlined
            fab
            @click="logoutUser"
          >
            <v-icon x-small>mdi-lock</v-icon>
          </v-btn>
        </template>
        <span>logout</span>
      </v-tooltip>
    </v-app-bar>
    <v-content>
      <v-row>
        <v-col cols="3">
          <v-navigation-drawer
            v-model="drawer"
            :mini-variant.sync="mini"
            permanent
          >
            <v-list-item class="px-2">
              <v-list-item-avatar>
                <v-img src="../../assets/placeholder.png"></v-img>
              </v-list-item-avatar>
              <v-list-item-title>{{
                user ? user.username : "admin"
              }}</v-list-item-title>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>
              <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                :to="item.url"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-tooltip right>
                      <template v-slot:activator="{ on }">
                        <v-btn
                          dark
                          v-on="on"
                          x-small
                          color="info"
                          outlined
                          rounded
                          @click="logoutUser"
                        >
                          <v-icon x-small>mdi-lock</v-icon> Logout
                        </v-btn>
                      </template>
                      <span>logout</span>
                    </v-tooltip>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-col>
        <v-col cols="9">
          <transition name="slide-fade" mode="out-in">
            <router-view />
          </transition>
        </v-col>
      </v-row>
    </v-content>
    <!--    <v-footer color="info" padless>-->
    <!--      <v-row justify="center" no-gutters>-->
    <!--        <v-col class="primary lighten-2 py-4 text-center white&#45;&#45;text" cols="12">-->
    <!--          {{ new Date().getFullYear() }} — <strong>iventsoft</strong>-->
    <!--        </v-col>-->
    <!--      </v-row>-->
    <!--    </v-footer>-->
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: true,
    items: [
      { title: "Dashboard", icon: "mdi-home-circle", url: "/admin/dashboard" },
      { title: "Profile", icon: "mdi-account-circle", url: "/admin/profile" },
      { title: "My Account", icon: "mdi-account", url: "/admin/account" },
      { title: "Jobs", icon: "mdi-library", url: "/admin/jobs" },
      {
        title: "Departments",
        icon: "mdi-home-city",
        url: "/admin/departments"
      },
      {
        title: "Users",
        icon: "mdi-account-multiple-check",
        url: "/admin/users"
      },
      { title: "Benefits", icon: "mdi-food", url: "/admin/benefits" },
      { title: "Roles", icon: "mdi-hammer-wrench", url: "/admin/roles" },
      {
        title: "Applicants",
        icon: "mdi-account-multiple",
        url: "/admin/applicants"
      },
      { title: "Hr", icon: "mdi-account-supervisor-circle", url: "/admin/hrs" },
      { title: "About", icon: "mdi-help-box", url: "/admin/about" },
      { title: "MyFiles", icon: "mdi-folder", url: "/admin/files" }
    ],
    mini: false
  }),
  computed: {
    user() {
      return this.$store.state.admin.user;
    },
    organization() {
      return this.$store.state.organization.organization;
    }
  },
  created() {
    this.$store.dispatch("admin/fetchLoggedInUser");
  },
  methods: {
    logoutUser() {
      this.$store.dispatch("auth/logoutUser");
    }
  }
};
</script>
<style scoped>
/*** TRANSITIONS ***/
.fade-enter {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
.fade-leave-to {
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
.slide-up-enter {
  transform: translateY(10px);
  opacity: 0;
}
.slide-up-enter-active {
  transition: all 0.2s ease;
}
.slide-up-move {
  transition: transform 0.5s ease-out;
}
</style>
