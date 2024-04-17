<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <div class="header">
        <div>
            <h1>BOOLFLIX</h1>
        </div>
        <div class="input">
            <input type="text">
            <button>🔍</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.header{
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
}
.input{
    display: flex;
    input{
        width: 200px;
        font-size: 17px;
    }
    button{
        width: 50px;
        font-size: 20px;
        background-color: white;
        cursor: pointer;
    }
}
</style>