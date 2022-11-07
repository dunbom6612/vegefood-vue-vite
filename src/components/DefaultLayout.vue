<template>
  <Hero />
  <slot></slot>
</template>

<script>
import Hero from './Hero.vue';
export default {
  name: 'DefaultLayout',
  components: {
    Hero
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
