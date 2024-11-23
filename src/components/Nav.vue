<template>
  <div class="navbar">
    <nav>
      <!-- Logo -->
      <div class="logo">
        <img width="60px" height="70px" src="../assets/liquid.png" alt="Liquid Logo" />
      </div>

      <!-- Navigation Menu -->
      <ul class="nav-menu">
        <li><a href="/">HOME</a></li>
        <li>
          <DropdownMenu />
        </li>
        <li><a href="/explore">EXPLORE</a></li>
      </ul>

      <!-- Search Bar -->
      <div class="search-bar">
        <input type="text" placeholder="Search for products..." />
        <button>Search</button>
      </div>
    </nav>
  </div>
</template>

<script>

import DropdownMenu from "./DropdownMenu.vue";

export default {
  name: "NavigationMenu",
    components: {
    DropdownMenu,
  },
};
</script>

<style scoped>
/* Navbar Styles */
.navbar {
  background-color: #2c3e50; /* Dark background for navbar */
  padding: 0.5rem 1rem; /* Padding for spacing */
}

nav {
  display: flex; /* Align items horizontally */
  align-items: center; /* Center vertically */
  justify-content: space-between; /* Space between logo, menu, and search bar */
}

/* Logo Styles */
.logo img {
  display: block; /* Prevent image collapse */
}

/* Navigation Menu Styles */
.nav-menu {
  list-style: none; /* Remove bullets from list */
  display: flex; /* Align menu items horizontally */
  gap: 1.5rem; /* Add spacing between menu items */
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
}

.nav-menu li a {
  color: white; /* Default link text color */
  text-decoration: none; /* Remove underline */
  font-size: 1rem; /* Font size for links */
  transition: color 0.3s ease; /* Smooth transition for hover effect */
}

/* Hover Effect */
.nav-menu li a:hover {
  color: #ff7e5f; /* Matches footer link hover color */
}

/* Search Bar Styles */
.search-bar {
  display: flex; /* Align input and button horizontally */
  align-items: center; /* Center vertically */
  gap: 0.5rem; /* Space between input and button */
}

.search-bar input {
  padding: 0.5rem; /* Add padding to input */
  font-size: 1rem; /* Font size for input text */
  border: 1px solid #ccc; /* Light border */
  border-radius: 4px; /* Rounded corners */
  width: 200px; /* Fixed width for the search bar */
}

.search-bar button {
  padding: 0.5rem 1rem; /* Add padding to the button */
  font-size: 1rem; /* Font size for button text */
  color: white; /* White text */
  background-color: #ff7e5f; /* Button background color */
  border: none; /* Remove border */
  border-radius: 4px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor for button */
  transition: background-color 0.3s ease; /* Smooth hover effect */
}

/* Button Hover Effect */
.search-bar button:hover {
  background-color: #ff5733; /* Slightly darker hover color */
}
</style>
