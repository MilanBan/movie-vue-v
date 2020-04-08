<template>
 <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <a class="navbar-brand" href="/">MOVIES</a>
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <ul class="navbar-nav mr-auto">
     <li class="nav-item">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
     </li>
     <li class="nav-item">
        <a class="nav-link" href="/add-movie">Add Movie</a>
     </li>
     </ul>
     <form class="form-inline my-2 my-lg-0">
      <input @input="onSearch" v-model="searchLetters" 
      class="form-control mr-sm-2" type="text" placeholder="Search" 
      aria-label="Search">
     </form>
   </div>
  </nav>
 </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
   data() {
      return {
         searchLetters: "",
      }
   },
   methods: {
      ...mapActions(['setSearchLetters']),
      onSearch(event){
         this.setSearchLetters(event.target.value)
      }
   },
   computed: {
      ...mapGetters(['searchedMovies'])
   }
}
</script>