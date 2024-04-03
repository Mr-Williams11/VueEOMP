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
    background: linear-gradient(-40deg, black 65%, white 35%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}



footer {
  position: fixed;
  width: 100%;
  color: white;
  bottom: 0;
  height: 50px;
  font-size: 25px;
}

</style>