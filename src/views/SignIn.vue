<template>
  <div id="signin" class="d-flex justify-center align-center">
    <v-container>
      <v-card>
        <v-row>
          <v-col cols="12" md="5" class="py-0" align-self="stretch">
            <div
              class="success pb-10 pt-12 d-flex flex-column justify-center"
              id="bgcolor"
              style=""
            >
              <p class="text-center white--text text-h4 font-italic">
                <span class="font-weight-light">Project</span>Manager
              </p>
              <p class="text-center white--text text-subtitle-1">
                Manage and watch other people's project
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="7" class="my-16">
            <p class="text-center text-h4 font-weight-bold">Sign In</p>
            <v-form ref="form">
              <v-container class="px-15">
                <v-row>
                  <v-col cols="12" class="pb-1 pt-14">
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      required
                      outlined
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="py-1">
                    <v-text-field
                      v-model="password"
                      :rules="passwordRules"
                      :type="showPass ? 'text' : 'password'"
                      :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                      label="Password"
                      hint="At least 8 characters"
                      @click:append="showPass = !showPass"
                      required
                      outlined
                      autocomplete="true"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-spacer />
                  <v-col class="pt-0" cols="3">
                    <p class="text-caption black--text font-weight-medium">Forgot Password?</p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-btn 
                      block 
                      color="success" 
                      class="my-6" 
                      :loading="logging"
                      :disabled="logging"
                      @click="signin"
                    >
                        <span class="py-3 text-subtitle-1" rounded>Sign In</span>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      emailRules: [
        v => !!v || "Email is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      passwordRules: [
        v => !!v || "Password is required",
        v => v.length >= 8 || "Password must be of 8"
      ],
      showPass: false,
      logging: false
    };
  },
  methods: {
    signin() {
        if(!this.$refs.form.validate())
          return

        this.logging = true
        
        // Change to actual login
        setTimeout(() => this.logging = false, 3000)
    }
  }
};
</script>

<style>
#signin {
  width: 100%;
  height: 100%;
}

#bgcolor {
  height: 100%;
}
</style>