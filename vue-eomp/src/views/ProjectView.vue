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
.card {
  position: relative;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  width: 500px; /* Reduced width */
  padding: 8px; /* Reduced padding */
  height: 350px; /* Reduced height */
  border-radius: 8px;
}

.project-img {
  width: 70%;
  height: 150px; /* Reduced height */
  object-fit: cover;
  border-radius: 8px;
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
  width: 100%;
  text-align: center;
  margin-top: 4px;
  color: black;
  font-size: 16px;
  text-decoration: none;
}

.github-link:hover {
  padding: 1px;
  width: 100%;
  text-align: center;
  background-color: black;
  color: lightblue;
  box-shadow: 3px 3px 3px white;
  border-radius: 4px;
}

.card p:not(.heading) {
  font-size: 12px; /* Reduced font size */
  color: #fff;
}

.card p:last-child {
  color: #e81cff;
  font-weight: 600;
}

.carousel {
  position: relative;
  height: 60vh; /* Reduced height */
  top: 10%; /* Adjusted top */
  width: 100%; /* Adjusted width */
  left: 700px;
}

.carousel-inner {
  position: relative;
  top: 10%;
  height: 300px; /* Reduced height */
}

@media (max-width: 300px) {
  .carousel {
    display: flex;
    align-content: center;
  }

  .card {
    width: 150px; /* Further reduced width */
    height: auto;
    padding: 0;
    left: 30px; /* Adjusted left */
  }

  .project-img {
    height: 120px; /* Further reduced height */
  }

  .heading {
    padding-top: 3px; /* Reduced padding */
    font-size: 10px; /* Further reduced font size */
  }

  .github-link {
    font-size: 12px; /* Further reduced font size */
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
