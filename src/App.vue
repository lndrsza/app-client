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
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap')

  :root
    --primary: #2196F3
    --primary-alt: #1565C0
    --sidebar-back: #FFF
    --sidebar-back-alt: #dde0e5
    --page-back: #000000
    --text: #707070
    --sidebar-width: 250px

    .v-application
      font-family: 'Open Sans', Helvetica, serif
</style>