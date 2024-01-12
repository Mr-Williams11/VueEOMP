<template>
  <div class="portfolio">
    <section class="header-section">
      <img src="https://iili.io/J76YW8J.png" alt="Profile Image" class="profile-image" />
      <div class="text-container">
        <h2 class="intro">{{ intro }}</h2>
        <h1 class="name">{{ name }}</h1>
        <h2 class="intro">Im an Aspiring Developer</h2>
        <a href="https://drive.google.com/file/d/1yWkHrKmpQ1IHK0qbjOTYpcsGblHC-EF2/view?usp=drive_link" target="_blank">
    <button class="btn">Download CV</button>
  </a>
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
}
</script>

<style scoped>
@media (min-width: 1080px){

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
    font-size: 4em;
    color: black;
    text-shadow: 10px 10px 5px white;
    animation: slideInLeft 2s ease-out, infinite;
    position: relative;
  }
  
  .header-section h1 {
    font-size: 5em;
    color:  black;
    background-repeat: no-repeat;
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
  }.btn {
    padding: 10px 20px;
    font-size: 1.2em;
    background-color: #3498db;
    color: black; 
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    position: fixed;
    top: 2%;
    left: 2%;
  }
  
  .btn:hover {
    background-color: black;
    color: white;
  }
}

@media (max-width: 300px) {
  .header-section {
    height: 70vh;
  }

  .profile-image {
    width: 100px;
    height: 200px;
  }

  .header-section h2 {
    font-size: 2em;
    position: relative;
  }

  .header-section h1 {
    position: relative;
    font-size: 2.5em;
  }

  .btn {
    position: fixed;
    left: 50%;
    top: 2%;
  }
}
</style>
