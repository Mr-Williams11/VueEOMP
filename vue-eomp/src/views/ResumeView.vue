<template>
  <div class="resume-container">
    <div class="resume-section">
      <div v-for="item in resume" :key="item.id" class="resume-task">
        <h3 class="task-title">{{ item.taskName }}</h3>
        <ul class="task-details">
          <li v-for="key in Object.keys(item).filter(k => k !== 'id' && k !== 'taskName')" :key="key">
            <strong>{{ item[key] }}</strong>
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
.resume-container {
  width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.resume-section {
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 1000px;
  top: 20%;
  left: 18%;
  position: fixed;
}

.resume-task {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 10px 10px 5px black;
  width: 500px;
  height: auto;
}

.task-title {
  align-content: center;
  width: 100%;
  height: 50px;
  font-size: 1.5rem;
  margin-bottom: 10px;
  background-color: black;
  color: white;
  text-shadow: 5px 5px 5px lightblue;
}

.task-details {
  list-style: none;
  padding: 0;
}

.task-details li {
  margin-bottom: 10px;
  font-size: 1rem;
}
</style>
