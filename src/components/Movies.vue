<template>
  <div>
      <table class="table">
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Director</th>
        <th>url</th>
        <th>Duration</th>
        <th>Release date</th>
        <th>Genre</th>
      </tr>
      <tr v-for="movie in movies" :key="movie.id">
        <td>{{ movie.id }}</td>
        <td>{{ movie.title }}</td>
        <td>{{ movie.director }}</td>
        <td>{{ movie.imageUrl }}</td>
        <td>{{ movie.duration }}</td>
        <td>{{ movie.releaseDate }}</td>
        <td>{{ movie.genre }}</td>
      </tr>
    </table>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
export default {

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