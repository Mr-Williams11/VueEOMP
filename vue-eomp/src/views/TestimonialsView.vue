<template>
  <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button v-for="(testimonial, index) in testimonials" :key="index" type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index" :class="{ active: index === 0 }" aria-label="Slide {{ index + 1 }}"></button>
    </div>
    <transition-group name="slide" tag="div" class="carousel-inner">
      <div v-for="(testimonial, index) in testimonials" :key="index" :class="{ 'carousel-item': true, active: index === currentIndex }">
        <div class="card">
          <p class="heading">{{ testimonial.name }}</p>
          <img :src="testimonial.img" alt="" class="project-img">
          <p class="description">{{ testimonial.Description }}</p>
        </div>
      </div>
    </transition-group>
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
    testimonials() {
      return this.$store.state.Testimonials;
    },
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
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

.card p:not(.heading) {
  font-size: 12px; /* Reduced font size */
  color: #fff;
}

.card p:last-child {
  position: relative;
  color: black;
  font-weight: 600;
}

.carousel {
  position: relative;
  height: 70vh; /* Reduced height */
  top: 10%; /* Adjusted top */
  width: 100%; /* Adjusted width */
  left: 700px;/* Positioned on the right-hand side */
}

.carousel-inner {
  position: relative;
  top: 10%;
  height: 500px; /* Reduced height */
}

@media (max-width: 300px) {
  .card {
    width: 150px; /* Further reduced width */
    height: max-content;
    left: 17%; /* Adjusted left */
  }

  .project-img {
    width: 100px; /* Further reduced width */
    height: 100px; /* Further reduced height */
    position: relative;
    left: 5%; /* Adjusted left */
  }

  .heading {
    font-size: 18px; /* Reduced font size */
  }

  .description {
    font-size: 12px; /* Reduced font size */
  }
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}
</style>
