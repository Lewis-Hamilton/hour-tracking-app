<template>
  <div>
      <span>{{ new Date() | moment("h:mm:ss a") }}</span>
      <vue-clock />
  </div>
</template>

<script>
import VueClock from '@dangvanthanh/vue-clock'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    VueClock
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>