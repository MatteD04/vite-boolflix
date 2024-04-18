<script>
import { store } from '../store.js';
export default {
    name: 'TvListList',
    props: {
        SerieInfo: Object
    },
    data() {
        return {
            store
        };
    },
    methods : {
        getImage(img) {
            return new URL(`../assets/${img}.png`, import.meta.url).href;
        },
    }
}
</script>

<template>
    <div class="single-film"> 
        <ul>
            <li>
                <p><strong>Titolo:</strong> {{ SerieInfo.name }}</p>
                <p><strong>Titolo originale:</strong>{{ SerieInfo.original_name }}</p>
                <div class="language">
                    <p><strong>Lingua: </strong></p>
                    <div><img :src="getImage( SerieInfo.original_language )"></div>
                </div>
                <p><strong>Voto:</strong>{{ SerieInfo.vote_average }}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.single-film{
    width: calc((100% / 4) - 20px);
    margin: 30px 0 0 0;
    border: 1px solid black;
    li{
        list-style: none;
        p{
            line-height: 1.5;
            font-size: 18px;
        }
        .language{
            display: flex;
            align-items: center;
            img{
                width: 20px;
                margin-left: 10px;
            }
        }
    }
}
</style>