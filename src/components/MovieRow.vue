<template>
    <tr>
      <td>{{ movie.id }}</td>
      <td>{{ movie.title }}</td>
      <td>{{ movie.director }}</td>
      <td>{{ movie.imageUrl }}</td>
      <td>{{ movie.duration }}</td>
      <td>{{ movie.releaseDate }}</td>
      <td>{{ movie.genre }}</td>
    </tr>
</template>

<script>
export default {
    name: 'MovieRow',
    props: {
      movie: {
        type: Object,
        required: true
      }
    }
}
</script>