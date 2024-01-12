<template>
  <h3>Click me</h3>
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
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  opacity: 0;
  transition: opacity 4s ease;
}

.fade-in {
  opacity: 1;
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
  background: linear-gradient(skyblue, blue);
  box-shadow: 10px 10px 5px lightblue;
  width: 500px;
  height: auto;
  filter: blur(20px);
  transform: translateX(-20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.resume-task:hover {
  opacity: 1;
  transform: translateX(0);
  filter: blur(0px);
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
