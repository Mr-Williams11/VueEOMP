<template>
  <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button v-for="(testimonial, index) in testimonials" :key="index" type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index" :class="{ active: index === 0 }" aria-label="Slide {{ index + 1 }}"></button>
    </div>
    <div class="carousel-inner">
      <div v-for="(testimonial, index) in testimonials" :key="index" :class="{ 'carousel-item': true, active: index === 0 }">
        <div class="card">
          <img :src="testimonial.img" alt="" class="project-img">
          <p class="heading">{{ testimonial.name }}</p>
          <p class="description">{{ testimonial.Description }}</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    testimonials() {
      return this.$store.state.Testimonials;
    },
  },
};
</script>

<style scoped>
.card {
  position: relative;
  background-color: black;
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
  box-shadow: 0 0 30px white;
}

.project-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  left: 35%;
  bottom: 40px;
}

.heading {
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 700;
  color: white;
  display: flex;
  top: 20%;
}

.description {
  line-height: 1.7;
  margin-bottom: 50px;
  font-size: 14px;
  color: white;
  position: relative;
}

.card p:last-child {
  color: white;
  font-size: 15px;
}

.carousel {
  position: fixed;
  height: 85vh;
  top: 5%;
  width: 100%;
}

.carousel-inner {
  position: relative;
  top: 15%;
}

</style>
