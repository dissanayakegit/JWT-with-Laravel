<template>
  <div>
      <Navbar />
      <router-view></router-view>
  </div>
</template>

<script>
name : 'App.vue'
import Navbar from './components/NavBar';


export default {
    components : {
        Navbar
    }

}
</script>

<style>

</style>