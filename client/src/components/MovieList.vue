<template>
  <v-card
    max-width="450"
    class="mx-auto"
  >
    <v-toolbar
      color="cyan"
      dark
    >

      <v-toolbar-title>Movies</v-toolbar-title>

      <v-spacer></v-spacer>

      

        <input type="text" v-model="search" placeholder="Search the movie here">  
    </v-toolbar>

    <v-list three-line>
      <template v-for="(movie) in movies">
        <v-list-movie
          :key="movie.title"
        >
          <!-- <v-list-movie-avatar>
            <v-img :src="movie.avatar"></v-img>
          </v-list-movie-avatar> -->
        <router-link :to="{name: 'Details', params: { id: movie.id }}">

          <v-list-movie-content>
            <v-list-movie-title v-html="movie.title"></v-list-movie-title> <br>
            <v-list-movie-subtitle v-html="movie.release_date"></v-list-movie-subtitle>
          </v-list-movie-content>
        </router-link>


        </v-list-movie>

      </template>
    </v-list>
  </v-card>
</template>

<script>
// interface Movie {
//     id: number
//     title: string
//     release_date: string
//     popularity: number
//     overview: string
//     vote_average: number
//     vote_count: number
//     adult: boolean
//     genre_ids: number[]
// }

// interface Genre {
//     id: number
//     name: string
// }
  export default {
    data: () => ({
      search: "",
      movies: [],
    }),
    methods:{
    
    },

    computed:{
      onSearch(){

      }
    },

    mounted() {
    fetch('http://localhost:5000/movies')
      .then(res => res.json())
      .then(data => this.movies = data)
      .catch(err => console.log(err.message))
    }
  }
</script>