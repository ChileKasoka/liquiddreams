<template>
    <section class="taglines">
      <div v-for="(tagline, index) in taglines" :key="index" :class="`tagline tagline-${index}`">
        <h1>{{ tagline }}</h1>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "TagLines",
    data() {
      return {
        taglines: [
          "Unleash Your Senses",
          "Luxury in Every Drop",
          "Experience the Art of Fragrance",
        ],
      };
    },
    mounted() {
      // Add a scroll event listener when the component is mounted
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
      // Clean up the event listener when the component is destroyed
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        const taglines = document.querySelectorAll(".tagline");
        const triggerPoint = window.innerHeight * 0.9; // Trigger animation when 90% of the element is in view
  
        taglines.forEach((tagline) => {
          const position = tagline.getBoundingClientRect().top;
          if (position < triggerPoint) {
            tagline.classList.add("visible");
          } else {
            tagline.classList.remove("visible");
          }
        });
      },
    },
  };
  </script>
  
  
  <style scoped>
  /* Taglines Section */
  .taglines {
    height: 100vh; /* Full-screen height */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #ff7e5f, #feb47b); /* Gradient background */
    color: white;
    text-align: center;
    overflow: hidden; /* Hide animations outside the container */
    position: relative;
  }
  
  /* Individual Tagline Styles */
  .tagline {
    font-size: 4rem; /* Large font size */
    font-weight: bold;
    opacity: 0; /* Hidden by default */
    transform: translateY(50px); /* Initial position */
    transition: all 0.7s ease-out; /* Smooth animation */
  }
  
  /* Animation Active State */
  .tagline.visible {
    opacity: 1;
    transform: translateY(0); /* Move to default position */
  }
  
  /* Adjust font sizes for smaller screens */
  @media (max-width: 768px) {
    .tagline {
      font-size: 2.5rem;
    }
  }
  </style>
  