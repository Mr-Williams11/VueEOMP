<template>
  <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button
        v-for="(project, index) in projects" :key="index" type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index" :class="{ active: index === currentIndex }" aria-label="Slide {{ index + 1 }}"></button>
    </div>
    <transition name="fade" mode="out-in">
      <div class="carousel-inner" :key="currentIndex">
        <div v-for="(project, index) in projects" :key="index" :class="{ 'carousel-item': true, active: index === currentIndex }">
          <div class="card">
          <img :src="project.img" alt="" class="project-img">
          <p class="heading">{{ project.taskName }}</p>
          <a :href="project.github" target="_blank" class="github-link"><i class="fa-brands fa-github"></i> - GitHub</a>
          <a :href="project.netlify" target="_blank" class="github-link">Netlify - <i class="fa-solid fa-globe"></i></a>
        </div>
        </div>
      </div>
    </transition>
    <button class="carousel-control-prev" @click="prevSlide" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" @click="nextSlide" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    projects() {
      return this.$store.state.Projects;
    },
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    },
  },
};
</script>

<style scoped>
.card {
  position: relative;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  left: 32%;
  width: 500px;
  padding: 12px;
  height: 340px;
  border-radius: 8px;
}

.project-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  position: relative;
  top: 10%;
  filter: blur(5px);
}

.card::before {
  content: "";
  position: absolute;
  inset: 0;
  left: -5px;
  height: 330px;
  margin: auto;
  width: calc(100% + 10px);
  border-radius: 10px;
  background: linear-gradient(-45deg, white 0%, black 100%);
  z-index: -10;
  pointer-events: none;
  transition: all 6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card::after {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;
  background-color: white;
  transform:scale(0.95);
}

.heading {
  font-size: 30px;
  text-transform: capitalize;
  font-weight: 700;
  position: relative;
  width: 100%;
  text-align: center;
  /* background-color: white; */
  color: white;
  top: -30%;
}

.github-link {
  position: relative;
  width: 136px;
  text-align: left;
  margin-top: 8px;
  color: black;
  font-size: 25px;
  text-decoration: none;
}

.github-link:hover{
  padding: 2px;
  width: fit-content;
  background-color: black;
  color: lightblue;
  box-shadow: 5px 5px 5px white;
  border-radius: 8px;
}
.card p:not(.heading) {
  font-size: 14px;
  color: #fff;
}

.card p:last-child {
  color: #e81cff;
  font-weight: 600;
}

.card:hover::after {
  filter: blur(30px);
}

.card:hover::before {
  transform: translateY(50px);
}

.carousel{
  position: fixed;
  height: 70vh;
  top: 15%;
  width: 100%;
}

.carousel-inner{
  position: relative;
  top: 10%;
  height: 500px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
