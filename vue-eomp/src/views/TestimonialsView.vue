<template>
  <div class="parallaxousel">
    <figure class="parallax-item">
      <picture>
        <img src="https://drive.google.com/uc?id=1q6UqDPBzrH0otqFuCKVXx4Uz8hQWyUHv" alt="A group of monstera leaves"  width="800" height="600" />
      </picture>
      <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card">
        <figcaption>{{ testimonial.name }}</figcaption>
        <p>{{ testimonial.Description }}</p>
      </div>
    </figure>

    <figure class="parallax-item">
      <picture>
        <img src="https://drive.google.com/uc?id=1Bv3WCRCczlDBkd0JsN0G_C0PhPJSeLgi" alt="A hotpink and purple abstract shaped image" width="800" height="600" />
      </picture>
      <figcaption>Abstract</figcaption>
    </figure>

    <figure class="parallax-item">
      <picture>
        <img src="https://drive.google.com/uc?id=1O_c7Eyg1A4eEWgxouIJWbj8Yco0LC1ly" alt="A group of monstera leaves"  width="800" height="600" />
      </picture>
      <figcaption>Monstera</figcaption>
    </figure>

    <figure class="parallax-item">
      <picture>
        <img src="https://drive.google.com/uc?id=1q6UqDPBzrH0otqFuCKVXx4Uz8hQWyUHv" alt="A group of monstera leaves"  width="800" height="600" />
      </picture>
      <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card">
        <figcaption>{{ testimonial.name }}</figcaption>
        <p>{{ testimonial.Description }}</p>
      </div>
    </figure>

    <figure class="parallax-item">
      <picture>
        <img src="https://drive.google.com/uc?id=1Bv3WCRCczlDBkd0JsN0G_C0PhPJSeLgi" alt="A hotpink and purple abstract shaped image" width="800" height="600" />
      </picture>
      <figcaption>Abstract</figcaption>
    </figure>

    <figure class="parallax-item">
      <picture>
        <img src="https://drive.google.com/uc?id=1O_c7Eyg1A4eEWgxouIJWbj8Yco0LC1ly" alt="A group of monstera leaves"  width="800" height="600" />
      </picture>
      <figcaption>Monstera</figcaption>
    </figure>
    `+`
  </div>
</template>

<script>
export default {
  computed: {
    testimonials() {
      return this.$store.state.Testimonials;
    },
  },
};
</script>

<style scoped>
  @keyframes squeeze {
    entry 0% {
      clip-path: inset(0% 100% 0% 0% round 30px);
    }
    entry 100% {
      clip-path: inset(0% 0% 0% 0% round 30px);
    }
    exit 0% {
      clip-path: inset(0% 0% 0% 0% round 30px);
    }
    exit 100% {
      clip-path: inset(0% 0% 0% 100% round 30px);
    }
  }

  @keyframes stay-centered {
    entry 0% {
      transform: translateX(-50%);
    }
    entry 100% {
      transform: translateX(0%);
    }
    exit 0% {
      transform: translateX(0%);
    }
    exit 100% {
      transform: translateX(50%);
    }
  }

  @keyframes fade-out {
    to {
      opacity: 0;
    }
  }

  @layer demo {
    .parallaxousel {
      container-type: inline-size;
      display: flex;
      padding: 2rem;
      scroll-padding: 2rem;
      gap: 1rem;
      overflow-x: auto;
      scroll-snap-type: x mandatory;

      > .parallax-item {
        scroll-snap-align: center;
        flex-shrink: 0;
      }
    }

    .parallax-item {
      max-inline-size: 70vw;
      max-block-size: 50vw;
      display: grid;
      place-items: end start;
      animation: squeeze linear both;
      animation-timeline: view(inline);
      timeline-scope: --parallax-item;

      > * {
        grid-area: 1/1;
      }

      > picture {
        height: 500px;
      }

      > figcaption {
        padding: 1rem;
        font-size: 1.5rem;
        font-weight: 200;
        position: sticky;
        left: 0;
        animation: fade-out linear both reverse, fade-out linear both;
        animation-timeline: view(inline);
        view-timeline: --parallax-item inline;
        animation-range: entry 90%, contain 90% exit 10%;
      }

      & img {
        block-size: 100%;
        inline-size: 100%;
        object-fit: cover;
        animation: stay-centered linear both;
        animation-timeline: view(inline);
        timeline-scope: --parallax-item;
      }
    }
  }

  @layer demo.support {
    * {
      box-sizing: border-box;
      margin: 0;
    }

    html {
      block-size: 100%;
      color-scheme: dark light;
    }

    body {
      min-block-size: 100%;
      font-family: system-ui, sans-serif;
    }
  }

    img{
      
    }
</style>
