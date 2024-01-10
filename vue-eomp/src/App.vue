
<template>
  <NavView />
  <FooterView/>
</template>

<script>
import FooterView from './components/FooterView.vue';
import NavView from './components/NavView.vue';

export default{
  components: { NavView, FooterView }
}
</script>

<style>

body{
  height: 100vh;
  overflow: hidden;
  width: 100%;
  background: linear-gradient(#87CEEB, #1E90FF);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

.container-fluid{
  background-color: transparent;
}

.nav-link{
  list-style: none;
  font-size: 20px;
  font-weight: bold;
  color: black;
  text-decoration: none;
}

.router-link-exact-active {
  text-decoration: underline;
}

footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  color: black;
  height: 50px;
}
</style>
