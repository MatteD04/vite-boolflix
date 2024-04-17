<script>
import SearchBar from './SearchBar.vue';

export default {
    name: 'AppHeader',
    components: { 
        SearchBar 
    },
    methods: {
      searchMovie(searchText) {
        this.$emit('search', searchText);
      }
    }
}
</script>

<template>
    <div class="header">
        <div>
            <h1>BOOLFLIX</h1>
        </div>
        <SearchBar @search="searchMovie"></SearchBar>
    </div>
</template>

<style scoped lang="scss">
.header{
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
}
</style>