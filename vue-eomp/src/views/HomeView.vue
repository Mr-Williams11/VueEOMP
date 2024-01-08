<template>
  <div class="portfolio">
    <section class="header-section">
      <h1>{{ intro }}</h1>
    </section>
  </div>
  
</template>

<script>
export default {
  computed: {
    intro() {
      return this.$store.state.Intro;
    },
  },
  mounted() {
    this.$store.dispatch('fetchData');
  },
};
</script>

<style scoped>

body{
  height: 100vh;
  overflow: hidden;
  width: 100%;
}

.portfolio {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.header-section h1 {
  font-size: 8em;
  left: 5%;
  position: fixed;
  top: 35%;
  color: transparent;
  width: max-content;
  background-image: linear-gradient(black, lightblue 75%);
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  animation: animateText 6s linear infinite;
}

@keyframes animateText{
  0%,95%,100%{
      background-position: -1400px 0;
  }
  65%,85%{
      background-position: 0 0;
  }
}
</style>
