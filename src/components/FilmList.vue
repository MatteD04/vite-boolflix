<script>
export default {
    name: 'FilmList',
    props: {
      movieInfo: Object
    }
}
</script>

<template>
    <div class="single-film">
        <ul>
            <li>
                <p><strong>Titolo:</strong> {{ movieInfo.title }}</p>
                <p><strong>Titolo originale:</strong>{{ movieInfo.original_title }}</p>
                <p><strong>Lingua:</strong> {{ movieInfo.original_language }}</p>
                <p><strong>Voto:</strong> {{ movieInfo.vote_average }}</p>
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
    }
}
</style>