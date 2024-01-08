<template>
    <div>
      <h2>{{ info }}</h2>
    </div>
</template>

<script>
  export default {
    computed: {
      info() {
        return this.$store.state.About;
      },
    },
    mounted() {
      this.$store.dispatch('fetchData');
    },
  };
</script>

<style>

</style>
