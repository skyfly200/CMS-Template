<template>
  <div class="base-layout">
    <Nav />
    <v-content>
      <v-container fluid>
        <v-card class="pa-4 ma-4">
          <h1> {{ $page.frontmatter.contactBlurb }} </h1>
          <h2> {{ $page.frontmatter.phone }} </h2>
          <h2> {{ $page.frontmatter.email }} </h2>
          <Content />
        </v-card>
        <v-card class="pa-4 ma-4">
          <h2>Get in touch!</h2>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-textarea
              v-model="message"
              label="Message"
              required
            ></v-textarea>

            <v-btn
              :disabled="!valid"
              @click="submit"
            >
              submit
            </v-btn>
            <v-btn @click="clear">clear</v-btn>
          </v-form>
        </v-card>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import Nav from "./components/Nav"
import axios from 'axios'

export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    message: ''
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post('/api/submit', {
          name: this.name,
          email: this.email,
          select: this.select,
          checkbox: this.checkbox
        })
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  },
  components: {
    Nav
  }
};
</script>
<style>
  .card-header {
    text-align: center;
  }
</style>
