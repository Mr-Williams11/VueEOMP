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
  max-width: 100%;
  height: auto;
  margin-right: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px lightblue;
  background: linear-gradient(white, black 40%);
}

.about-content {
  flex-grow: 1;
}

h2 {
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 10px;
  position: fixed;
  top: 5%;
  color: white;
}

p {
  font-size: 25px;
  line-height: 1.5;
  position: fixed;
  top: 15%;
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

@media (max-width: 300px) {
  h2 {
    font-size: 25px;
    position: relative;
    text-align: left;
    padding-top: 10px;
  }

  p {
    font-size: 10px;
    position: relative; 
  }
  .about-container {
  display: flex;
  flex-wrap: wrap;
  top: 10%;
  width: auto;
  height: 200px;
  border-radius: 8px;
}

.about-image{
  position: relative;
  width: auto;
  height: 150px;
}

}
</style>
