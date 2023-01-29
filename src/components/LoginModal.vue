<template>
  <div id="login-modal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content bg-dark">
        <div class="modal-header">
          <h5 class="modal-title">
            Login
          </h5>

          <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
          >
          </button>
        </div>

        <div class="modal-body">
          <form novalidate @submit="login">
            <div class="mb-3">
              <label for="email" class="form-label text-bg-dark">Email address</label>
              <input
                  type="email"
                  class="form-control"
                  id="email"
                  required
              >
              <div class="invalid-tooltip">
                Please enter a valid email address.
              </div>
            </div>

            <div class="mb-3">
              <label for="password" class="form-label text-bg-dark">Password</label>
              <input
                  type="password"
                  class="form-control"
                  id="password"
                  pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
                  required
              >
              <div class="invalid-tooltip">
                Your password must be at least 8 characters long, contain at least one number, one uppercase and lowercase letter, and one special character.
              </div>
            </div>

            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="rememberMe">
              <label class="form-check-label" for="rememberMe">Remember me</label>
            </div>

            <div class="col-12">
              <button
                  type="submit"
                  class="btn btn-primary"
                  aria-label="Submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginModal",
  methods: {
    login(event) {
      if(!event.target.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      event.target.classList.add('was-validated');
    }
  }
}
</script>

<style scoped>
  .form-control {
    background-color: #212529;
    color: #fff;
  }

  .form-control:focus {
    background-color: #1d1e23;
    color: #fff;
  }
</style>