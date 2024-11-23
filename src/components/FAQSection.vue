<template>
    <div class="faq-section">
      <h2>FAQs</h2>
      <div class="faq-container">
        <div 
          class="faq-card" 
          v-for="(faq, index) in faqs" 
          :key="index" 
          @click="toggleFAQ(index)"
        >
          <div class="faq-header">
            <h3>{{ faq.question }}</h3>
            <span :class="{ rotate: activeFAQ === index }">▼</span>
          </div>
          <div class="faq-body" v-if="activeFAQ === index">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FAQSection",
    data() {
      return {
        activeFAQ: null,
        faqs: [
          {
            question: "What is Liquid Dreams?",
            answer: "Liquid Dreams is a premium perfume brand offering luxurious fragrances designed to leave a lasting impression."
          },
          {
            question: "Do you offer sample sizes?",
            answer: "Yes, we offer sample sizes for most of our fragrances. Visit the Shop page for more details."
          },
          {
            question: "Are your products cruelty-free?",
            answer: "Absolutely! All of our perfumes are 100% cruelty-free and ethically sourced."
          },
          {
            question: "How can I track my order?",
            answer: "Once your order is placed, you will receive a tracking number via email to monitor your delivery."
          },
        ]
      };
    },
    methods: {
      toggleFAQ(index) {
        this.activeFAQ = this.activeFAQ === index ? null : index;
      }
    }
  };
  </script>
  
  <style scoped>
  /* FAQ Section Styling */
  .faq-section {
    margin: 2rem auto;
    padding: 2rem;
    max-width: 1000px;
    background: linear-gradient(120deg, #c2e9fb, #f9e6e8);
    border-radius: 12px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
  
  .faq-section h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #34495e;
  }
  
  /* FAQ Container */
  .faq-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  /* FAQ Card */
  .faq-card {
    background: linear-gradient(120deg, #fdfbfb, #ebedee);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }
  
  .faq-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
  
  /* FAQ Header */
  .faq-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .faq-header h3 {
    font-size: 1.2rem;
    margin: 0;
    color: #2c3e50;
  }
  
  .faq-header span {
    font-size: 1.5rem;
    color: #34495e;
    transition: transform 0.3s ease;
  }
  
  .faq-header span.rotate {
    transform: rotate(180deg);
  }
  
  /* FAQ Body */
  .faq-body {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #ddd;
    color: #7f8c8d;
    font-size: 1rem;
    line-height: 1.6;
    animation: fadeIn 0.3s ease-out;
  }
  
  /* Grid Layout for Larger Screens */
  @media (min-width: 768px) {
    .faq-container {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  