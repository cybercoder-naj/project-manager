<template>
  <div id="signin" class="d-flex justify-center align-center">
    <v-snackbar
      v-model="snackbar"
      top
      :timeout="3000"
      color="error"
      elevation="20"
    >
      {{ message }}
    </v-snackbar>
    <v-container class="px-2 px-sm-10 px-md-4 px-xl-16">
      <v-card elevation="20" class="mx-2 mx-sm-10 mx-md-4 mx-xl-16">
        <v-row>
          <LandingDesign />
          <v-col cols="12" md="6" lg="6" class="my-md-16 my-sm-8 my-8">
            <p class="text-center text-h4 font-weight-bold">Sign In</p>
            <v-form ref="form">
              <v-container class="px-10 px-lg-16">
                <v-row>
                  <v-col cols="12" class="pb-md-1 pt-md-14 pt-sm-7 pt-7">
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
                  <v-col class="pt-0 py-sm-0 py-0" cols="6">
                    <p class="text-caption text-start black--text font-weight-medium">Do not have an account? 
                      <a class="v-link black--text" href="/register">Click here to register.</a>
                    </p>
                  </v-col>
                  <v-spacer />
                  <v-col class="pt-0 py-sm-0 py-0" cols="6">
                    <p class="text-caption text-end black--text font-weight-medium v-link">Forgot Password?</p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-btn 
                      block 
                      color="success" 
                      class="my-md-6 my-sm-3 my-3" 
                      :loading="logging"
                      :disabled="logging"
                      @click="signin"
                    >
                        <span class="text-subtitle-1" rounded>Sign In</span>
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
import firebase from '@/firebase.config'
import LandingDesign from '@/components/LandingDesign.vue'

export default {
  components: { LandingDesign },
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
      logging: false,
      snackbar: false,
      message: ''
    };
  },
  methods: {
    async signin() {
        if(!this.$refs.form.validate())
          return

        this.logging = true
        
        try {
          await firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
          this.$router.push('/')
        } catch (error) {
          this.message = error.message
          this.snackbar = true
        } finally {
          this.logging = false
        }
    }
  },
  created() {    
    const auth = firebase.auth()
    if (auth.currentUser && auth.currentUser.uid)
      this.$router.push('/')

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

.v-link {
  /* color: inherit !important;*/
  cursor: pointer;
}

.v-link:hover {
  text-decoration: underline;
}
</style>