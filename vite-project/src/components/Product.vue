<template>
    <div class="product">
        <a href="#">
            <img class="product-image" :src="img" :alt="title">
        </a>
        <a href="#" class="product-name">{{ title }}</a>
        <span class="product-price">{{ price }} Р</span>
    </div>
</template>

<script setup>
const props = defineProps({
    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.product {
    &-image {
        display: block;
        margin-bottom: 24px;
    }
    &-name {
        color: black;
        display: block;
        font-size: 20px;
        line-height: 28px;
        font-family: var(--clash);
        margin-bottom: 8px;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
    &-price {
        display: block;
        font-size: 18px;
    }
}
</style>