<template>
  <div>
    <ul>
      <li v-for="item in resume" :key="item.id">
        <h3>{{ item.taskName }}</h3>
        <p>GitHub: <a :href="item.github" target="_blank">{{ item.github }}</a></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    resume() {
      return this.$store.state.Resume;
    },
  },
};
</script>

<style scoped>

</style>
