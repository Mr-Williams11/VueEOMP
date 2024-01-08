<template>
    <div>
      <h1>{{ information }}</h1>
    </div>
</template>

<script>
export default {
  computed: {
    information() {
      return this.$store.state.Contact;
    },
  },
  mounted() {
      this.$store.dispatch('fetchData');
    },
};
</script>