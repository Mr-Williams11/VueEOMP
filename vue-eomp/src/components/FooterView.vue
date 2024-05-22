<template>
    <footer>
      &copy; Joel Williams <span>{{ currYear }}</span>
      <div class="social-icons">
        <a href="https://www.linkedin.com/">
          <i class="fa fa-linkedin"></i>
        </a>
        <a href="https://github.com/">
          <i class="fa fa-github"></i>
        </a>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currYear: new Date().getFullYear()
      }
    }
  }
  </script>
  
  <style>
  footer {
    color: white;
    padding: 10px;
    text-align: center;
    width: 100%;
    position: fixed;
    left: 0px;
    bottom: 0px; /* Adjust this according to your layout */
  }
  
  footer span {
    font-weight: bold;
  }
  
  .social-icons {
    margin-top: 10px; /* Adjust this according to your preference */
  }
  
  .social-icons a {
    color: white;
    margin: 0 5px; /* Adjust this according to your preference */
    font-size: 20px;
  }
  
  .social-icons a:hover {
    color: #007bff; /* Change to your preferred hover color */
  }
  </style>
  