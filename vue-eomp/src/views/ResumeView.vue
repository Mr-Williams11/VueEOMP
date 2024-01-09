<template>
  <div>
    <div class="resume-section">
      <div v-for="item in resume" :key="item.id">
        <h3>{{ item.taskName }}</h3>
        <ul>
          <li v-for="key in Object.keys(item).filter(k => k !== 'id' && k !== 'taskName')" :key="key">
            <strong>{{ key }}</strong>: {{ item[key] }}
          </li>
        </ul>
      </div>
    </div>
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
.resume-section {
  display: flex;
  justify-content: space-between;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>
