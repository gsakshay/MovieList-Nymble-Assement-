<template>
  <div>
  <h1>Movies</h1>
  <MovieList />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import MovieList from "../components/MovieList.vue"

  export default Vue.extend({
    name: 'Home',

    components: {
      MovieList
    },
  })
</script>

<style scoped>  
  h1{
    text-align: center
  }
</style>