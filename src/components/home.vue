<template>
  <div>
    <b-container>
      <h1>{{CurrentTime}}</h1>
    </b-container>
    <b-card>
    <apexchart type="line" :options="options" :series="series"></apexchart>
    </b-card>
    <b-button block variant="primary" size="lg">Clock In</b-button>
  </div>
</template>

<script>
import firebase from "firebase"
import "../firebaseconfig.js"

const moment = require('moment')

export default {
  data () {
    return {
      CurrentTime: '',
      options: {},
      series: [{name: "Time", data: [8, 7, 8, 9, 6]}]
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
border-radius: 10px;
text-align: center;
}

.container h1{
  color: white;
  font-size: 14vw;
}

</style>