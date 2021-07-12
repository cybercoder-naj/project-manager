<template>
  <div class="team">
    <h1 class="mx-4 subtitle-1 grey--text">Team</h1>

    <v-container class="my-5">
      <v-row>
        <TeamCard v-for="person in team" :key="person.name" :person="person" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TeamCard from "@/components/TeamCard.vue";
import firebase from '@/firebase.config'

export default {
  name: "Team",
  components: { TeamCard },
  data() {
    return {
      team: [],
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user)
        this.$router.push('/signin')
    })

    firebase.firestore().collection('users').get()
      .then(snapshot => {
        this.team = snapshot.docs.map(doc => doc.data())
      })
  }
};
</script>
