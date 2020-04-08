import movieService from '../services/movieService'

export default {
    async getAllMovies({ commit }){
        const movies = await movieService.getAll()
        commit('setMovies', movies)
    },
    setSearchLetters({ commit }, searchLetters){
        commit('serSearchLetters', searchLetters)
    },
}