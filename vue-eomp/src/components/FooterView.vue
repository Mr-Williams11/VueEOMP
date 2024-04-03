<template>
            <footer>&copy Joel Williams <span>{{ currYear }}</span></footer>
</template>
<script>
    export default {
        data() {
            return {
                currYear: new Date().getFullYear()
            }
        }
    }
</script>
<style>
footer {
    color: white;
    padding: 10px;
    text-align: center;
    width: 100%;
    position: fixed;
    left: 0px;
}

footer span {
    font-weight: bold;
}
</style>