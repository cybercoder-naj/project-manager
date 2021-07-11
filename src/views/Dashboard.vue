<template>
  <div class="dasboard">
    <h1 class="mx-4 subtitle-1 grey--text">Dashboard</h1>

    <v-container class="my-5">
      <v-row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort projects by person name</span>
        </v-tooltip>
      </v-row>

      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
      />
    </v-container>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
import firebase from '@/firebase.config'

export default {
  name: "Dashboard",
  components: { ProjectCard },
  data() {
    return {
      projects: []
    };
  },
  created() {
    firebase
      .firestore()
      .collection('projects').onSnapshot(res => {
      const changes = res.docChanges()
      changes.forEach(change => {
        if (change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  },
  methods: {
    sortBy(field) {
      this.projects.sort((a, b) => (a[field] < b[field] ? -1 : 1));
    },
  },
};
</script>
