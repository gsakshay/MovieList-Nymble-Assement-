import express, {Request,Response} from "express"
import { genres, movies } from "./db"
import {Movie, Genre} from "./types"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())
const PORT = 5000

/**
 * Return movies that match the 'search term' with movie 'title'.
 * If search term is not provided, return all movies.
 */
app.get('/movies', (req, resp) => {
    // console.log("reached movies")
    // req.params.search
    console.log("Its me")
    resp.send(movies)

})

app.get('/movies/:search', (req, resp) => {
    // console.log("reached movies")
    // req.params.search
    const searchTerm: string = req.params.search
    console.log(req.params)
    console.log(searchTerm, "search")
    const selectedMovies = movies.filter((movie: Movie)=>movie.title.includes(searchTerm))
    console.log(selectedMovies, "movies")

    if(searchTerm){
        resp.send(selectedMovies)
    }else{
        resp.send(movies)
    }
})

/**
 * Return all genres.
 */
app.get('/genres', (req, resp) => {
    // console.log(" I am coming here")
    resp.send(genres)
})

/**
 * Return movies that match the provided ID.
 */
app.get('/movies/:id', (req, resp) => {
    // const id = Number(req.params.id)
    // TODO Return the movie
    const movieId = req.params.id
    const filteredMovies:Movie[] = movies.filter((movie)=>movie.id === Number(movieId))
    resp.send(filteredMovies)
})

/**
 * Return genre that match the provided ID.
 */
app.get('/genres/:id', (req, resp) => {
    // TODO
    const genreId = Number(req.params.id)
    console.log(genreId)
    const filteredGenres:Genre[] = genres.filter((genre)=>genre.id === genreId)
    resp.send(filteredGenres)
})

/**
 * Add rating to a movie.
 * For simplicity of the task, the array acts as a DB in runtime.
 */
app.post('/movies/:id/ratings', (req, resp) => {
    // TODO
    // req.body.ratingVal
    const movieId = Number(req.params.id)
    const rating = req.body.ratingVal;
    const selectedMovie: Movie = (movies.filter(movie=>movie.id = movieId))[0]
    console.log(selectedMovie, "See selected movie here")
    if(selectedMovie && rating){
        selectedMovie.vote_average = ((selectedMovie.vote_average * selectedMovie.vote_count) + rating) / (selectedMovie.vote_count + 1)
        selectedMovie.vote_count+= 1
    }
    resp.send(selectedMovie)
})

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})