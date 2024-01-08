<template>
  <div>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <h3>{{ project.taskName }}</h3>
        <p><a :href="project.github" target="_blank">{{ project.github }}</a></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.Projects;
    },
  },
};
</script>

<style scoped>

</style>
