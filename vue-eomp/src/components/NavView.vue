<template>
<nav class="navbar navbar-expand-lg navbar-light bg-transparent">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/project" class="nav-link">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/resume" class="nav-link">Resume</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/testimonials" class="nav-link">Testimonials</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<router-view/>
</template>
<script>
export default {
    
}
</script>

<style>
.navbar {
position: fixed;
width: 100%;
top: 15px;
right: 100px;
z-index: 1;
}

.nav-link {
  list-style: none;
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  height: 50px;
}

.router-link-exact-active {
  text-decoration: underline;
}

.nav-link:hover {
  color: white;
}
</style>