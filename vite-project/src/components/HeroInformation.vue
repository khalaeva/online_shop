<template>
    <div class="hero-info" :style="{backgroundColor: background}">
        <div class="hero-info-text">
            <h2 
                class="hero-info__title"
                :style="{color: colorTitle}">{{ title }}</h2>
            <span 
                class="hero-info__description"
                :style="{color: colorDescription}">{{ description }}</span>
        </div>
        <a 
            :href="link" 
            class="hero-info-link"
            :style="{color: colorLink}">View Collection</a>
    </div>
</template>

<script setup>
import { stringifyExpression } from '@vue/compiler-core';

    const prop=defineProps({
        title: {
            type: String,
            required: false
        }, 
        description: {
            type: String,
            required: false
        },
        link: {
            type: String,
            required: false
        },
        colorTitle: {
            type: String, 
            default: ''
        },
        colorDescription: {
            type: String,
            default: ''
        },
        colorLink: {
            type: String, 
            default: ''
        },
        background: {
            type: String,
            default: ''
        }
    })
</script>

<style lang="scss" scoped>
.hero {
    &-info {
        background: #fff;
        width: 500px;
        padding: 50px 55px;
        min-height: 444px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &__title {
            font-weight: 400;
            line-height: 1.5;
            margin: 0 0 20px 0;
            font-family: 'Clash Display', sans-serif;
        }
        &__description {
            font-size: 18px;
        }
        &-link {
            color: black;
            text-decoration: none;
            width: 170px;
            height: 56px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(249, 249, 249, 0.15);
            cursor: pointer;
            &:hover {
                background: rgba(249, 249, 249, 0.30);
            }
        }
    }
}

</style>