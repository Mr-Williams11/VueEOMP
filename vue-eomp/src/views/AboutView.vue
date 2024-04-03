<template>
  <div class="about-container">
    <img src="https://iili.io/J76YW8J.png" alt="About Image" class="about-image">
    <div class="about-content">
      <h2>{{ info }}</h2>
      <p>{{ text1 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    info() {
      return this.$store.state.Info;
    },
    text1() {
      return this.$store.state.Text1;
    },
  },
  mounted() {
    this.$store.dispatch('fetchData');
  },
};
</script>

<style>
.about-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
}

.about-image {
  width: 400px;
  height: 600px;
  margin-right: 20px;
  animation: fadeIn 2s ease-out;
  position: relative;
  bottom: 30px;
  background: linear-gradient(-40deg, white 36%, black 35%);
}

h2 {
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 10px;
  left: 15%;
  position: relative;
  color: white;
  text-align: left;
}

p {
  font-size: 25px;
  line-height: 1.5;
  position: relative;
  left: 15%;
  text-align: left;
  color: white;
}

.about-container {
  opacity: 0;
  transform: translateY(20px);
  animation: fade-in-up 2s ease-out forwards;
}

@keyframes fade-in-up {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 720px) {
  .about-image {
    width: 300px;
    height: 450px;
  }

  h2 {
    font-size: 40px;
  }

  p {
    font-size: 20px;
  }
}

@media screen and (max-width: 320px) {
.about-container{
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

  .about-image {
    width: auto;
    height: 200px;
    position: relative;
  }

  h2 {
    font-size: 20px;
  }

  p {
    font-size: 10px;
    width: 200px;
  }
}
</style>
