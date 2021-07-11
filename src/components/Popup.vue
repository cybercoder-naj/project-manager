<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on" class="success">Add New Project</v-btn>
    </template>
    <v-card>
      <v-card-title class="mx-2 pt-6">
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="mdi-folder"
            :rules="inputRules"
          />
          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="mdi-pencil"
            :rules="inputRules"
          />
          <v-menu :close-on-content-click="true" offset-y min-width="auto">
            <template v-slot:activator="{ on }">
              <v-text-field
                v-on="on"
                label="Due Date"
                prepend-icon="mdi-calendar"
                readonly
                :value="formattedDate"
                :rules="inputRules"
              />
            </template>
            <v-date-picker v-model="due"> </v-date-picker>
          </v-menu>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn text class="success mx-0 my-3" @click="handleSubmit">
          Add Project
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import moment from "moment";
import db from "@/firebase.config";

export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      inputRules: [
        v => (v && v.length >= 3) || "Minimum length is 3 characters"
      ]
    };
  },
  methods: {
    handleSubmit() {
      if (!this.$refs.form.validate()) return;

      const project = {
        title: this.title,
        content: this.content,
        due: this.formattedDate,
        person: "Cybercoder",
        status: "ongoing"
      };
      db.collection("projects").add(project)
        .then(() => console.debug('Added to Db'))
    }
  },
  computed: {
    formattedDate() {
      return this.due ? moment(this.due).format("Do MMM YYYY") : "";
    }
  }
};
</script>