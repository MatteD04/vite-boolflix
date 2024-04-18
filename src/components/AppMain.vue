<script>
import { store } from '../store.js';
import FilmList from './FilmList.vue';

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
    <div class="main-list">
        <FilmList v-for="movie in store.movies" :movieInfo="movie"></FilmList>
    </div>
</template>

<style scoped lang="scss">
.main-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>