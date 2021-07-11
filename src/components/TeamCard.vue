<template>
  <v-col cols="12" sm="6" md="4" lg="3">
    <v-card class="ma-3">
      <v-responsive class="pt-4 text-center">
        <v-avatar size="100" class="grey lighten-2">
          <img :src="person.avatar" :alt="person.name" />
        </v-avatar>
      </v-responsive>
      <v-card-text>
        <div class="text-subtitle-1 text-center">{{ person.name }}</div>
        <div class="grey--text text-center">{{ person.role }}</div>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="grey" class="ml-1 mb-2">
          <v-icon small left>mdi-message</v-icon>
          <span>Message</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "TeamCard",
  props: ["person"]
}
</script>
