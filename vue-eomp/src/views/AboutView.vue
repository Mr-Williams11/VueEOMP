<template>
    <div>
      <h2>{{ info }}</h2>
      <p>{{ text1 }}</p>
    </div>
</template>

<script>
export default {
    computed: {
      info() {
      return this.$store.state.Info;
    },
      text1() {
      return this.$store.state.Text1;
    },
},
    mounted() {
      this.$store.dispatch('fetchData');
    },
};
</script>

<style>

</style>
