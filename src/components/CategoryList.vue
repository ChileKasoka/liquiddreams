<template>
    <div class="categories">
      <h2>Shop by Category</h2>
      <ul class="category-list">
        <li><a href="/store/men">Men</a></li>
        <li><a href="/store/women">Women</a></li>
        <li><a href="/store/affordable">Affordable</a></li>
        <li><a href="/store/luxury">Luxury</a></li>
        <li><a href="/store/clearance">Clearance Sales</a></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "CategoryList",
  };
  </script>
  
  <style scoped>
  .categories {
    text-align: center;
    margin-top: 2rem;
  }
  
  h2 {
    font-size: 2rem;
    color: #2c3e50; /* Dark heading color */
    margin-bottom: 1rem;
  }
  
  .category-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap; /* Wrap categories into rows if necessary */
    justify-content: center;
    gap: 1rem; /* Space between items */
    padding: 0;
    margin: 0;
  }
  
  .category-list li {
    padding: 0.5rem 1rem;
    background-color: #f7f7f7; /* Light background */
    border: 1px solid #ddd; /* Border */
    border-radius: 4px; /* Rounded corners */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover effects */
  }
  
  .category-list li:hover {
    transform: translateY(-3px); /* Subtle lift on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow on hover */
  }
  
  .category-list li a {
    text-decoration: none;
    color: #333; /* Text color */
    font-size: 1rem; /* Font size */
  }
  
  .category-list li a:hover {
    color: #ff7e5f; /* Accent color on hover */
  }
  </style>
  