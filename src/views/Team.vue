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

export default {
  name: "Team",
  components: { TeamCard },
  data() {
    return {
      team: [
        { name: "The Net Ninja", role: "Web developer" },
        { name: "Ryu", role: "Graphic designer" },
        { name: "Chun Li", role: "Web developer" },
        { name: "Gouken", role: "Social media maverick" },
        { name: "Yoshi", role: "Sales guru" },
      ],
    };
  },
};
</script>
