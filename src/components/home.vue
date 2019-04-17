<template>
  <div>
      <h1>{{CurrentTime}}</h1>
      <button v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from "firebase"
import "../firebaseconfig.js"
const moment = require('moment')

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
  },

  data () {
    return {
      CurrentTime: ''
    }
  },
  created () {
    console.log(this.CurrentTime)
    setInterval(() => {
      this.CurrentTime = moment().format('h:mm:ss a')
    }, 1000)
  },

  beforeDestroy () {
    clearInterval(this.CurrentTime)
  },

  methods: {
    logout () {
      firebase.auth().signOut()
      .then( () =>  {
        this.$router.push("/login")
      })
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>