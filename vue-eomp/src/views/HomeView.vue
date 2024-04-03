<template>
  <div class="portfolio">
    <section class="header-section">
      <img src="https://iili.io/J76YW8J.png" alt="Profile Image" class="profile-image" />
      <div class="text-container">
        <h2 class="intro" id="intro">{{ intro }}</h2>
        <h1 class="name">{{ name }}</h1>
        <h2 class="intro" id="intro">Im an Aspiring Developer</h2>
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
  .portfolio {
    width: 100%;
    position: relative;
    top: 20px;
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
    margin-right: 20px;
    animation: fadeIn 2s ease-out;
    position: relative;
    bottom: 30px;
    background: linear-gradient(-40deg, white 45.3%, black 35%);
  }
  
  .text-container {
    display: flex;
    flex-direction: column;
  }
  
  .header-section h2 {
    left: 100px;
    font-size: 3.5em;
    color: white;
    animation: slideInLeft 2s ease-out, infinite;
    position: relative;
  }
  
  .header-section h1 {
  position: relative;
  left: 150px;
  font-size: 4em;
  color: transparent;
  -webkit-text-stroke: .5px white;
  animation: scaleIn 1s ease-out;
  background-image: linear-gradient(white, white);
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    background-position: -410px 0;
    animation: animateText 6s linear infinite;
  animation: animateText 6s linear infinite;
}

@keyframes animateText{
    0%,95%,100%{
        background-position: -810px 0;
    }
    65%,85%{
        background-position: 0 0;
    }
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
  .btn {
    padding: 10px 20px;
    font-size: 1.2em;
    background-color: white;
    color: black; 
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    position: relative;
    left: 15%;
  }
  
  .btn:hover {
    background-color: black;
    color: white;
    border: 2px solid white;
    box-shadow: 10px 10px 10px white;
    transition: 1s;
  }

@media screen and (max-width: 720px) {
  .profile-image {
    width: 300px;
    height: 450px;
  }
}

@media screen and (max-width: 320px) {
  .header-section {
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .profile-image {
    width: auto;
    height: 200px;
    position: relative;
    left: 150px;
   
  }

  .header-section h2 {
    font-size: 2em;
  }

  .header-section .name{
    font-size: .7rem;
  }

  #intro{
    font-size: 0.7rem;
  }

  .btn {
    position: relative;
    font-size: 0.5rem;
    left: 130px;
  }
}
</style>
1