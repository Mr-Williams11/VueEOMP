<template>
  <div>
    <ul>
      <li v-for="testimonial in testimonials" :key="testimonial.id">
        <h3>{{ testimonial.name }}</h3>
        <p>{{ testimonial.Description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    testimonials() {
      return this.$store.state.Testimonials;
    },
  },
};
</script>

<style scoped>

</style>
