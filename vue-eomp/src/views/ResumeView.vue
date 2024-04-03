<template>
  <div class="resume-container" ref="resumeContainer">
    <div class="resume-section">
      <div v-for="item in resume" :key="item.id" class="resume-task" @mouseover="animateTask">
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
  mounted() {
    // Add a delay to give the transition effect
    setTimeout(() => {
      this.animateTask();
    }, 100);
  },
  methods: {
    animateTask() {
      this.$refs.resumeContainer.classList.add('fade-in');
    },
  },
};
</script>

<style scoped>
h3{
  color: black;
  font-size: 60px;
  font-weight: bold;
  text-shadow: 10px 10px 5px white;
}

.resume-container {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}

.fade-in {
  opacity: 1;
}

.resume-section {
  display: flex;
  flex-direction: row;
  gap: 20px;
  top: 20%;
  left: 18%;
  position: relative;
}

.resume-task {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  background: linear-gradient(white, grey);
  box-shadow: 5px 5px 5px lightblue;
  width: 400px;
  height: auto;
  position: relative;
  left: 300px;
}

.task-title {
  align-content: center;
  width: 100%;
  height: 30px;
  font-size: 1.2rem;
  margin-bottom: 5px;
  background-color: black;
  color: white;
  text-shadow: 3px 3px 3px lightblue;
}

.task-details li {
  margin-bottom: 5px;
  font-size: 0.8rem;
  list-style: none; 
}


@media (max-width: 300px) {
  .resume-section {
    width: auto;
    display: flex;
    flex-direction: column;
    left: 80px;
  }

  .resume-task {
    width: 200px;
    right: 5%;
  }

  .task-details li{
    font-size: 10px;
  }
}
</style>
