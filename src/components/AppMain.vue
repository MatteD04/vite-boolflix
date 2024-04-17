<script>
import FilmList from './FilmList.vue';

export default {
    name: 'AppMain',
    components: {
        FilmList
    },
}
</script>

<template>
    <div class="main-list">
        <FilmList></FilmList>
    </div>
</template>

<style scoped lang="scss">
.main-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>