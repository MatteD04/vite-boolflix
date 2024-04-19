import {reactive} from "vue";

export const store= reactive({
    movies: [],
    series: [],
    searchText: '',
    apiKey: 'a9ff533b0dd476d2891f8e199163b7b0',
});