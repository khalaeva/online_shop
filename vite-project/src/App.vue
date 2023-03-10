<template>
  <div class="container">
    <Header/>
    <Hero/>
    <AboutBrand/>
    <Products/>
  </div>
</template>

<script setup>

import Header from './components/Layout/Header.vue'
import Hero from './components/Hero.vue'
import AboutBrand from './components/AboutBrand.vue'
import Products from './components/Product4Column.vue'

</script>

<style lang="scss">
@import url('https://fonts.cdnfonts.com/css/satoshi');
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  display: inline;
  font-family: 'Satoshi', sans-serif;
  font-size: 16px;
}

img {
  max-width: 100%;
}

.container{
  max-width: 1440px;
  margin: auto;
}
</style>
