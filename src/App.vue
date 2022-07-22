<template>
  <v-app>
    <Navbar></Navbar>

    <v-main>
      <v-container >
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
  name: 'App',

  components: {
    Navbar
},
};
</script>

<style lang="sass">
  :root
    --primary: #2196F3
    --primary-alt: #1565C0
    --sidebar-back: #FFF
    --sidebar-back-alt: #dde0e5
    --page-back: #000000
    --text: #707070
    --sidebar-width: 250px

</style>