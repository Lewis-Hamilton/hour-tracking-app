<template>
  <div>
    <b-container>
      <b-img fluid src="https://firebasestorage.googleapis.com/v0/b/hour-tracking-app.appspot.com/o/foresight_logo.svg?alt=media&token=b490b5f7-c5b8-4a46-98c7-f417d28b7892"></b-img>
      <b-form-input size="lg" v-model="email" type="email" placeholder="Email"></b-form-input>
      <b-form-input size="lg" v-model="password" type="password" placeholder="Password"></b-form-input>
      <b-button block variant="primary" v-on:click="sign_in">Sign In</b-button>
    </b-container>

    <b-link class="float-left" to="sign_up">Sign Up</b-link>
    <b-link class="float-right" to="#">Forgot your password?</b-link>
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
    sign_in() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
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

<style scoped>
  .container{
    margin-top: 175px;
  }

  .form-control{
    margin: 10px;
    border-radius: 25px;
    width: 88vw;
  }

  .btn{
    margin: 15px 0px 15px 0px;
  }

  .float-left{
    margin: 5px 5px 5px 5vw;
  }

  .float-right{
    margin: 5px 5vw 5px 5px;
  }
</style>