<template>
  <div id="app">
    <AnnouncementBanner />
    <NavMenu />
    <div class="content">
      <router-view />
    </div>
    <FooterVue />
  </div>
</template>

<script>
import FooterVue from './components/Footer.vue';
import NavMenu from './components/Nav.vue'
import AnnouncementBanner from './components/AnnouncementBanner.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    NavMenu,
    FooterVue,
    AnnouncementBanner,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content {
  flex: 1; /* Pushes footer to the bottom */
}

body {
  width: 100%;
  /* height: 100%; */
  /* overflow: hidden; */
}

</style>
