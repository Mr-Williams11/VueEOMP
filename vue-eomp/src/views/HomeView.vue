<template>
  <div class="portfolio">
    <section class="header-section">
      <img src="https://iili.io/J76YW8J.png" alt="Profile Image" class="profile-image" />
      <div class="text-container">
        <h2 class="intro">{{ intro }}</h2>
        <h1 class="name">{{ name }}</h1>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    intro() {
      return this.$store.state.Intro;
    },
    name() {
      return this.$store.state.Name;
    },
  },
  mounted() {
    this.$store.dispatch('fetchData');
  },
};
</script>

<style scoped>
body {
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.portfolio {
  width: 100%;
  padding: 20px;
}

.header-section {
  position: relative;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.profile-image {
  width: 400px;
  height: 600px;
  border-radius: 40%;
  margin-right: 20px;
  animation: fadeIn 2s ease-out;
  position: relative;
}

.text-container {
  display: flex;
  flex-direction: column;
}

.header-section h2 {
  font-size: 3em;
  text-shadow: 2px 2px 2px white;
  animation: slideInLeft 2s ease-out, infinite;
  position: relative;
}

.header-section h1 {
  font-size: 5em;
  color: transparent;
  background-image: linear-gradient(white, black 75%);
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  animation: scaleIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInLeft {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
