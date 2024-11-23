<template>
    <div class="announcement-banner">
      <div class="ticker">
        <span>{{ message }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: "This is an important announcement! Stay tuned for more updates."
      };
    }
  };
  </script>
  
  <style scoped>
  .announcement-banner {
    width: 100%;
    background-color: #333;
    color: white;
    font-size: 20px;
    padding: 10px;

    top: 0;
    left: 0;
  }
  
  .ticker {
    display: inline-block;
    white-space: nowrap;
    animation: ticker-animation 15s linear infinite;
  }
  
  @keyframes ticker-animation {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  </style>
  