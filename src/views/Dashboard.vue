<template>
  <div class="dasboard">
    <h1 class="mx-4 subtitle-1 grey--text">Dashboard</h1>

    <v-container class="my-5">
      <v-card flat class="pa-3">
        <v-row>
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project Title</div>
            <div>Create a new Website</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>Nishant</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>10th July 2021</div>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <div class="caption grey--text">Status</div>
            <div>Ongoing</div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
