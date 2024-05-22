<template>
  <h2>Projects:</h2>
  <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button
        v-for="(project, index) in projects" :key="index" type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index" :class="{ active: index === currentIndex }" aria-label="Slide {{ index + 1 }}"></button>
    </div>
    <transition name="fade" mode="out-in">
      <div class="carousel-inner" :key="currentIndex">
        <div v-for="(project, index) in projects" :key="index" :class="{ 'carousel-item': true, active: index === currentIndex }">
          <div class="card">
            <p class="heading">{{ project.taskName }}</p>
          <img :src="project.img" alt="" class="project-img">
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
h2{
  position: relative;
  -webkit-text-stroke: 4px black;
  left: 70px;
  transform: rotate(-40deg);
  font-size: 6em;
  top: 80px;
}

.card {
  position: relative;
  background: linear-gradient(white, grey);
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 8px; /* Reduced padding */
  height: 300px;
  left: 80px; /* Reduced height */
}

.project-img {
  width: 70%;
  height: 150px; /* Reduced height */
  object-fit: cover;
  position: relative;
  left: 70px;
}

.heading {
  font-size: 20px; /* Reduced font size */
  text-transform: capitalize;
  font-weight: 700;
  position: relative;
  width: 100%;
  text-align: left;
  color: black;
}

.carousel-control-prev,
.carousel-control-next{
  color: black;
}

.github-link {
  position: relative;
  text-align: left;
  margin-top: 4px;
  color: black;
  font-size: 16px;
  text-decoration: none;
  padding: 2px;
}

.github-link:hover {
  background-color: black;
  width: 90px;
  color: white;
  border: 2px solid white;
  box-shadow: 10px 10px 10px white;
  text-align: center;
  transition: 1s;
}

.card p:not(.heading) {
  font-size: 12px;
  color: #fff;
}

.card p:last-child {
  color: #e81cff;
  font-weight: 600;
}

.carousel {
  position: relative;
  height: 50vh;
  width: 130%;
  left: 600px;
}

.carousel-inner {
  position: relative;
  height: 350px;
}

@media screen and (min-width: 480px) and (max-width: 720px) {
  h2{
  font-size: 4em;
  top: 15px;
  margin-bottom: 80px;
  -webkit-text-stroke: 2px black;
}

  .carousel {
    height: 60vh;
    left: 50px;
    width: 570px;
  }

  .card {
    width: 350px;
    height: 250px;
    top: 40px;
    left: 120px;
  }

  .project-img {
    width: 80%;
    left: 10%;
  }

  .heading {
    font-size: 14px;
  }

  .github-link {
    font-size: 10px;
  }
}

@media screen and (min-width: 300px) and (max-width: 460px) {
  h2{
  font-size: 3em;
  top: 0px;
  transform: rotate(0deg);
  margin-bottom: 80px;
  -webkit-text-stroke: 2px black;
}

  .carousel {
    height: 40vh;
    left: 0px;
    width: 270px;
  }

  .card {
    width: 200px;
    left: 35px;
    height: 200px;
  }

  .project-img {
    width: 80%;
    left: 10%;
  }

  .heading {
    font-size: 14px;
  }

  .github-link {
    font-size: 10px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
