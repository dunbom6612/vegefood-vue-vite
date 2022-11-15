<template>
  <div class="py-1 bg-primary">
    <div class="container">
      <div
        class="row no-gutters d-flex align-items-start align-items-center px-md-0"
      >
        <div class="col-lg-12 d-block">
          <div class="row d-flex">
            <div class="col-md pr-4 d-flex topper align-items-center">
              <div
                class="icon mr-2 d-flex justify-content-center align-items-center"
              >
                <span class="icon-phone2"></span>
              </div>
              <span class="text">+84 03260326</span>
            </div>
            <div class="col-md pr-4 d-flex topper align-items-center">
              <div
                class="icon mr-2 d-flex justify-content-center align-items-center"
              >
                <span class="icon-paper-plane"></span>
              </div>
              <span class="text">health.food@gmail.com</span>
            </div>
            <div
              class="col-md-5 pr-4 d-flex topper align-items-center text-lg-right"
            >
              <span class="text"
                >3-5 Business days delivery &amp; Free Returns</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav
    class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
    id="ftco-navbar"
  >
    <div class="container">
      <router-link to="/" class="navbar-brand">Vegefoods</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="oi oi-menu"></span> Menu
      </button>

      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdown04"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >Shop</a
            >
            <div class="dropdown-menu" aria-labelledby="dropdown04">
              <router-link to="/shop" class="dropdown-item">Shop</router-link>

              <router-link to="/wishlist" class="dropdown-item"
                >Wishlist</router-link
              >
              <router-link to="/cart" class="dropdown-item">Cart</router-link>
              <router-link to="/checkout" class="dropdown-item"
                >Checkout</router-link
              >
            </div>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/blog" class="nav-link"> Blog </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact-us" class="nav-link">Contact</router-link>
          </li>
          <li class="nav-item cta cta-colored">
            <router-link to="/cart" class="nav-link">
              <span class="icon-shopping_cart"></span
              >{{ `[${cartStore.items.length || 0}]` }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- END nav -->
</template>

<script>
import { cartStore } from '../stores/cart';

export default {
  name: 'Header',
  components: {},
  data() {
    return {
      cartStore
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
