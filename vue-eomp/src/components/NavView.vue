<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
    <div class="container-fluid">
      <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel" aria-modal="true"><span class="logo">Joel Williams</span></h5>
      </div>
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
            <router-link to="/resume" class="nav-link">Education/Work</router-link>
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
  .container-fluid{
    width: 100%;
  }
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
    text-decoration: underline;
  }
  .logo {
    position: relative;
    font-size: 30px;
    color: transparent;
    text-decoration: none;
    -webkit-text-stroke: 1px black;
    transform: rotate(180deg);
    font-weight: 700;
    left: 150px;
    bottom: 15px;
    z-index: 1;
  }
  
  .logo:hover {
    color: black;
  }

  .collapse{
    background-color: transparent;
  }

  @media (min-width: 480px) and (max-width: 720px) {
  .container-fluid{
    position: relative;
    left: 100px;
  }
  .collapse{
    background-color: grey;
    box-shadow: 0px 0px 20px grey;
  }
  .logo {
    display: none;
  }
}

@media (min-width: 300px) and (max-width: 460px) {
  .logo {
    display: none;
  }
  .container-fluid{
    position: relative;
    left: 100px;
  }
  .collapse{
    background-color: grey;
    box-shadow: 0px 0px 20px grey;
  }
}
  </style>
