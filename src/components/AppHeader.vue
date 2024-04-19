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
    <section class="head-container">
        <div class="header">
            <div class="title">
                <h1>BOOLFLIX</h1>
            </div>
            <div class="input">
                <input type="text" v-model="store.searchText" placeholder="cerca film o serie TV">
                <button @click="$emit('searchPerformed')">🔍</button>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.header{
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    .title{
        color: red;
        h1{
            font-size: 30px;
        }
    }
}
.input{
    display: flex;
    input{
        width: 200px;
        font-size: 16px;
        padding: 0 10px;
        background-color: white;
    }
    button{
        width: 50px;
        font-size: 20px;
        background-color: white;
        cursor: pointer;
        border: 1px solid black;
    }
}
</style>