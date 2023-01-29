<template>
  <nav class="navbar navbar-expand-lg fixed-top bg-dark bg-transparent">
    <div class="container-fluid">
      <router-link class="navbar-brand ms-2" to="/">Brew.en</router-link>
      <button class="navbar-toggler" type="button" aria-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="modal" data-bs-target="#login-modal">Login</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import $ from "jquery";

  $(window).scroll(function() {
    let navbar = $('.navbar');
    navbar.toggleClass('navbar-scrolled bg-dark shadow', $(this).scrollTop() > navbar.height());
  });
  export default {
    name: "Navbar",
  }
</script>

<style scoped>
  a.nav-link {
    cursor: pointer;
  }

  .navbar {
    color: #fff;
    transition: background-color 0.5s ease, box-shadow 0.5s ease, padding 0.5s ease;
  }

  .navbar-scrolled .nav-link,
  .navbar-scrolled .navbar-brand {
    color: #fff;
    background-color: var(--color-background-soft);
  }
</style>