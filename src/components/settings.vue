<template>
  <div>
    <button v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from "firebase"
import "../firebaseconfig.js"

export default{
methods: {
    logout () {
      firebase.auth().signOut()
      .then( () =>  {
        this.$router.push("/sign_in")
      })
    }
  }
}
</script>