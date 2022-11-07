<template>
  <Header></Header>
  <router-view />
  <Footer></Footer>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import HomeView from './views/HomeView.vue';
import BillingDetails from './components/BillingDetails.vue';
import Hero from './components/Hero.vue';
const oldScripts = [
  // 'src/assets/oldjs/jquery.min.js',
  '/src/assets/oldjs/jquery-migrate-3.0.1.min.js',
  '/src/assets/oldjs/popper.min.js',
  '/src/assets/oldjs/bootstrap.min.js',
  '/src/assets/oldjs/jquery.easing.1.3.js',
  '/src/assets/oldjs/jquery.waypoints.min.js',
  '/src/assets/oldjs/jquery.stellar.min.js',
  '/src/assets/oldjs/owl.carousel.min.js',
  '/src/assets/oldjs/jquery.magnific-popup.min.js',
  '/src/assets/oldjs/aos.js',
  '/src/assets/oldjs/jquery.animateNumber.min.js',
  '/src/assets/oldjs/bootstrap-datepicker.js',
  '/src/assets/oldjs/scrollax.min.js',
  '/src/assets/oldjs/google-map.js',
  '/src/assets/oldjs/main.js'
];
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  created() {
    let oldScript = document.createElement('script');
    oldScript.setAttribute('src', '/src/assets/oldjs/jquery.min.js');
    document.head.appendChild(oldScript);
  },

  mounted() {
    setTimeout(() => {
      oldScripts.map((s) => {
        let oldScript = document.createElement('script');
        oldScript.setAttribute('src', s);
        document.head.appendChild(oldScript);
      });
    }, 100);
  }
};
</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
