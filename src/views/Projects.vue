<template>
  <div class="projects">
    <h1 class="mx-4 subtitle-1 grey--text">Projects</h1>

    <v-container class="my-5">
      <v-expansion-panels inset>
        <ProjectAccordion
          v-for="project in myProjects"
          :key="project.title"
          :project="project"
        />
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import ProjectAccordion from "@/components/ProjectAccordion.vue";
import firebase from "@/firebase.config";

export default {
  name: "Projects",
  components: { ProjectAccordion },
  data() {
    return {
      projects: [],
      user: null
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => project.person === this.user.name);
    }
  },
  created() {
    const { uid } = firebase.auth().currentUser;
    firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .onSnapshot(doc => {
        this.user = doc.data();
      });

    firebase.auth().onAuthStateChanged(user => {
      if (!user) this.$router.push("/signin");
    });

    firebase
      .firestore()
      .collection("projects")
      .onSnapshot(res => {
        const changes = res.docChanges();
        changes.forEach(change => {
          if (change.type !== "added") return;

          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        });
      });
  }
};
</script>
