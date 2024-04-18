<script>
import { store } from '../store.js';
import FilmList from './FilmList.vue';
import TvList from './TvList.vue';

export default {
    name: 'AppMain',
    data() {
        return {
            store
        };
    },
    components: {
        FilmList
    },
}
</script>

<template>
    <h2>Vedi i film</h2>
    <div class="main-list">
        <FilmList v-for="movie in store.movies" :movieInfo="movie"></FilmList>
    </div>

    <h2>Vedi le serie TV</h2>
    <div class="main-list">
        <TvList v-for="movie in store.series" :SerieInfo="movie"></TvList>
    </div>
</template>

<style scoped lang="scss">
.main-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>