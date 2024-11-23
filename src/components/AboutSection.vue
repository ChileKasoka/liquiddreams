<template>
    <div class="about-row">
      <section class="about-section">
        <div class="content-wrapper">
          <div class="text-content">
            <h2>Why Liquid Dreams?</h2>
            <p>
              At Liquid Dreams, we specialize in crafting an exquisite collection of premium perfumes.
              Each fragrance tells a unique story, evoking memories and emotions that linger for a lifetime.
              Our mission is to deliver elegance, sophistication, and luxury in every bottle.
            </p>
          </div>
          <div class="image-content">
            <img src="https://via.placeholder.com/500x500" alt="Luxury Perfume Bottles" />
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutSection",
  };
  </script>
  
  <style scoped>
  /* About Row */
  .about-row {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fafafa; /* Neutral background for contrast */
    padding: 2rem;
  }
  
  /* About Section */
  .about-section {
    background: linear-gradient(135deg, #f7e1f3, #fde2cf, #e8d5f7);
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 1200px;
    width: 100%;
    padding: 2rem;
    font-family: "Lora", serif;
  }
  
  .content-wrapper {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  
  /* Text Content */
  .text-content {
    flex: 1;
  }
  
  .text-content h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #2c3e50;
  }
  
  .text-content p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.6;
  }
  
  /* Image Content */
  .image-content {
    flex: 1;
    text-align: right;
  }
  
  .image-content img {
    width: 100%;
    max-width: 500px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>
  