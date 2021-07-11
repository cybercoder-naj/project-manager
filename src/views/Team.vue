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
        {
          name: "The Net Ninja",
          role: "Web developer",
          avatar:
            "https://raw.githubusercontent.com/iamshaunjp/vuetify-playlist/lesson-20/todo-ninja/public/avatar-1.png",
        },
        {
          name: "Ryu",
          role: "Graphic designer",
          avatar:
            "https://raw.githubusercontent.com/iamshaunjp/vuetify-playlist/lesson-20/todo-ninja/public/avatar-2.png",
        },
        {
          name: "Chun Li",
          role: "Web developer",
          avatar:
            "https://raw.githubusercontent.com/iamshaunjp/vuetify-playlist/lesson-20/todo-ninja/public/avatar-3.png",
        },
        {
          name: "Gouken",
          role: "Social media maverick",
          avatar:
            "https://raw.githubusercontent.com/iamshaunjp/vuetify-playlist/lesson-20/todo-ninja/public/avatar-4.png",
        },
        {
          name: "Yoshi",
          role: "Sales guru",
          avatar:
            "https://raw.githubusercontent.com/iamshaunjp/vuetify-playlist/lesson-20/todo-ninja/public/avatar-5.png",
        },
      ],
    };
  },
};
</script>
