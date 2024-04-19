<script>
import { store } from '../store.js';
export default {
    name: 'ContentList',
    props: {
      cardInfo: Object
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
            <img :src="getPosterImage() + cardInfo.poster_path">
        </div>
        <ul>
            <li>
                <!-- titolo -->
                <p><strong>Titolo:</strong> {{ cardInfo.title }}</p>
                <p><strong>Titolo originale:</strong>{{ cardInfo.original_title }}</p>

                <div class="language">
                    <p><strong>Lingua: </strong></p>
                    <div class="flags">
                        <img :src="getImage( cardInfo.original_language )">
                    </div>
                </div>
                <p><strong>Voto:</strong>{{ cardInfo.vote_average }}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.single-film{
    width: calc((100% / 4) - 20px);
    margin: 10px 0 15px 0;
    .poster-img{
        img:hover {
            display: none;
            border: 1px solid white;
        }
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