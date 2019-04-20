<template>
  <div>
    <b-navbar class="ml-auto" fixed="bottom">
      <router-link to="/">
        <home-icon/>
      </router-link>

      <router-link to="/">
        <Finance-icon/>
      </router-link>

      <router-link to="/settings">
        <Settings-icon/>
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
  .navbar{
    background-color: grey;
  }

  .home-icon{
    margin: 5px 9vw 5px 9vw;
    font-size: 35px;
    color: white;
  }

  .finance-icon{
    margin: 5px 11vw 5px 11vw;
    font-size: 35px;
    color: white;
  }

  .settings-icon{
    margin: 5px 9vw 5px 9vw;
    font-size: 35px;
    color: white;
}
</style>