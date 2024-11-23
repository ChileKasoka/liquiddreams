<template>
    <li class="dropdown">
      <a href="/store">STORE</a>
      <ul class="dropdown-menu">
        <li><a href="/store/men">Men</a></li>
        <li><a href="/store/women">Women</a></li>
        <li><a href="/store/affordable">Affordable</a></li>
        <li><a href="/store/luxury">Luxury</a></li>
        <li><a href="/store/clearance">Clearance Sales</a></li>
      </ul>
    </li>
  </template>
  
  <script>
  export default {
    name: "DropdownMenu",
  };
  </script>
  
  <style scoped>
  /* Dropdown Menu Styling */
  .dropdown {
    position: relative; /* Required for dropdown positioning */
  }
  
  .dropdown a {
    color: white; /* Link text color */
    text-decoration: none; /* Remove underline */
    font-size: 1rem; /* Font size */
    padding: 0.5rem; /* Clickable area */
    transition: color 0.3s ease; /* Smooth hover effect */
  }
  
  .dropdown a:hover {
    color: #ff7e5f; /* Hover color */
  }
  
  /* Dropdown List */
  .dropdown-menu {
    display: none; /* Hidden by default */
    position: absolute; /* Positioned relative to parent */
    top: 100%; /* Below the parent */
    left: 0; /* Align to the left */
    background-color: white; /* Background color */
    border: 1px solid #ddd; /* Light border */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Dropdown shadow */
    border-radius: 4px; /* Rounded corners */
    list-style: none; /* Remove bullets */
    padding: 0.5rem 0; /* Inner padding */
    z-index: 1000; /* Stay above other elements */
  }
  
  .dropdown-menu li {
    margin: 0; /* Reset margin */
  }
  
  .dropdown-menu li a {
    color: #333; /* Link color */
    text-decoration: none;
    font-size: 0.9rem; /* Slightly smaller font */
    padding: 0.5rem 1rem; /* Clickable padding */
    display: block; /* Full width clickable area */
    transition: background-color 0.3s ease, color 0.3s ease; /* Smooth hover */
  }
  
  .dropdown-menu li a:hover {
    background-color: #f7f7f7; /* Light background */
    color: #ff7e5f; /* Accent color */
  }
  
  /* Show dropdown on hover */
  .dropdown:hover .dropdown-menu {
    display: block; /* Make dropdown visible */
  }
  </style>
  