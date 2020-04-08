<template>
 <div>
  <form @submit.prevent="onSubmit">
    <div class="form-group">
      <input v-model="title" type="text" name="title" placeholder="title" class="form-control">
    </div>
    <div class="form-group">
      <input v-model="director"  type="text" name="director" placeholder="director" class="form-control">
    </div>
    <div class="form-group">
      <input v-model="imageUrl"  type="url" name="imageUrl" placeholder="imageUrl" class="form-control">
    </div>
    <div class="form-group">
      <input v-model="duration"  type="number" name="duration" placeholder="duration" class="form-control">
    </div>
    <div class="form-group">
      <input v-model="releaseDate"  type="date" name="releaseDate" placeholder="releaseDate" class="form-control">
    </div>
    <div class="form-group">
      <input v-model="genre"  type="text" name="genre" placeholder="genre" class="form-control">
    </div>  
      <button type="submit" class="btn btn-success">Submit</button>
  </form>
 </div>
</template>

<script>
import movieService from '../services/movieService'
export default {
    data() {
        return {
            movie:'',
            title: '',
            director: '',
            imageUrl: '',
            duration: '',
            releaseDate: '',
            genre: '',
        }
    },
    methods: {
        async onSubmit(){
            let body = {
                title: this.title,
                director: this.director,
                imageUrl: this.imageUrl,
                duration: this.duration,
                releaseDate: this.releaseDate,
                genre: this.genre,
            }
            await movieService.createMovie(body)
            body = {}
            this.$router.push('/');
        }
    },
}
</script>

<style>

</style>