<template>
  <v-app>
    <Navbar v-if="signedIn" />
    <v-main class="grey lighten-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import firebase from '@/firebase.config'

export default {
  name: "App",
  components: { Navbar },
  data() {
    return {
      signedIn: false
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.signedIn = user ? true : false
    })
  }
};
</script>
