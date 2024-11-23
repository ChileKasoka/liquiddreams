<template>
    <div class="google-map">
      <iframe
        :src="mapSrc"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </template>
  
  <script>
  export default {
    name: "GoogleMap",
    data() {
      return {
        // Replace with your desired Google Maps location URL
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086164!2d144.96315791531825!3d-37.81362797975178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5776f3ec2b9eb6b!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1636378879651!5m2!1sen!2sus",
      };
    },
  };
  </script>
  
  <style scoped>
  .google-map {
    width: 100%; /* Full-width container */
    height: 400px; /* Height of the map */
    margin: 2rem 0; /* Space around the map */
    border: none;
  }
  
  .google-map iframe {
    width: 100%; /* Full-width iframe */
    height: 100%; /* Full-height iframe */
    border: none; /* Remove border */
    border-radius: 10px; /* Add rounded corners if desired */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add a soft shadow */
  }
  </style>
  