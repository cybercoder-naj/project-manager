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
          <v-col
            cols="12"
            md="6"
            lg="6"
            class="my-md-16 my-sm-8 my-8"
            order="2"
            order-md="1"
          >
            <p class="text-center text-h4 font-weight-bold">Register</p>
            <v-form ref="form">
              <v-container class="px-10 px-lg-16">
                <v-row>
                  <v-col cols="12" class="d-flex justify-center">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <label
                          style="position: relative; border-radius: 50%"
                          id="img-label"
                          v-on="on"
                        >
                          <input
                            type="file"
                            accept="image/*"
                            hidden
                            @change="handleImageUpload"
                            required
                          />
                          <v-img
                            :src="
                              image.url
                                ? image.url
                                : require('@/assets/profile.svg')
                            "
                            :aspect-ratio="1 / 1"
                            max-height="100"
                            max-width="100"
                            class="grey lighten-1"
                            style="border-radius: 50%; border: 3px solid grey"
                          />
                          <v-overlay absolute style="opacity: 0">
                            <v-icon x-large>mdi-cloud-upload</v-icon>
                          </v-overlay>
                        </label>
                      </template>
                      <span>Upload Profile picture</span>
                    </v-tooltip>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="pb-md-1 pt-md-14 pt-sm-7 pt-7">
                    <v-text-field
                      v-model="name"
                      :rules="nameRules"
                      label="Full Name"
                      required
                      outlined
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="py-1">
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
                      @click:append="showPass = !showPass"
                      required
                      outlined
                      autocomplete="true"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="pt-0 py-sm-0 py-0" cols="12">
                    <p
                      class="
                        text-caption text-start
                        black--text
                        font-weight-medium
                      "
                    >
                      Already have an account?
                      <a class="v-link black--text" href="/register">
                        Click here to sign in.
                      </a>
                    </p>
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
                      @click="register"
                    >
                      <span class="text-subtitle-1" rounded>Register</span>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-progress-linear v-if="logging" :value="progress" />
              </v-container>
            </v-form>
          </v-col>
          <v-col
            cols="12"
            md="6"
            lg="6"
            class="py-0"
            align-self="stretch"
            order="1"
            order-md="2"
          >
            <div
              class="
                success
                py-6
                pb-md-10
                pt-md-12
                py-sm-8
                d-flex
                flex-column
                justify-center
                text-center
                white--text
              "
              id="bgcolor"
            >
              <p class="text-h4 font-italic">
                <span class="font-weight-light">Project</span>Manager
              </p>
              <p class="text-subtitle-1">
                Manage and watch other people's project
              </p>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import firebase from "@/firebase.config";

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
        v => v.length >= 8 || "Password must be atleast 8 characters"
      ],
      name: "",
      nameRules: [v => !!v || "Name is required"],
      showPass: false,
      logging: false,
      snackbar: false,
      message: "",
      overlay: false,
      image: {
        image: null,
        url: null
      },
      progress: 0
    };
  },
  methods: {
    async register() {
      if (!this.$refs.form.validate()) return;

      this.logging = true;

      try {
        const { user } = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);

        if (this.image.image == null) {
          await firebase
              .firestore()
              .collection("users")
              .doc(user.uid)
              .set({
                name: this.name,
                email: this.email,
                image: ''
              });
            this.$router.push("/");
        } else {
          const uploadTask = firebase
            .storage()
            .ref("profiles/")
            .child(user.uid)
            .put(this.image.image);

          uploadTask.on(
            "state_changed",
            () => {},
            error => {
              throw new Error(error.message);
            },
            async () => {
              const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
              await firebase
                .firestore()
                .collection("users")
                .doc(user.uid)
                .set({
                  name: this.name,
                  email: this.email,
                  image: downloadURL
                });
              this.$router.push("/");
            }
          )
        }
      } catch (error) {
        this.message = error.message;
        this.snackbar = true;
      } finally {
        this.logging = false;
      }
    },
    handleImageUpload(event) {
      this.image.image = event.target.files[0];
      this.image.url = URL.createObjectURL(this.image.image);
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) this.$router.push("/");
    });
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

#img-label:hover .v-overlay {
  cursor: pointer;
  opacity: 1 !important;
}
</style>