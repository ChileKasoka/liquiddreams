<template>
    <div class="carousel">
      <div class="carousel-container">
        <div
          class="carousel-slide"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div class="carousel-item" v-for="(image, index) in images" :key="index">
            <img :src="image.src" :alt="image.alt" />
          </div>
        </div>
      </div>
      <!-- Navigation Buttons -->
      <button class="prev-btn" @click="prevSlide">&#10094;</button>
      <button class="next-btn" @click="nextSlide">&#10095;</button>
  
      <!-- Dots for Slide Indicators -->
      <div class="dots">
        <span
          v-for="(image, index) in images"
          :key="'dot-' + index"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
    data() {
      return {
        currentSlide: 0, // Current slide index
        images: [
            { src: require('@/assets/img.png'), alt: 'Slide 1' },
            { src: require('@/assets/cover.jpg'), alt: 'Slide 2' },
            { src: require('@/assets/img.png'), alt: 'Slide 3' },
        ]
      };
    },
    methods: {
      nextSlide() {
        this.currentSlide =
          (this.currentSlide + 1) % this.images.length; // Move to the next slide
      },
      prevSlide() {
        this.currentSlide =
          (this.currentSlide - 1 + this.images.length) % this.images.length; // Move to the previous slide
      },
      goToSlide(index) {
        this.currentSlide = index; // Navigate to a specific slide
      },
    },
    mounted() {
      // Auto-slide every 5 seconds
      this.autoSlideInterval = setInterval(this.nextSlide, 5000);
    },
    beforeUnmount() {
      clearInterval(this.autoSlideInterval); // Clear the interval when the component is destroyed
    },
  };
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    width: 100%;
    height: 700px;
    overflow: hidden;
  }
  
  .carousel-container {
    display: flex;
    width: 100%;
    height: 100%;
  }
  
  .carousel-slide {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-item {
    min-width: 100%;
    height: 100%;
  }
  
  .carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .prev-btn,
  .next-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 1000;
  }
  
  .prev-btn {
    left: 10px;
  }
  
  .next-btn {
    right: 10px;
  }
  
  .dots {
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
  }
  
  .dots span {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 0 5px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    cursor: pointer;
  }
  
  .dots span.active {
    background-color: white;
  }
  </style>
  