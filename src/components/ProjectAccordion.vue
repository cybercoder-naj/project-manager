<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      {{ project.title }}
    </v-expansion-panel-header>
    <v-expansion-panel-content class="px-4 grey--text">
      <div class="font-weight-bold">
        Due by {{ getDueDate }}
        <v-chip small :class="`${project.status} white--text caption my-2`">
          {{ project.status }}
        </v-chip>
      </div>
      <div>{{ project.content }}</div>
      <v-card-actions v-if="project.status !== 'complete'">
        <v-spacer />
        <v-btn class="success" color="white" @click="handleComplete">
          Completed
        </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import moment from 'moment'
import firebase from '@/firebase.config'

export default {
  props: ['project'],
  computed: {
    getDueDate() {
      const date = new Date(this.project.due)
      return moment(date).format("Do MMM yyyy")
    }
  },
  methods: {
    handleComplete() {
      firebase.firestore().collection('projects').doc(this.project.id).update({
        status: 'complete'
      })
      this.project.status = 'complete'
    }
  }
}
</script>

<style>
</style>