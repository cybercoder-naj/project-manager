<template>
  <v-card flat class="pa-3">
    <v-row :class="`pas-3 project ${project.status}`">
      <v-col cols="12" md="6">
        <div class="caption grey--text">Project Title</div>
        <div>{{ project.title }}</div>
      </v-col>
      <v-col cols="6" sm="4" md="2">
        <div class="caption grey--text">Person</div>
        <div>{{ project.person }}</div>
      </v-col>
      <v-col cols="6" sm="4" md="2">
        <div class="caption grey--text">Due by</div>
        <div>{{ project.due }}</div>
      </v-col>
      <v-col cols="12" sm="4" md="2">
        <div class="caption grey--text">Status</div>
        <div>{{ project.status }}</div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: ['project'],
};
</script>

<style>
.project.complete {
    border-left: 4px solid #3cd1c2;
}

.project.ongoing {
    border-left: 4px solid orange;
}

.project.overdue {
    border-left: 4px solid tomato;
}

.project::after {
    content: '';
    width: 100%;
    background-color: lightgrey;
    height: 1px;
}
</style>