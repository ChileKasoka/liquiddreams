<template>
  <section class="image-text-row">
    <!-- Container for the row -->
    <div class="row-container">
      <!-- Image Section -->
      <div class="image-container">
        <img src="../assets/SOULORIGINAL1.png" alt="Perfume Bottle" />
      </div>

      <!-- Text Section -->
      <div class="text-container">
        <h3>Experience Elegance</h3>
        <p>
          Discover the captivating scents crafted to ignite your senses. Each fragrance is
          designed with care, blending the finest ingredients to bring you a touch of
          sophistication. Unleash your inner elegance with Liquid Dreams.
        </p>
        <!-- Contact Us Button -->
        <button class="contact-btn" @click="openModal">Contact Us</button>
      </div>
    </div>

    <!-- Contact Form Modal -->
    <div v-if="isModalOpen" class="modal-overlay">
      <div class="modal-content">
        <h3>Contact Us</h3>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name</label>
            <input id="name" type="text" placeholder="Enter your name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" placeholder="Enter your email" required />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" rows="4" placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit" class="submit-btn">Send Message</button>
          <button type="button" class="close-btn" @click="closeModal">Close</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ImageTextRow",
  data() {
    return {
      isModalOpen: false, // Tracks whether the modal is open
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true; // Open modal
    },
    closeModal() {
      this.isModalOpen = false; // Close modal
    },
    submitForm() {
      alert("Message sent! We’ll get back to you soon."); // Add form submission logic here
      this.closeModal(); // Close modal after submission
    },
  },
};
</script>

<style scoped>
/* General styles for the section */
.image-text-row {
  padding: 2rem 1rem;
  background-color: #f7f7f7; /* Light background color */
}

/* Container styles */
.row-container {
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Image styles */
.image-container img {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Text styles */
.text-container {
  max-width: 600px;
}

.text-container h3 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.text-container p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}

/* Contact Us Button */
.contact-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  background-color: #ff7e5f;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-btn:hover {
  background-color: #ff5733;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.modal-content h3 {
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-btn {
  padding: 0.5rem 1rem;
  color: white;
  background-color: #ff7e5f;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 1rem;
}

.submit-btn:hover {
  background-color: #ff5733;
}

.close-btn {
  padding: 0.5rem 1rem;
  color: white;
  background-color: #555;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.close-btn:hover {
  background-color: #333;
}
</style>
