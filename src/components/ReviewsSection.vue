<template>
    <div class="reviews-row">
      <section class="reviews-section">
        <h2>Reviews</h2>
        <div class="reviews">
          <div class="review" v-for="(review, index) in reviews" :key="index">
            <img :src="review.image" :alt="review.name" class="review-image" />
            <div class="review-content">
              <h3>{{ review.name }}</h3>
              <p>"{{ review.comment }}"</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "ReviewsSection",
    data() {
      return {
        reviews: [
          {
            name: "John Doe",
            comment: "Liquid Dreams perfumes are absolutely divine! The quality is unmatched, and the fragrance lasts all day.",
            image: "https://via.placeholder.com/80",
          },
          {
            name: "Jane Smith",
            comment: "Every scent feels like a masterpiece. I've never felt more confident wearing a fragrance.",
            image: "https://via.placeholder.com/80",
          },
          {
            name: "Alex Johnson",
            comment: "Beautifully crafted perfumes with a touch of class. Highly recommend for anyone seeking luxury.",
            image: "https://via.placeholder.com/80",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Reviews Row */
  .reviews-row {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #dfdfdf;
    padding: 2rem;
  }
  
  /* Reviews Section */
  .reviews-section {
    background: linear-gradient(135deg, #f7e1f3, #fde2cf, #e8d5f7);
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    max-width: 1200px;
    width: 100%;
    text-align: center;
    height: 80%;
  }
  
  .reviews-section h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #2c3e50;
    animation: fadeIn 1.2s ease-in-out;
  }
  
  /* Reviews Container */
  .reviews {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    animation: slideIn 1.5s ease-out;
  }
  
  /* Individual Review Card */
  .review {
    display: flex;
    align-items: flex-start;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    max-width: 350px;
    flex: 1;
    min-width: 280px;
    transform: scale(0.9);
    opacity: 0;
    animation: scaleIn 0.8s ease-in forwards;
  }
  
  .review:nth-child(1) {
    animation-delay: 0.2s;
  }
  
  .review:nth-child(2) {
    animation-delay: 0.4s;
  }
  
  .review:nth-child(3) {
    animation-delay: 0.6s;
  }
  
  .review:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  /* Review Image */
  .review-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  /* Review Content */
  .review-content h3 {
    font-size: 1.2rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }
  
  .review-content p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
  }
  
  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes scaleIn {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  </style>  