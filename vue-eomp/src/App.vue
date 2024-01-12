<template>
<section id="space">
</section>
  <div id="app">
    <NavView />
    <SpinnerView />
    <FooterView />
  </div>
</template>

<script>
import FooterView from './components/FooterView.vue';
import NavView from './components/NavView.vue';
import SpinnerView from './components/SpinnerView.vue';

export default {
  components: { NavView, FooterView, SpinnerView },
};

</script>

<style>
body {
  height: 100vh;
  overflow: hidden;
  width: 100%;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: linear-gradient(-45deg, aquamarine, darkblue, aquamarine, darkblue);
  background-size: 400% 400%;
  animation: sky 7s ease infinite;
}

@keyframes sky {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.container-fluid {
  background-color: transparent;
}

.nav-link {
  list-style: none;
  font-size: 20px;
  font-weight: bold;
  color: black;
  text-decoration: none;
}

.router-link-exact-active {
  text-decoration: underline;
}

.nav-link:hover {
  color: black;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  color: white;
  height: 50px;
  font-size: 30px;
}

</style>