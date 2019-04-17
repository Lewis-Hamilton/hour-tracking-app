<template>
    <div>
        <b-container>
            <b-form-input v-model="email" type="email" placeholder="email@gmail.com"></b-form-input>
            <b-form-input v-model="password" type="password" placeholder="Password"></b-form-input>
            <b-button v-on:click="register">Register</b-button>
        </b-container>
</div>
</template>

<script>
import firebase from "firebase"
import "../firebaseconfig.js"

export default{
  data () {
    return {
        email: "",
        password: ""
    }
  },

  methods: {
    register() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(user => {
        this.$router.push("/")
        console.log(user)
      })

      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>