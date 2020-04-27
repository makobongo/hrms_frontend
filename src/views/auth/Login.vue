<template>
  <div>
    <v-layout wrap row>
      <v-flex xs12 md5>
        <div class="mx-5 px-4">
          <brand-component />
          <v-card>
            <v-card-title class="justify-center">
              <h4
                class="headline font-weight-medium red--text"
                v-if="loggedInError"
              >
                {{ loggedInError }}
              </h4>
              <h4 class="headline font-weight-medium" v-else>Login</h4>
            </v-card-title>
            <v-card-text>
              <div v-if="isLoading" class="container-loading">
                <img src="../../assets/loading.gif" alt="Loading Icon" />
              </div>
            </v-card-text>
            <v-card-text>
              <v-text-field
                :disabled="isLoading"
                outlined
                label="Username"
                name="username"
                v-validate="'required|min:6'"
                v-model="user.username"
                prepend-inner-icon="mdi-account-circle"
              ></v-text-field>
              <v-alert
                v-if="errors.first('username')"
                dense
                outlined
                :icon="'mdi-alert'"
                color="red"
              >
                {{ errors.first("username") }}
              </v-alert>
              <v-text-field
                :disabled="isLoading"
                outlined
                :type="isVisiblePassword ? 'text' : 'password'"
                label="Password"
                name="password"
                v-validate="'required|min:6'"
                v-model="user.password"
                prepend-inner-icon="mdi-lock"
                :append-icon="isVisiblePassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="isVisiblePassword = !isVisiblePassword"
              ></v-text-field>
              <v-alert
                v-if="errors.first('password')"
                dense
                outlined
                :icon="'mdi-alert'"
                color="red"
              >
                {{ errors.first("password") }}
              </v-alert>
            </v-card-text>
            <v-card-actions>
              <router-link to="">
                Forgotten Password?
              </router-link>
              <v-spacer></v-spacer>
              <v-btn
                color="info"
                depressed
                rounded
                @click="login"
                :disabled="isLoading"
                >log in</v-btn
              >
            </v-card-actions>
          </v-card>
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
    isVisiblePassword: false,
    user: {}
  }),
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading;
    },
    loggedInError() {
      return this.$store.state.auth.loggedInError;
    }
  },
  components: {
    "brand-component": IventsoftBrand,
    "footer-component": IventsoftBrandSmallFooter,
    "image-component": IventsoftImage
  },
  methods: {
    login() {
      this.$validator.validate().then(isValid => {
        if (!isValid) {
          return false;
        } else {
          this.$store.dispatch("auth/loginUser", this.user);
        }
      });
    }
  }
};
</script>
<style scoped>
.container-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 2rem;
  height: 2rem;
}
</style>
