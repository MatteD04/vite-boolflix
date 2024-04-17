<script>
import axios from 'axios';

export default {
    name: 'SearchBar',
    data() {
      return {
        searchText: ''
      };
    },
    methods: {
        searchMovie() {
            const queryParams = {
                api_key: 'a9ff533b0dd476d2891f8e199163b7b0',
                query: this.searchText
            };
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: queryParams
            })
            .then(response => {
                this.$emit('search', response.data.results);
            });
      }
    }
}
</script>

<template>
    <div class="input">
            <input type="text" v-model="searchText" placeholder="cerca film o serie TV">
            <button @click="searchMovie">🔍</button>
        </div>
</template>

<style scoped lang="scss">
.input{
    display: flex;
    input{
        width: 200px;
        font-size: 16px;
        padding: 0 10px;
    }
    button{
        width: 50px;
        font-size: 20px;
        background-color: white;
        cursor: pointer;
    }
}
</style>