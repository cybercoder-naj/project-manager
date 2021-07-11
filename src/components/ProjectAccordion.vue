<template>
  <v-expansion-panel>
    <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
    <v-expansion-panel-content class="px-4 grey--text">
      <div class="font-weight-bold">Due by {{ project.due }}</div>
      <div>{{ project.content }}</div>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  props: ['project']
}
</script>

<style>
</style>