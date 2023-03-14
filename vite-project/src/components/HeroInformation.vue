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
        <ui-button :color="colorLink || 'second'" type="link" to="/">
            View Collection 
        </ui-button>
    </div>
</template>

<script setup>
import { stringifyExpression } from '@vue/compiler-core';
import uiButton from '@/components/UI/Button.vue';

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
            required: false
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
        align-items: flex-start;
        &__title {
            font-weight: 400;
            line-height: 1.5;
            margin: 0 0 20px 0;
            font-family: var(--clash);
        }
        &__description {
            font-size: 18px;
        }
    }
}
</style>