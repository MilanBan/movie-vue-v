<template>
  <div>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Director</th>
        <th>url</th>
        <th>Duration</th>
        <th>Release date</th>
        <th>Genre</th>
      </tr>
      </thead>
      <tbody>
        <movie-row v-for='movie in movies' :key='movie.id' :movie='movie'/>
      </tbody>
    </table>
  </div>
</template>

<script>
import MovieRow from './MovieRow'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Movies',
  components: {
    'movie-row': MovieRow
  },

  computed: {
    ...mapGetters(['movies'])
  },
  methods: {
    ...mapActions(['getAllMovies'])
  },

  beforeRouteEnter (to, from, next) {
    next(vm => vm.getAllMovies())
  }
}
</script>