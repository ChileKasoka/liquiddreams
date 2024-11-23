<template>
    <div class="store-page">
      <h1>Welcome to the Store</h1>
      <p>Explore our wide range of products categorized to suit your preferences.</p>
  
      <!-- Include CategoryList component -->
      <CategoryList />
    </div>
  </template>
  
  <script>
  import CategoryList from "../components/CategoryList.vue";
  
  export default {
    name: "StoreVue",
    components: {
      CategoryList, // Register the reusable component
    },
  };
  </script>
  
  <style scoped>
  .store-page {
    text-align: center;
    padding: 2rem 1rem;
  }
  
  h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 2rem;
  }
  </style>
  