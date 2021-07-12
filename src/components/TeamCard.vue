<template>
  <v-col cols="12" sm="6" md="4" lg="2">
    <v-card class="ma-3">
      <v-responsive class="pt-4 text-center">
        <v-avatar size="120" class="grey lighten-2">
          <img :src="person.image" :alt="person.name" />
        </v-avatar>
      </v-responsive>
      <v-card-text>
        <div class="text-h5 text-center">{{ person.name }}</div>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "TeamCard",
  props: ["person"]
}
</script>
