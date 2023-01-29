<template>
  <header>
    <div class="wrapper">
      <Navbar />
    </div>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <div id="modals">
    <LoginModal />
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar.vue";
  import LoginModal from "@/components/LoginModal.vue";

  export default {
    name: "App",
    components: {
      LoginModal,
      Navbar
    }
  };
</script>

<style scoped>
</style>
