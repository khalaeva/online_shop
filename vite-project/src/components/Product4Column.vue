<template>
  <div class="products-container">
    <div class="products">
        <Product
        v-for="product of products" 
        :key="product.id"
        :img="product.img"
        :title="product.title"
        :price="product.price"/>
    </div>
    <div class="products-link">
      <ui-button color="lightgray" type="link" to="/" class="products-link">
        View Collection 
      </ui-button>
    </div>
  </div>
</template>

<script setup>
import Product from '@/components/Product.vue'
import uiButton from '@/components/UI/Button.vue'
import { ref } from 'vue'

const products = ref([
  {
    id: 1,
    img: '/img/pro-1.jpg', 
    title: 'Iphone 13',
    price: 100
  },
  {
    id: 2, 
    img: '/img/pro-2.jpg', 
    title: 'AirPods',
    price: 50
  },
  {
    id: 3, 
    img: '/img/pro-3.jpg', 
    title: 'Iphone 12',
    price: 10
  },
  {
    id: 4,
    img: '/img/pro-4.jpg', 
    title: 'Charger',
    price: 100000
  }
])
</script>

<style lang="scss" scoped>
.products{
    padding: 0 80;
    display: flex;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    margin-bottom: 64px;
    &-container {
      margin-bottom: 56px;
    }
    &-link {
      text-align: center;
    }
}
</style>