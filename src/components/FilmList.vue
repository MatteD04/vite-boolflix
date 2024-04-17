<script>
export default {
    name: 'FilmList',
    props: {
      movies: {
        type: Array
      }
    }
}
</script>

<template>
    <div class="single-film">
        <ul>
            <li v-for="movie in movies">
                <h2>Titolo: {{ movie.title }}</h2>
                <h3>Titolo originale: {{ movie.original_title }}</h3>
                <h3>Lingua: {{ movie.original_language }}</h3>
                <h3>Voto: {{ movie.vote_average }}</h3>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.single-film{
    width: calc((100% / 4) - 20px);
    margin: 30px 0 0 0;
    border: 1px solid black;
    li{
        list-style: none;
    }
}
</style>