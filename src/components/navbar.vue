<template>
<div>
    <b-navbar class="ml-auto" fixed="bottom">
        <router-link to="/">
            <home-icon />
        </router-link>

        <router-link to="/">
            <Finance-icon />
        </router-link>

        <router-link to="/">
            <Settings-icon />
        </router-link>
    </b-navbar>
</div>
</template>

<script>
import HomeIcon from 'vue-material-design-icons/Home.vue'
import FinanceIcon from 'vue-material-design-icons/Finance.vue'
import SettingsIcon from 'vue-material-design-icons/Settings.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    HomeIcon,
    FinanceIcon,
    SettingsIcon
  }
}
</script>

<style scoped>
</style>