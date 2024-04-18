<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'AppHeader',
    data() {
      return {
        store
      };
    }
}
</script>

<template>
    <div class="header">
        <div>
            <h1>BOOLFLIX</h1>
        </div>
        <div class="input">
            <input type="text" v-model="store.searchText" placeholder="cerca film o serie TV">
            <button @click="$emit('searchPerformed')">🔍</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.header{
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
}
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