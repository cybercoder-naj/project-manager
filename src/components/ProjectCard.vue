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
        <div>{{ getDueDate }}</div>
      </v-col>
      <v-col cols="12" sm="4" md="2">
        <div class="text-right">
          <v-chip small :class="`${project.status} white--text caption my-2`">
            {{ project.status }}
          </v-chip>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import moment from 'moment'

export default {
  name: "ProjectCard",
  props: ["project"],
  computed: {
    getDueDate() {
      const date = new Date(this.project.due)
      return moment(date).format('Do MMM yyyy')
    }
  }
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
  content: "";
  width: 100%;
  background-color: lightgrey;
  height: 1px;
}

.v-chip.complete{
  background: #3cd1c2 !important;
}

.v-chip.ongoing{
  background: #ffaa2c !important;
}

.v-chip.overdue{
  background: #f83e70 !important;
}
</style>