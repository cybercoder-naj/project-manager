<template>
  <v-app>
    <!-- TODO v-if="signedIn" -->
    <Navbar />
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
    return {};
  },
  computed: {
    signedIn() {
      return firebase.auth().currentUser &&
        firebase.auth().currentUser.uid ? true : false 
    }
  }
};
</script>
