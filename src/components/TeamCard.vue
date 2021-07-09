<template>
  <v-col cols="12" sm="6" md="4" lg="3">
    <v-card class="text-center ma-3">
      <v-responsive class="pt-4"> image goes here </v-responsive>
      <v-card-text>
        <div class="text-subtitle-1">{{ person.name }}</div>
        <div class="grey--text">{{ person.role }}</div>
      </v-card-text>
      <v-card-action>
        <v-btn depressed class="grey--text">
          <v-icon small left>mdi-message</v-icon>
          <span>Message</span>
        </v-btn>
      </v-card-action>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "TeamCard",
  props: ["person"],
};
</script>