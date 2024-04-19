<script>
import { store } from '../store.js';
import ContentList from './ContentList.vue';
import TvList from './TvList.vue';

export default {
    name: 'AppMain',
    data() {
        return {
            store
        };
    },
    components: {
        ContentList,
        TvList
    },
}
</script>

<template>
    <div class="main-container">
        <h2>Vedi i film</h2>
        <div class="main-list">
            <ContentList v-for="movie in store.movies" :cardInfo="movie"></ContentList>
        </div>

        <h2>Vedi le serie TV</h2>
        <div class="main-list">
            <TvList v-for="singleSeries in store.series" :tvInfo="singleSeries"></TvList>
        </div>
    </div>
</template>

<style scoped lang="scss">

.main-container{
    color: white;
}
.main-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
h2{
    margin-top: 40px;
}
</style>