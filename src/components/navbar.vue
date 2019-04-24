<template>
  <div>
    <b-navbar class="ml-auto" fixed="bottom">
      <router-link to="/">
      <div style="padding-right: 30px; padding-left: 77px; padding-top: 10px;">
        <home-icon/>
        </div>
      </router-link>

      <router-link to="/">
      <div style="padding-right: 40px; padding-left: 40px; padding-top: 10px;">
        <Finance-icon/>
        </div>
      </router-link>

      <router-link to="/settings">
      <div style="padding-left: 30px; padding-top: 10px;">
        <Settings-icon />
        </div>
      </router-link>
    </b-navbar>
</div>
</template>

<script>
import HomeIcon from 'vue-material-design-icons/Home.vue'
import FinanceIcon from 'vue-material-design-icons/Finance.vue'
import SettingsIcon from 'vue-material-design-icons/Settings.vue'

export default {
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

    font-size: 35px;
    color: white;
  }

  .finance-icon{
    font-size: 35px;
    color: white;
  }

  .settings-icon{

    font-size: 35px;
    color: white;
}
</style>