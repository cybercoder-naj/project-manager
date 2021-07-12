<template>
  <nav>
    <v-snackbar
      v-model="snackbar"
      top
      :timeout="3000"
      :color="snackType"
      elevation="24"
    >
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-app-bar flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"/>
      <v-toolbar-title :class="`text-uppercase grey--text`">
        <span class="font-weight-light">Project</span>
        <span>Manager</span>
      </v-toolbar-title>
      <v-spacer />

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" color="grey" class="hidden-xs-only">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text color="grey" @click="signOut">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app color="primary">
      <v-row justify="center">
        <v-col class="mt-5" cols="6">
          <v-avatar size="100">
            <img src="https://raw.githubusercontent.com/iamshaunjp/vuetify-playlist/lesson-20/todo-ninja/public/avatar-1.png" alt="" />
          </v-avatar>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6">
          <p class="white--text text-subheading mt-1">The Net Ninja</p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="9" class="mt-4 mb-3">
          <Popup @submit="handleSubmit" @error="handleError"/>
        </v-col>
      </v-row>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">mdi-{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from './Popup.vue'
import firebase from '@/firebase.config'

export default {
  name: 'Navbar',
  components: { Popup },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "view-dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "account", text: "Team", route: "/team" },
      ],
      snackbar: false,
      message: '',
      snackType: ''
    };
  },
  methods: {
    handleError(event) {
      this.message = event.value || 'Unexpected Error Occured.'
      this.snackType = 'error'
      this.snackbar = true
    },
    handleSubmit() {
      this.message = 'You added a Project!'
      this.snackType = 'success'
      this.snackbar = true
    },
    signOut() {
      firebase.auth().signOut()
    }
  }
};
</script>