<template>
  <div>
    <movie-row :movies='movies'/>
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