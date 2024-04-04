<template>
  <h2>Testimonials:</h2>
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
h2{
  position: relative;
  -webkit-text-stroke: 4px black;
  left: 0px;
  transform: rotate(-40deg);
  font-size: 6em;
  top: 165px;
}
.card {
  position: relative;
  background: linear-gradient(white, grey);
  display: flex;
  flex-direction: column;
  width: 500px; /* Reduced width */
  padding: 8px; /* Reduced padding */
  height: 450px; /* Reduced height */
  border-radius: 8px;
}

.project-img {
  width: 50%;
  height: 200px; /* Reduced height */
  object-fit: cover;
  position: relative;
  left: 25%;
  border: 2px solid black;
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
  font-size: 15px; /* Reduced font size */
  color: #fff;
  position: relative;
  top: 50px;
  left: 10px;
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
  top: 0%;
  height: 500px;
  left: 9%;
}

@media screen and (min-width: 480px) and (max-width: 720px) {
  h2{
  font-size: 2.5em;
  top: 50px;
  right: 200px;
  -webkit-text-stroke: 2px black;
  margin-bottom: 30px;
  }

  .carousel {
    height: 60vh; /* Further reduced height */
    left: 150px;
    width: 450px;
    top: 20px;
  }

  .card {
    width: 300px;
    left: 40px;
    height: 280px;
  }

  .project-img {
    width: 50%; /* Further reduced width */
    height: 100px; /* Further reduced height */
  }

  .heading {
    font-size: 16px; /* Further reduced font size */
  }

  .card p:not(.heading) {
    font-size: 10px;
    width: 270px;
  }
}

/* Media query for 320px */
@media screen and (min-width: 300px) and (max-width: 460px) {
  h2{
  font-size: 2.5em;
  top: 0px;
  right: 200px;
  transform: rotate(0deg);
  -webkit-text-stroke: 2px black;
  margin-bottom: 30px;
  }

  .carousel {
    height: 55vh; /* Further reduced height */
    left: 0px;
    top: 50px;
    width: 270px;
  }

  .card {
    width: 210px;
    left: 5px;
    height: 250px;
  }

  .project-img {
    width: 50%; /* Further reduced width */
    height: 100px;
    border-radius: 50%; /* Further reduced height */
  }

  .heading {
    font-size: 16px; /* Further reduced font size */
  }

  .card p:not(.heading) {
    width: 185px;
    font-size: 7px;
  }
}


.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}
</style>
