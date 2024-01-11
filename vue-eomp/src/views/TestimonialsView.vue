<template>
  <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button v-for="(testimonial, index) in testimonials" :key="index" type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index" :class="{ active: index === 0 }" aria-label="Slide {{ index + 1 }}"></button>
    </div>
    <transition-group name="slide" tag="div" class="carousel-inner">
      <div v-for="(testimonial, index) in testimonials" :key="index" :class="{ 'carousel-item': true, active: index === currentIndex }">
        <div class="card">
          <img :src="testimonial.img" alt="" class="project-img">
          <p class="heading">{{ testimonial.name }}</p>
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
  justify-content: flex-end;
  left: 32%;
  top: 0;
  width: 500px;
  padding: 12px;
  height: 400px;
  border-radius: 8px;
  border: 2px solid white;
  box-shadow: 0 10px 30px white;
}

.project-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  left: 55%;
  top: 0;
}

.heading {
  position: relative;
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 700;
  color: black;
  display: flex;
}

.description {
  line-height: 1.7;
  margin-bottom: 50px;
  font-size: 14px;
  color: black;
  position: relative;
}

.carousel {
  position: fixed;
  height: 80vh;
  top: 12%;
  width: 100%;
}

.carousel-inner {
  position: relative;
  top: 15%;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}

</style>
