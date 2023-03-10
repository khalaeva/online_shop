<script setup>
import Header from './components/Layout/Header.vue'
</script>

<template>
  <div class="container">
    <Header/>
  </div>
</template>

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
.container{
  max-width: 1440px;
  margin: auto;
}
</style>
