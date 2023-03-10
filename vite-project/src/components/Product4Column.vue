<template>
    <div class="products">
        <Product
        v-for="product of products" 
        :key="product.id"
        :img="product.img"
        :title="product.title"
        :price="product.price"/>
    </div>
</template>

<script setup>
import Product from '../components/Product.vue'
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
}
</style>