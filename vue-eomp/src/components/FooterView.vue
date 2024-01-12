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
footer{
    width: 100%;
}

</style>