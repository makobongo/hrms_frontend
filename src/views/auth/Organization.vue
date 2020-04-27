<template>
  <div>
    <v-layout wrap row>
      <v-flex xs12 md5>
        <div class="mx-5 px-4">
          <brand-component />
          <div v-if="organization">
            <v-card v-for="detail in organization" :key="detail.id">
              <v-card-title class="justify-center">
                <h4 class="subtitle-1 font-weight-medium">
                  Please choose the organization to proceed
                </h4>
              </v-card-title>
              <v-card-text>
                <v-btn
                  small
                  depressed
                  text
                  outlined
                  rounded
                  block
                  color="info"
                  to="/admin/dashboard"
                >
                  <span
                    ><v-icon small>mdi-account-group</v-icon
                    >{{ detail.name }}</span
                  >
                </v-btn>
                <p>
                  <v-icon small>mdi-map-marker</v-icon> {{ detail.location }}
                </p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="info"
                  text
                  small
                  depressed
                  rounded
                  class="overline font-weight-bold"
                  @click="logoutUser"
                  >Sign in as a different user</v-btn
                >
              </v-card-actions>
            </v-card>
          </div>
          <div v-else>
            <v-card>
              <v-card-title class="justify-center">
                <h4 class="subtitle-1 font-weight-medium red--text">
                  Sorry! No organisation exist
                </h4>
              </v-card-title>
              <v-card-text>
                <v-btn
                  small
                  depressed
                  text
                  outlined
                  rounded
                  block
                  color="info"
                  to="/admin/about"
                >
                  <span
                    ><v-icon small>mdi-home-group</v-icon> Create An
                    Organization</span
                  >
                </v-btn>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="info"
                  text
                  small
                  depressed
                  rounded
                  class="overline font-weight-bold"
                  @click="logoutUser"
                  >Sign in as a different user</v-btn
                >
              </v-card-actions>
            </v-card>
          </div>
          <footer-component />
        </div>
      </v-flex>
      <image-component />
    </v-layout>
  </div>
</template>
<script>
import {
  IventsoftBrand,
  IventsoftBrandSmallFooter,
  IventsoftImage
} from "@/components/defaults";
export default {
  data: () => ({
    isVisiblePassword: false
  }),
  components: {
    "brand-component": IventsoftBrand,
    "footer-component": IventsoftBrandSmallFooter,
    "image-component": IventsoftImage
  },
  computed: {
    organization() {
      return this.$store.state.organization.organization;
    }
  },
  created() {
    this.$store.dispatch("organization/fetchOrg");
  },
  methods: {
    logoutUser() {
      this.$store.dispatch("auth/logoutUser");
    }
  }
};
</script>
