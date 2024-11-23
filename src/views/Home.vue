<template>
  <div class="home">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Taglines Section -->
    <TagLines />

    <ImageTextRow />

    <!-- About Section -->
     <AboutSection />

    <!-- Reviews Section -->
     <ReviewsSection />

    <!-- FAQ Section -->
     <FAQSection />

    <GoogleMap />

  </div>
</template>

<script>
import HeroSection from "../components/HeroSection.vue";
import ImageTextRow from "../components/ImageTextRow.vue";
import TagLines from "../components/Taglines.vue";
import GoogleMap from "../components/GoogleMap.vue";
import AboutSection from "@/components/AboutSection.vue";
import ReviewsSection from "@/components/ReviewsSection.vue";
import FAQSection from "@/components/FAQSection.vue";

export default {
  name: "HomeVue",
  components: {
    GoogleMap,
    TagLines,
    HeroSection,
    ImageTextRow,
    AboutSection,
    ReviewsSection,
    FAQSection,
  },
};
</script>

<style scoped>
/* General Styles */
.home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  line-height: 1.6;
  color: #2c3e50;
  background-color: rgb(255, 244, 219);
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
</style>
