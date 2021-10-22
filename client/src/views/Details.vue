<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >

    <v-card-title>
      {{movie.title}}
    </v-card-title>

    <v-card-subtitle>
      {{movie.description}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Add a rating
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          details
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
  export default {
    
    props: ['id'],
    data: () => ({
      show: true,
      movie: {}
    }),
    mounted() {
      fetch(`http://localhost:5000/movies/${this.id}`)
      .then(res => res.json())
      .then(data => this.movie = data)
      .catch(err => console.log(err.message))
          console.log(this.id, this.movies)
    }
  }
</script>