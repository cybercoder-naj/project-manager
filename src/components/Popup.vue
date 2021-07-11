<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on }">
        <v-btn text v-on="on" class="success">Add New Project</v-btn>
    </template>
    <v-card>
        <v-card-title>
            <h2>Add a New Project</h2>
        </v-card-title>
        <!-- Form goes right here -->
    </v-card>
  </v-dialog>
</template>

<script>
export default {

}
</script>