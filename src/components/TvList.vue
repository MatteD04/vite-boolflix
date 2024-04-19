<script>
import { store } from '../store.js';
export default {
    name: 'TvList',
    props: {
      tvInfo: Object
    },
    data() {
        return {
            store,
            flags : [
                "en",
                "es",
                "fr",
                "it"
            ],
        };
    },
    methods : {
        getImage(img) {
            return new URL(`../assets/${img}.png`, import.meta.url).href;
        },
        getPosterImage() {
            return "https://image.tmdb.org/t/p/w300";
        }
    }
}
</script>

<template>
    <div class="single-film">
        <div class="poster-img">
            <img :src="getPosterImage() + tvInfo.poster_path">
        </div>
        <ul>
            <li>
                <!-- titolo -->
                <p><strong>Titolo:</strong> {{ tvInfo.name }}</p>
                <p><strong>Titolo originale:</strong>{{ tvInfo.original_name }}</p>

                <div class="language">
                    <p><strong>Lingua: </strong></p>
                    <div class="flags">
                        <img :src="getImage( tvInfo.original_language )">
                    </div>
                </div>
                <p><strong>Voto:</strong>{{ tvInfo.vote_average }}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.single-film{
    width: calc((100% / 4) - 20px);
    margin: 10px 0 15px 0;
    .poster-img{
        width: 100%;
    }
    li{
        list-style: none;
        p{
            line-height: 1.5;
            font-size: 18px;
        }
        .language{
            display: flex;
            align-items: center;
            .flags{
                img{
                    width: 20px;
                    margin-left: 10px
                };
            }
        }
    }
}
</style>