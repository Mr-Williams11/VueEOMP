<template>
    <div>
      <div v-if="loading" class="spinner">
        <i class="fas fa-spinner fa-spin"></i>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loading: true, 
      };
    },
    mounted() {
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
  };
  </script>
  
  <style>
  .spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .spinner i {
    font-size: 3em;
    color: black;
  }
  </style>
  