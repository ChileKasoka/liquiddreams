<template>
  <div class="home">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Taglines Section -->
    <TagLines />

    <ImageTextRow />

    <!-- About Section -->
    <section class="about-section">
      <h2>About Liquid Dreams</h2>
      <p>
        At Liquid Dreams, we specialize in crafting an exquisite collection of premium perfumes.
        Each fragrance tells a unique story, evoking memories and emotions that linger for a lifetime.
        Our mission is to deliver elegance, sophistication, and luxury in every bottle.
      </p>
    </section>

    <!-- Reviews Section -->
    <section class="reviews-section">
      <h2>What Our Customers Say</h2>
      <div class="reviews">
        <div class="review">
          <h3>John Doe</h3>
          <p>"Liquid Dreams perfumes are absolutely divine! The quality is unmatched, and the fragrance lasts all day."</p>
        </div>
        <div class="review">
          <h3>Jane Smith</h3>
          <p>"Every scent feels like a masterpiece. I've never felt more confident wearing a fragrance."</p>
        </div>
        <div class="review">
          <h3>Alex Johnson</h3>
          <p>"Beautifully crafted perfumes with a touch of class. Highly recommend for anyone seeking luxury."</p>
        </div>
      </div>
    </section>

    <GoogleMap />

  </div>
</template>

<script>
import HeroSection from "../components/HeroSection.vue";
import ImageTextRow from "../components/ImageTextRow.vue";
import TagLines from "../components/Taglines.vue";
import GoogleMap from "../components/GoogleMap.vue";





export default {
  name: "HomeVue",
  components: {
    GoogleMap,
    TagLines,
    HeroSection,
    ImageTextRow,
  },
};
</script>

<style scoped>
/* General Styles */
.home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  line-height: 1.6;
  color: #2c3e50;
}

/* Taglines Section */
.taglines {
  text-align: center;
  padding: 3rem 1rem;
  /* background: linear-gradient(135deg, #2c3e50, #46637f); Beautiful gradient */
  color: #2c3e50;
  border-radius: 8px;
  margin: 2rem 0;
}

.taglines h1 {
  font-family: "Playfair Display", serif; /* Elegant serif font */
  font-size: 3rem; /* Larger font size */
  font-weight: 800;
  margin: 1rem 0;
  text-transform: uppercase;
  letter-spacing: 3px;
  line-height: 1.3;
}

/* About Section */
.about-section {
  margin: 2rem auto;
  padding: 1.5rem;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  max-width: 800px;
}

.about-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.about-section p {
  font-size: 1.1rem;
  color: #666;
}

/* Reviews Section */
.reviews-section {
  margin: 3rem auto;
  padding: 1.5rem;
  text-align: center;
  background-color: #f3f3f3;
  border-radius: 8px;
  max-width: 900px;
}

.reviews-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.reviews {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.review {
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  text-align: left;
}

.review h3 {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.review p {
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
}
</style>
