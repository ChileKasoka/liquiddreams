<template>
    <footer class="footer">
      <div class="footer-container">
        <!-- Social Links Section -->
        <div class="social-links">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://facebook.com" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://instagram.com" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
  
        <!-- Quick Links Section -->
        <div class="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/store">Store</a></li>
            <li><a href="/explore">Explore</a></li>
          </ul>
        </div>
  
        <!-- Contact Section -->
        <div class="contact-info">
          <h4>Contact Us</h4>
          <p>Email: support@liquiddreams.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Dream Street, Fragrance City, PerfumeLand</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Liquid Dreams. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterVue",
  };
  </script>
  
  <style scoped>
  /* Footer Container */
  .footer {
    background-color: #2c3e50;
    color: white;
    padding: 2rem 1rem;
    text-align: center;
  }
  
  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;
    gap: 2rem;
  }
  
  .footer-container div {
    flex: 1;
    min-width: 200px;
  }
  
  /* Social Links Section */
  .social-links h4,
  .quick-links h4,
  .contact-info h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  
  .social-links ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 0;
  }
  
  .social-links ul li a {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s ease;
  }
  
  .social-links ul li a:hover {
    color: #feb47b; /* Matches the gradient of the homepage */
  }
  
  /* Quick Links Section */
  .quick-links ul {
    list-style: none;
    padding: 0;
  }
  
  .quick-links ul li {
    margin-bottom: 0.5rem;
  }
  
  .quick-links ul li a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .quick-links ul li a:hover {
    color: #ff7e5f;
  }
  
  /* Contact Info Section */
  .contact-info p {
    margin: 0.5rem 0;
  }
  
  /* Footer Bottom Section */
  .footer-bottom {
    margin-top: 2rem;
    border-top: 1px solid #444;
    padding-top: 1rem;
    font-size: 0.9rem;
    color: #bbb;
  }
  </style>
  