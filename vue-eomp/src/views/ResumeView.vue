<template>
  <h2>Experience:</h2>
  <div class="resume-container" ref="resumeContainer">
    <div class="resume-section">
      <div v-for="item in resume" :key="item.id" class="resume-task" @mouseover="animateTask">
        <h3 class="task-title">{{ item.taskName }}</h3>
        <ul class="task-details">
          <li v-for="key in Object.keys(item).filter(k => k !== 'id' && k !== 'taskName')" :key="key">
            {{ item[key] }}
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
h2{
  position: relative;
  -webkit-text-stroke: 4px black;
  left:0px;
  transform: rotate(-40deg);
  font-size: 6em;
  top: 0px;
}

h3{
  color: black;
  font-size: 60px;
  font-weight: bold;
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
  box-shadow: 5px 5px 5px white;
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
}

.task-details li {
  margin-bottom: 5px;
  font-size: 0.8rem;
  list-style: none;
  text-align: left;
}


@media screen and (min-width: 480px) and (max-width: 720px) {
h2{
  font-size: 3em;
  top: 27px;
  -webkit-text-stroke: 2px black;
}

  .resume-section {
    margin-top: 85px;
    left: 120px;
  }

  .resume-task {
    width: 230px;
    left: 0px;
  }

  .task-title {
    font-size: 15px;
  }

  .task-details li {
    font-size: 8px;
    text-align: left;
  }
}

/* Media query for 320px */
@media screen and (min-width: 300px) and (max-width: 460px) {
h2{
  font-size: 2em;
  top: 0px;
  transform: rotate(0deg);
  -webkit-text-stroke: 2px black;
}

  .resume-section {
    left: 0;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .resume-task {
    width: 230px;
    left: 0px;
  }

  .task-title {
    font-size: 15px;
  }

  .task-details li {
    font-size: 7px;
    text-align: left;
  }
}

.fade-in {
  opacity: 1;
}
</style>
