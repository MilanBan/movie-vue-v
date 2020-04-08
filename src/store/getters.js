export default {
    movies: state => state.movies,
    searchLetters: state => state.searchLetters,
    searchedMovies: state => {
        const movies = state.movies
        return (searchParam) => {
            if(Array.isArray(movies)){
                return movies.filter(movie => movie.title.toLowerCase().includes(searchParam.toLowerCase()))
            }
        }
    },
}