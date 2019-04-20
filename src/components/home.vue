<template>
  <div>
    <b-container>
      <h1>{{CurrentTime}}</h1>
    </b-container>
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
}
</script>

<style scoped>
.container{
  width: 90vw;
background-color: grey;
margin: 20px;
}

.container h1{
  color: white;
  font-size: 15vw;
}
</style>