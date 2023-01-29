<template>
  <nav class="navbar navbar-expand-lg fixed-top">
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
    transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;
  }

  .navbar .nav-link {
    color: var(--color-text);
  }

  .navbar .nav-link.active {
    color: var(--color-text-active);
  }
  .navbar .nav-link.active::after {
    content: " ";

    bottom: 0;
    left: 0;
    right: 0;

    margin-left: auto;
    margin-right: auto;

    position: absolute;
    width: 80%;

    border-bottom: 2px solid var(--color-text-active);
    animation: 0.1s ease-out 1 growth;
  }

  @keyframes growth {
    from {
      width: 0;
    }
    to {
      width: 80%;
    }
  }

  .navbar .navbar-brand {
    color: var(--color-heading);
  }
</style>