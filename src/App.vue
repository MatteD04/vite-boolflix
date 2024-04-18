<script>
import { store } from './store.js';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    };
  },
  methods: {
    searchMovie() {
      const queryParams = {
        api_key: store.apiKey,
        query: store.searchText
      };
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: queryParams
      })
      .then(response => {
        store.movies = response.data.results;
      });

      axios.get('https://api.themoviedb.org/3/search/tv', {
        params: queryParams
      })
      .then(response => {
        store.series = response.data.results;
      });
    },
  }
}
</script>

<template>
  <div class="container">
    <AppHeader @searchPerformed="searchMovie"></AppHeader>
    <AppMain></AppMain>
  </div>
</template>

<style lang="scss">
@use './style/generic';
</style>